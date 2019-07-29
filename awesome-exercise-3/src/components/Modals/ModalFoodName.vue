<template>
	<div class="row q-mb-md">
	      <q-input
	      	outlined
	      	:value="name"	      	
	      	@input="$emit('update:name', $event)"
			:rules="[val => !!val || 'Field is required']"
			autofocus
			ref="name"
	      	label="Name (e.g. Burger)"
	      	class="col" >

	      	<template v-slot:append>
				<q-icon
				v-if="name" 
				@click="$emit('update:name', '')" 
				name="close"
				class="cursor-pointer" />
			</template>
	      </q-input>
    	</div>
</template>

<script>
	export default {
		props: ['name']
	}
</script>