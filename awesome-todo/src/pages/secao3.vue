<template>
  <q-page padding>
  	<button
  		style="position: absolute;right: 10px"
  		@click="counter++">
  		{{counter}}
  	</button>
  	<input 
  		v-model="message" 
  			@keyup.esc="clearMessage"
  			@keyup.enter="alertMessage"
  			v-autofocus
  			:class="{'error' : message.length > 22}" 
  			ref="messageInput"/>

  	<button @click="clearMessage">Clear</button>

  	<div>{{message.length}}</div>

  	<h5 
  		v-if="message.length"
  		class="border-grey" >{{message}}</h5>

  	<h6 v-else>No message entered  ¯\_(ツ)_/¯¯</h6>

  	<hr>

  	<p>Uppercase message: {{messageUppercase}}</p>
  	<p>Lowercase message: {{message | messageLowerCase}}</p>

  </q-page>
</template>

<style>
</style>

<script>
export default {
	data(){
		return{
			message: 'I love Vue.js so hard!',
			counter: 0
		}
	},
	computed: {
		
		messageUppercase(){
			console.log('messageUppercase was fired')
			return this.message.toUpperCase() + this.counter
		},

		errorStyle(){
			if (this.message.length > 22) {
				return {
					'color' : 'red',
					'background' : 'pink'
				}
			}
		}
	},

	methods:{
		
		clearMessage(){
			this.message = ''
		},
		
		alertMessage(){
			alert(this.message)
		}		
	}, 

	filters :{
		messageLowerCase(value){
			return value.toLowerCase()
		}
	},

	directives:{
		autofocus: {
			inserted(el){
				el.focus()
				
			}
		}
	},

	mounted(){
		console.log(this.$refs)
		this.$refs.messageInput.className = 'bg-green'
	}
}
</script>

<style>
	.border-grey{
		border: 1px solid grey;
	}

	input, button {
		font-size: 12px;
	}

	.error {
		color: red;
		background: pink;
	}

</style>

