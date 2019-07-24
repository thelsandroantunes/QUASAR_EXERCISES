<template>
	<q-card>
        <q-card-section class="row">
          <div class="text-h6">Add Task</div>
          <q-space />
          <q-btn 
          	v-close-popup
          	flat 
          	round 
          	dense
          	color="primary" 
          	icon="close" />
        </q-card-section>

        <q-form @submit.prevent="submitForm">
        	<q-card-section>
	        	<div class="row q-mb-sm">
		            <q-input 
		            	outlined 
		            	v-model="tasktoSubmit.name" 
		            	:rules="[val => !!val || 'Field is required']"
		            	autofocus
		            	ref="name"
		            	label="Task name" 
		            	class="col">

			            <template v-slot:append>
				          <q-icon
				          	v-if="tasktoSubmit.name" 
				          	clearable
				          	name="close" 
				          	@click="tasktoSubmit.name = ''" 
				          	class="cursor-pointer" />
				        </template>
			    	</q-input>
	            </div>

	            <div class="row q-mb-sm">
		            <q-input 
		            	outlined 
		            	v-model="tasktoSubmit.dueDate"
		            	label="Due date"
		            	class="col">
						<template v-slot:append>
							<q-icon
					          	v-if="tasktoSubmit.dueDate" 
					          	clearable
					          	name="close" 
					          	@click="clearDueDate" 
					          	class="cursor-pointer" />
							<q-icon name="event" class="cursor-pointer">
							  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
							    <q-date v-model="tasktoSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
							  </q-popup-proxy>
							</q-icon>
							
						</template>
				    </q-input>
			    </div>

			    <div 
			    	v-if="tasktoSubmit.dueDate"
			    	class="row q-mb-sm">
				    <q-input 
				    	outlined 
				    	v-model="tasktoSubmit.dueTime"
				    	label="Due time"
				    	class="col">
				        <template v-slot:append>
				        	<q-icon
				          	v-if="tasktoSubmit.dueTime" 
				          	clearable
				          	name="close" 
				          	@click="tasktoSubmit.dueTime = ''" 
				          	class="cursor-pointer" />
							<q-icon name="access_time" class="cursor-pointer">
							<q-popup-proxy transition-show="scale" transition-hide="scale">
							  <q-time v-model="tasktoSubmit.dueTime" />
							</q-popup-proxy>
							</q-icon>				          
				        </template>
			      	</q-input>
			    </div>
		    
		    </q-card-section>

	        <q-card-actions align="right">
	          <q-btn 
	          	label="Save" 
	          	color="primary" 
	          	type="submit"/>
			</q-card-actions>  
		</q-form>		      
    </q-card>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
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
			submitForm(){				
				this.$refs.name.validate()
				if (!this.$refs.name.hasError) {
					this.submitTask()
				}
			},

			submitTask(){
				this.addTask(this.tasktoSubmit)
				this.$emit('close')
			},

			clearDueDate(){
				this.tasktoSubmit.dueDate = ''
				this.tasktoSubmit.dueTime = ''
			}
		}
	}
	
</script>

<style type="text/css">
	
</style>