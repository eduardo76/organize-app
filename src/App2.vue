<template>

  <router-view></router-view>

</template>

<script>

    export default {
        name: 'HelloWorld',
        data() {
            return {
                texto: 'Hello World!'
            }
        }
    }

</script>

<style scoped>

    h1 {
        font-size: 24px;
        margin: 0px;
        margin-bottom: 10px;
    }

</style>
