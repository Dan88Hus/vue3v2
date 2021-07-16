<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">
      {{errorMessage}}
    </li>
    McvValidationErrors
{{errorMessages}}
  </ul>
</template>

<script>
export default {
  name: 'McvValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    },
    computed: {
      errorMessages(){
        console.log(this.validationErrors)
        return Object.keys(this.validationErrors).map(name=>{
          const messages = this.validationErrors[name].join(', ')
          return `${name} ${messages}`
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
