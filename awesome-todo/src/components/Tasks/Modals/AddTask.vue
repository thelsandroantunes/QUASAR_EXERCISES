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
		mixins: [mixinAddEditTask],
		data(){
			return {
				tasktoSubmit: {
					name: '',					
					dueDate: '',
					dueTime: '',
					completed: false

				}
			}
		},

		methods: {
			...mapActions('tasks', ['addTask']),

			submitTask(){
				this.addTask(this.tasktoSubmit)
				this.$emit('close')
			}
		},

		
	}
	
</script>

<style type="text/css">
	
</style>