import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import App from '@/App'

import Objetos from '@/pages/Objetos.vue'
import ObjetosForm from '@/pages/ObjetosForm.vue'
import Sensores from '@/pages/Sensores.vue'
import Tarefas from '@/pages/Tarefas.vue'
import Configuracoes from '@/pages/Configuracoes.vue'
import App from '@/pages/App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'App',
      component: App
    },

    {
      path: '/configuracoes',
      name: 'configuracoes',
      component: Configuracoes
    },
    {
      path: '/objetos',
      name: 'objetos',
      component: Objetos,
    },
    {
      path: '/objetos/editar',
      name: 'objetoseditar',
      component: ObjetosForm,
    },
    {
      path: '/sensores',
      name: 'sensores',
      component: Sensores,
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: Tarefas,
      //   props: true
    }
  ]
})
