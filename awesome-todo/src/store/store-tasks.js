import Vue from 'vue'

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
	}
}

const mutations = {
	updateTask(state, payload){
		console.log('payload(from mutation): ', payload);
		Object.assign(state.tasks[payload.id], payload.updates)
	},

	deleteTask(state, id){
		console.log('delete id: ', id);
		//delete.state.tasks[id]
		Vue.delete(state.tasks, id)
	}
}

const actions = {
	updateTask({commit},payload){
		commit('updateTask', payload)
	},
	deleteTask({commit}, id){
		commit('deleteTask', id)
	}
}

const getters = {
	tasks: (state) => {
		return state.tasks
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}