<template>
  <v-app id="example-2" toolbar>

    <v-toolbar fixed class="indigo" dark prominent>
      <v-btn icon to="/" exact>
        <v-icon light>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Objetos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/objetos/editar">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>

    <main class="background-color: grey lighten-3">
      <v-container> <!-- fluid -->
        <!-- <div class="title">Click on sidebar to re-open.</div> -->

        <v-subheader>Objetos</v-subheader>

        <v-card>
          <v-list two-line>
            <v-list-tile avatar v-for="item in items3" :key="item.title" to="/objetos/editar">
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <!-- <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title> -->
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon class="grey--text text--lighten-1">chevron_right</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>

        <!--v-router-->
      </v-container>


      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title class="headline">Excluir Objeto</v-card-title>
          <v-card-text>Deseja realmente remover esse objeto.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="indigo--text darken-1" flat="flat" @click.native="dialog = false">Não</v-btn>
            <v-btn class="indigo--text darken-1" flat="flat" @click.native="dialog = false">Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Objetos', icon: 'dashboard' },
          { title: 'Tarefas', icon: 'today' },
          { title: 'Sensores', icon: 'settings_remote' }
        ],
        items2: [
          { title: 'Carteira' },
          { title: 'Chave do Carro' },
          { title: 'Chave de Casa' },
          { title: 'Celular' },
          { title: 'Relógio' },
          { title: 'Bolsa Notebook' },
        ],

        items3: this.$store.getters.objetos,
        items4: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
        ],
        mini: false,
        right: null,
        dialog: false
      }
    }
  }
</script>

