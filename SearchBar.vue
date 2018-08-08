<template>
  <div>
    <input v-on:input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event){
      this.$emit('change', event.target.value)  
    }
  }
}
</script>

<style>

</style>
