<template>
  <q-page padding>
  	<ul>
  		<task 
  			v-for="(task, index ) in tasks"
  			:key="task.id"
  			:task="task"
  			:index="index">{{task.name}}

  		<button @click="deleteTask(index)">X</button></task>


  	</ul>

  </q-page>

</template>

<style>
</style>


<script>

export default {
	data(){
		return{
			tasks: [
				{
					id: 0,
					name: 'go to shop',
					dueDate: '2019/05/12',
					dueTime: '11:15'
				},
				{
					id: 1,
					name: 'get bananas',
					dueDate: '2019/05/13',
					dueTime: '10:00'
				},
				{
					id: 2,
					name: 'get apples',
					dueDate: '2019/05/14',
					dueTime: '12:00'
				},
			]
		}
	},

	methods: {
		deleteTask(index){
			this.tasks.splice(index, 1)
		}
	},

	components:{
		'task': require('components/Task.vue').default
	}
}
</script>
	
<style>
	
</style>