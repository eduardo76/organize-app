<template>
  <v-app id="example-2" toolbar>

    <v-navigation-drawer temporary light v-model="drawer">

      <v-toolbar flat class="transparent pt-2 pb-2">
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>

        <v-list class="pa-0">
          <v-list-tile avatar tag="div">
            <v-list-tile-content>
              <v-list-tile-title>Objetos</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-toolbar>

      <v-divider></v-divider>

      <v-list class="pt-2">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Configurações</v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar fixed class="indigo" dark prominent>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Objetos</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <main class="background-color: grey lighten-3">
      <v-container> <!-- fluid -->
        <!-- <div class="title">Click on sidebar to re-open.</div> -->

        <v-subheader>Objetos</v-subheader>

        <v-card class="mb-3" v-for="item in items2" :key="item.title">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.title }}</h3>
              <!-- <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div> -->
            </div>
            <!-- <v-icon v-bind:class="[item.active ? 'indigo--text' : 'grey--text']">more_vert</v-icon> -->
          </v-card-title>

          <v-card-actions class="white">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon @click.native.stop="dialog = true">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
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
        mini: false,
        right: null,
        dialog: false
      }
    }
  }
</script>

