<template>
	<!--
	Awesome Exercise 1 - Vue.js Basics

	1) Create data properties for name and age
	2) Bind these properties to the two input fields
	3) Display the name and age in the beige box (first line in bold)
	4) Use a computed property to display the age plus 10 years (second line in bold)
	5) Display the number of characters in the name (third line)
	6) Use a filter to display the name in upper case (fourth line)
	7) Only show the beige box if both a name and age have been entered, otherwise, show the red box ("Please enter a name and age.")
	8) Use v-show to only show the error messages next to the fields if the name is longer than 15 characters and the age is greater than 100
	9) Add the class "error" to the input fields if they break the same rules
	10) When the "Generate Random Person" button is clicked, generated a random name (from an array you create) and a random age from 1 - 100. These new values should be reflected everywhere in the view
	11) Create a directive which auto-focuses the name field when the page loads
	12) Make it so a random person is generated when the page first loads

	-->
  <q-page padding>
  	<div class="form q-mb-lg">
	  	<div class="row q-mb-md">
	  		<label>Nome:</label>
	  		<input 
	  			type="text" 
	  			v-model="name"
	  			@keyup.esc="clearName"
	  			v-autofocus
	  			:style="errorStyleName"> 
	  		<label class="error">Por favor entre 15 caracteres ou menos</label>
	  	</div>
	  	<div class="row q-mb-md">
		  	<label>Idade:</label>
		  	<input 
		  		type="number"
		  		v-model="age"
	  			@keyup.esc="clearAge"
	  			v-autofocus	  			
	  			:style="errorStyleAge">
	  		<label class="error">Por favor entre com idade entre 1 - 100</label>
		  </div>
		  <div class="row">
		  	<button @click="randomNameAge">Gerar Pessoa aleatória</button>
		  </div>
  	</div>
  	<div class="description q-mb-lg">
  		<p>Meu nome é <b>{{name}}</b> e tenho <b>{{ age }}</b> de idade.</p>
  		<p>Em 10 anos eu terei <b>{{ counterPlus }}</b>.</p>
  		<p>Me nome tem <b>{{ name.length }}</b> caracteres .</p>
  		<p>Meu nome em caixa alta <b>{{ name | nameUppercase }}</b>.</p>
  	</div>
		<div class="no-details">
			<p>Por favor entre com nome e idade.</p>
		</div>
  </q-page>
</template>

<script>
	export default {

		data(){
			return {
				name : '',
				age: '',
				names : ['thelsandro', 'dogão', 'engenheiro']
				
			}
		},

		computed: {
			
			

			errorStyleName(){
				if (this.name.length > 15) {
					return {
						'color' : 'red',
						'background' : 'pink'
					}
				}
			},
			
			errorStyleAge(){
				if ((this.age < 1  || this.age > 1000) && this.age != '') {
					return {
						'color' : 'red',
						'background' : 'pink'
					}
				}
			},

			counterPlus(){
				if (this.age == '') {

				}else{
				 return parseInt(this.age) + 10
				}
			}
			
		},
		
		methods: {
			
			clearName(){
				this.name = ''
			},
			
			clearAge(){
				this.age = ''
			},

			randomNameAge(){
				this.name = this.names[Math.floor(Math.random() * this.names.length)]
				this.age = Math.floor(Math.random() * 99 + 1) 
			}
		},

		filters:{
			nameUppercase(value){
				console.log('nameUppercase was fired')
				return value.toUpperCase()
			}
		},

		directives: {
			autofocus: {
				inserted(el) {
					el.focus()
				}
			}
		},

		mounted(){
			this.randomNameAge()
		}
	}

</script>

<style>
	.form {
		background: #eee;
		padding: 10px;
	}
	label {
		min-width: 70px;
	}
	label.error {
		font-size: 13px;
		color: red;
		margin-left: 5px;
		margin-top: 3px;
	}
	input {
		border: 1px solid #ccc;
	}
	input.error {
		border: 1px solid red;
		background: pink;
	}
	.description {
		background: antiquewhite;
		padding: 20px 20px 7px;
	}
	.no-details {
		background: lightcoral;
		padding: 20px 20px 7px;
	}
</style>
