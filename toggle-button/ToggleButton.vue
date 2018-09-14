<template>
	<body>
		<div id="app" class="heroWrapper hwSkin" v-on:click="isOpen = !isOpen">
		    <p v-show="isOpen">{{nmessage}}</p>
		    <p v-show="!isOpen">{{message}}</p> 
		</div> 
	</body>
</template>

<script>
	var app = new Vue({
	  el: '#app',
	  data: { 
		message: 'Logged In',
		nmessage: 'Logged Out', 
		isOpen: false 
	  }
	});
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		padding: 0.2rem; 
		background: radial-gradient(lightblue, #0a77d5);  
		font-family: "helvetica";
	}

	.heroWrapper {
		padding: 1rem;
		max-width: 9rem;
		margin: 3rem auto;
		font-size: 1.5em; 
	}

	.hwSkin {
		background: linear-gradient(lightseagreen, skyblue);
		color: gainsboro;
		font-weight: 600;
		border-radius: 1.5em; 
	} 

	p { text-align: center; }
</style>


