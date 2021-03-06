import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
  state: {
    data: JSON.parse(localStorage.getItem('data') || '{}')
  },
  mutations: {
    addFormStep1ToData(state, step1){
      state.data.step1={...step1}
      localStorage.setItem('data',JSON.stringify(state.data))
    },
    addFormStep2ToData(state, step2){
      state.data.step2={...step2}
      localStorage.setItem('data',JSON.stringify(state.data))
    },
    addFormStep3ToData(state, step3){
      state.data.step3={...step3}
      localStorage.setItem('data',JSON.stringify(state.data))
    },
    addFormStep4ToData(state, step4){
      state.data.step4={...step4}
      localStorage.setItem('data',JSON.stringify(state.data))
    },
    addFormStep5ToData(state, step5){
      state.data.step5={...step5}
      localStorage.setItem('data',JSON.stringify(state.data))
    },
    addFormStep7ToData(state, step7){
      state.data.step7={...step7}
      localStorage.setItem('data',JSON.stringify(state.data))
    }

  },
  actions: {
    addFormStep1({commit}, step1){
      commit('addFormStep1ToData', step1)
    },
    addFormStep2({commit}, step2){
      commit('addFormStep2ToData', step2)
    },
    addFormStep3({commit}, step3){
      commit('addFormStep3ToData', step3)
    },
    addFormStep4({commit}, step4){
      commit('addFormStep4ToData', step4)
    },
    addFormStep5({commit}, step5){
      commit('addFormStep5ToData', step5)
    },
    addFormStep7({commit}, step7){
      commit('addFormStep7ToData', step7)
    },
},
  getters:{
    sendStep1(state){
      return state.data.step1
    },
    sendStep2(state){
      return state.data.step2
    },
    sendStep3(state){
      return state.data.step3
    },
    sendStep4(state){
      return state.data.step4
    },
    sendStep5(state){
      return state.data.step5
    },
    sendStep6(state){
      return state.data
    },
    sendStep7(state){
      return state.data.step7
    },

  }

})
