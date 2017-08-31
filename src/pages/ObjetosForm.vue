<template>
  <v-app id="example-2" toolbar>

    <v-toolbar fixed class="indigo" dark prominent>
      <v-btn icon to="/objetos">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Editar Objeto</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/objetos">
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-toolbar>

    <main class="background-color: grey lighten-3">
      <v-container>

      </v-container>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

