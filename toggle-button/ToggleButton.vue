<template>
	<body>
		<div id="app" class="heroWrapper heroWrapperSkin" v-on:click="isOpen = !isOpen">
		    <p v-show="isOpen">{{nmessage}}</p>
		    <p v-show="!isOpen">{{message}}</p> 
		</div> 
	</body>
</template>

<script>
	export default {
		el: '#app',
		data () {
			return { 
				message: 'Logged In',
				nmessage: 'Logged Out', 
				isOpen: false 
			}
		}
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		padding: 0.2rem; 
		background: radial-gradient(lightblue, #0A77D5);  
		font-family: "helvetica";
	}

	.heroWrapper {
		padding: 1rem;
		max-width: 9rem;
		margin: 3rem auto;
		font-size: 1.5em; 
	}

	.heroWrapperSkin {
		background: linear-gradient(lightseagreen, skyblue);
		color: gainsboro;
		font-weight: 600;
		border-radius: 1.5rem; 
	} 

	p { text-align: center; }
</style>


