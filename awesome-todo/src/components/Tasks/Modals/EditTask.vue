<template>
	<q-card>

		<modal-header>Add Task</modal-header>

		<q-form @submit.prevent="submitForm">			

			<q-card-section>

				<modal-task-name 
				:name.sync="tasktoSubmit.name"
				ref="modalTaskName"/>

				<modal-due-date 
				:dueDate.sync="tasktoSubmit.dueDate"
				@clear="clearDueDate"/>

				<modal-due-time 
				v-if="tasktoSubmit.dueDate"
				:dueTime.sync="tasktoSubmit.dueTime"/>
				
			</q-card-section>

			<modal-buttons></modal-buttons>
			
		</q-form>		      
	</q-card>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		props:['task', 'id'],
		data(){
			return {
				tasktoSubmit: {}
			}
		},

		methods: {
			...mapActions('tasks', ['updateTask']),
			submitForm(){				
				this.$refs.modalTaskName.$refs.name.validate()
				if (!this.$refs.modalTaskName.$refs.name.hasError) {
					this.submitTask()
				}
			},

			submitTask(){
				this.updateTask({
					id: this.id,
					updates: this.tasktoSubmit
				})
				this.$emit('close')
			},

			clearDueDate(){
				this.tasktoSubmit.dueDate = ''
				this.tasktoSubmit.dueTime = ''
			}
		},

		components: {
			'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
			'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
			'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
			'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
			'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
		},

		mounted(){
			this.tasktoSubmit = Object.assign({}, this.task)
		}
	}
	
</script>

<style type="text/css">
	
</style>