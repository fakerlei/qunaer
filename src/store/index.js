
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'
var store=new Vuex.Store({
	state
})

export default store
