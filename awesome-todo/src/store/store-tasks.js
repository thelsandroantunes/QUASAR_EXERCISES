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

	/*tasks: [
		{
			id: 1,
			name: 'go to shop',
			completed: false,
			dueDate: '2019/05/12',
			dueTime: '11:30'
		},
		{
			id: 2,
			name: 'get bananas',
			completed: false,
			dueDate: '2019/05/13',
			dueTime: '14:00'
		},
		{
			id: 3,
			name: 'get apples',
			completed: false,
			dueDate: '2019/05/14',
			dueTime: '18:45'
		}
	]*/
}

const mutations = {

}

const actions = {

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