<!-- While this is the modal, its not entirely self contained.
It needs to be opened through some type of event in another file.
See below -->

<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription"
			>
				<header
					class="modal-header"
					id="modalTitle"
				>
					<slot name="header">
						Title

						<button
							type="button"
							class="btn-close"
							@click="close"
							aria-label="Close modal"
						>
							x
						</button>
					</slot>
				</header>
				<section
					class="modal-body"
					id="modalDescription"
				>
					<slot name="body">
						<form @submit.prevent="handleSubmit">
						
							<div class="form-field"> 
								<label class="form-label"> Name: </label>
								<input class="form-input" type="text" v-model="bills.name"/>
							</div>

							<button class="btn-green" type="submit">Submit</button>
						</form>
					</slot>
				</section>
				<footer class="modal-footer">
					<slot name="footer">
						I'm the default footer!

						<button
							type="button"
							class="btn-green"
							@click="close"
							aria-label="Close modal"
						>
							Close me!
						</button>
					</slot>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'modal',
		methods: {
			close() {
				this.$emit('close');
			},
		},
	};
</script>


<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: #FFFFFF;
		box-shadow: 2px 2px 20px 1px;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
	}

	.modal-header,
	.modal-footer {
		padding: 15px;
		display: flex;
	}

	.modal-header {
		border-bottom: 1px solid #eeeeee;
		color: #4AAE9B;
		justify-content: space-between;
	}

	.modal-footer {
		border-top: 1px solid #eeeeee;
		justify-content: flex-end;
	}

	.modal-body {
		position: relative;
		padding: 20px 10px;
	}

	.btn-close {
		border: none;
		font-size: 20px;
		padding: 20px;
		cursor: pointer;
		font-weight: bold;
		color: #4AAE9B;
		background: transparent;
	}

	.btn-green {
		color: white;
		background: #4AAE9B;
		border: 1px solid #4AAE9B;
		border-radius: 2px;
	}
	.form-field {
		display: block;
		width: 100%;
		padding: 0.5rem 0;
	}

	form > div :last-child { margin-bottom: 0.5rem;}

	.form-label {
		width: 100%;
		display: block;
		text-align: left;
		padding: 0.2rem 0;
	}
	.form-input {
		min-width: 15rem;
		border: 3px solid #efefef;
		padding-left: 0.5rem;
		outline: none;
		background-color: transparent;
	}
</style>

<!-- The component above needs to be implemented in another file represented below.

<template>
	
	<button type="button" class="tl-corner sm-btn blk-btn" @click="showModal">Add Bill</button>
	<modal
		v-show="isModalVisible"
		@close="closeModal"
	/>
</template

<script>
import axios from 'axios';
import modal from './Modal.vue';

export default {
	components: {
        modal,
    },
	data() {
		return {
			bills: [],
			isModalVisible: false,
		};
	},
	methods: {
		showModal() {
			this.isModalVisible = true;
		},

		closeModal() {
			this.isModalVisible = false;
		},
	
	},
	
};
</script>

-->
