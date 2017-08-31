<template>
  <v-app id="example-2" toolbar>

    <v-toolbar fixed class="indigo" dark prominent>
      <v-btn icon to="/objetos" exact>
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Editar Objeto</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/objetos" exact>
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-toolbar>

    <main class="background-color: grey lighten-3">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Descrição" v-model="descricao"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Sensor"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="More descriptive text"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        descricao: '',
        descricao: '',

      }
    }
  }
</script>

