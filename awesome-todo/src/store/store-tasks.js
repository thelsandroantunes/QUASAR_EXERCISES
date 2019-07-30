import Vue from 'vue'
import { uid } from 'quasar'

const state = {

	tasks: {
		'ID1':{
			
			name: 'go to shop',
			completed: false,
			dueDate: '2019/05/12',
			dueTime: '11:30'
		},
		'ID2':{
			
			name: 'get bananas',
			completed: false,
			dueDate: '2019/05/13',
			dueTime: '14:00'	
		},
		'ID3':{
			
			name: 'get apples',
			completed: false,
			dueDate: '2019/05/14',
			dueTime: '18:45'	
		}
	},
	search: ''
}

const mutations = {
	updateTask(state, payload){
		//console.log('payload(from mutation): ', payload);
		Object.assign(state.tasks[payload.id], payload.updates)
	},
	deleteTask(state, id){		
		Vue.delete(state.tasks, id)
	},
	addTask(state, payload){
		Vue.set(state.tasks, payload.id, payload.task)	
	},
	setSearch(state, value){
		state.search = value
	}
}

const actions = {
	updateTask({commit},payload){
		commit('updateTask', payload)
	},
	deleteTask({commit}, id){
		commit('deleteTask', id)
	},
	addTask({commit}, task){
		let taskId = uid()
		let payload = {
			id: taskId,
			task: task
		}

		commit('addTask', payload)
	},
	setSearch({commit}, value){
		commit('setSearch', value)
	}
}

const getters = {

	tasksFiltered: (state) => {
		let tasksFiltered = {}
		if (state.search) {
			// populate empty object
			Object.keys(state.tasks).forEach(function(key){
				let task = state.tasks[key],
				taskNameLowerCase = task.name.toLowerCase(),
				searchLowerCase = state.search.toLowerCase()
				if (taskNameLowerCase.includes(searchLowerCase)) {
					tasksFiltered[key] = task
				}
			})
			return tasksFiltered
		}

		return state.tasks
	},

	tasksTodo: (state, getters) => {
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		//console.log(Object.keys(tasksFiltered))
		Object.keys(tasksFiltered).forEach(function(key){
			let task = tasksFiltered[key]
			//console.log('task:', task);
			if (!task.completed) {
				tasks[key] = task
			}
		})
		return tasks
	},
	tasksCompleted: (state, getters) => {
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		//console.log(Object.keys(tasksFiltered))
		Object.keys(tasksFiltered).forEach(function(key){
			let task = tasksFiltered[key]
			//console.log('task:', task);
			if (task.completed) {
				tasks[key] = task
			}
		})
		return tasks
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}