import Vue from 'vue'

const state = {
	foods: {

		'ID1': {
			id: 1,
			name: 'Burger',
			description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
			imageUrl: 'https://i.imgur.com/0umadnY.jpg',
			rating: 4
		},
		'ID2': {
			id: 2,
			name: 'Pizza',
			description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
			imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
			rating: 5
		},
		'ID2': {
			id: 3,
			name: 'Sprouts',
			description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
			imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
			rating: 1
		}
	}
}

const mutations = {
	addFood(state,payload){
		Object.assign(state.foods, payload.id, payload.food)
	}
}

const actions = {}

const getters = {}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}