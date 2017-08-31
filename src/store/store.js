import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,

    state: {
      objetos: [
        { icon: 'dashboard', iconClass: 'grey lighten-1 white--text', title: 'Carteira', subtitle: 'Jan 9, 2014' },
        { icon: 'dashboard', iconClass: 'grey lighten-1 white--text', title: 'Chave do Carro', subtitle: 'Jan 17, 2014' },
        { icon: 'dashboard', iconClass: 'grey lighten-1 white--text', title: 'Chave de Casa', subtitle: 'Jan 28, 2014' },
        { icon: 'dashboard', iconClass: 'grey lighten-1 white--text', title: 'Celular', subtitle: 'Jan 28, 2014' },
        { icon: 'dashboard', iconClass: 'grey lighten-1 white--text', title: 'Relógio', subtitle: 'Jan 28, 2014' },
        { icon: 'dashboard', iconClass: 'grey lighten-1 white--text', title: 'Bolsa Notebook', subtitle: 'Jan 28, 2014' }
      ],
    },

    getters: {
      objetos(state) {
        return state.objetos;
      }
    },

    mutations: {

    },

    actions: {

    }
})
