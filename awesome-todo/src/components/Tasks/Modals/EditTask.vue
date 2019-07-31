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
	import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

	export default {
		props:['task', 'id'],
		mixins: [mixinAddEditTask],
		data(){
			return {
				tasktoSubmit: {}
			}
		},

		methods: {
			...mapActions('tasks', ['updateTask']),
			submitTask(){
				this.updateTask({
					id: this.id,
					updates: this.tasktoSubmit
				})
				this.$emit('close')
			}
		},
		mounted(){
			this.tasktoSubmit = Object.assign({}, this.task)
		}
	}
	
</script>

<style type="text/css">
	
</style>