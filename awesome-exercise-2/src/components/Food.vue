<template>
	<div class="card shadow-1">
  	  	<img :src="img" width="198" height="180">

  	  	<div class="card-content">
  	  		<h1 class="text-primary">{{food.title}}</h1>
  	  		<p>{{food.description}} </p>
  	  		<p>
	  	  		<small>
	  	  			<b>Delicousness:</b>
	  	  		</small>
	  	  		<b class="text-primary">
		  	  		{{food.delicousness}}/5
	  	  		</b>
  	  		</p>
  	  	</div>
  	  </div>
</template>

<script>
	export default {

		props: ['food', 'index','img']
		
	}
</script>

<style>
	
</style>