<template>
  <div>
		<h1>{{msg}}</h1>
    <button class="btn p-btn">{{ $route.params.name }}</button>
  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Home',
		data() {
			return {
				msg: 'Welcome',
			};
		},
		methods: {
			getMessage(){
				const path = '/http:localhost:5000/home';
				axios.get(path)
				.then((res) => {
					this.msg = res.data
				})
				.catch((error) => {
				// eslint-disable-next-line
				console.error(error);
				});
			},
		},
		created() {
			this.getMessage();
		},
	};
</script> 

<style>
  div { 
    min-height: 10rem; 
    padding-top: 2rem; 
  },
  .btn {
    padding: 0.3rem 2rem; 
    border-radius: 5px;
    outline: none;
    font-size: 1em;
  },
  .p-btn {
    border: 0.2rem solid teal;
    background-color: transparent;
    color: teal;
    font-weight: 600;
  }
</style>
