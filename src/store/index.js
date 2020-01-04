import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    shopcarlist: [],
    xinzenshop: {},
    shopId: [],
    shop: [],
    totalPrice: 0,
    znum: 3
  },
  mutations: {
    getcarlist(state, data) {
      state.shopcarlist = data.message
    },
    uploadtotal(state, changestepper) {
      state.totalPrice = changestepper
    },
    addcarlist(state, step) {
      const obj = {
        id: step.id,
        num: step.num
      }
      if (state.shop.indexOf(step.id) !== -1) {
        state.shopId.forEach(item => {
          if (item.id === step.id) {
            item.num = step.num
          }
        })
        console.log(state.shopId)
        return false
      }
      state.shop.push(step.id)
      state.shopId.push(obj)
      console.log(state.shopId)
    },
    jishucou(state, i) {
      state.shopcarlist[i].cou += state.xinzenshop.cou
      console.log('66')
    },
    pushlistcar(state) {
      state.shopcarlist.push(state.xinzenshop)
    }
  },
  actions: {
    getshoplist(context) {
      axios.get('/api/goods/getshopcarlist/87,88,89').then(({ data }) => {
        context.commit('getcarlist', data)
      })
    },
    ifpushlist(state) {
      if (state.shopcarlist) {
        for (var i = 0; i < state.shopcarlist.length; i++) {
          if (state.xinzenshop.id === state.shopcarlist[i].id) {
            this.$store.commit('jishucou', i)
          } else {
            this.$store.commit('pushlistcar')
          }
        }
      } else {
        console.log(233)
      }

      return state.shopcarlist
    }
  },
  modules: {},
  getters: {
    changestepper: state => {
      let t = 0
      let he = 0
      state.shopcarlist.forEach(item => {
        t += item.cou * item.sell_price * 100
        he += item.cou
      })
      state.totalPrice = t
      state.znum = he
      console.log(t)
      return t
    }
  }
})
