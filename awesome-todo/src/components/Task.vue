<template>
	<li>
		<div> <slot>{{task.name}}</slot> {{index}} </div>
		<small>{{task.dueDate}} @ {{task.dueTime}}</small>
		
	</li>
</template>

<script>
	export default {

		props: ['task', 'index']		
		
	}
</script>

<style>
	
</style>