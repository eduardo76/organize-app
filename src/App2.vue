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


.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
