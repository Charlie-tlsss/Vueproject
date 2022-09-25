<template>
  <ul>
    <li>{{ $route.query.id}}</li>
    <li>{{ $route.query.title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Show',
    data() {
        return {
            showDetail:''
        }
    },
    mounted(){
      console.log(this.$route)
    }
}
</script>

<style>

</style>