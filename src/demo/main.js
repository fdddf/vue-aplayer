/**
 * Created by Doma on 2016/11/22.
 */

import { createApp } from 'vue'


import VueAPlayer from '../vue-aplayer.vue'

import App from './App.vue'


const app = createApp(App)
app.config.disableVersionBadge = true
app.config.devtools = true
app.use(VueAPlayer)
app.mount('#app')

// Vue.config.devtools = true
// VueAPlayer.disableVersionBadge = true
