import { createStore } from 'vuex'

import auth from '../store/modules/auth'

export default createStore({
  // in Redux we have just dispatch(action) but in vuex we have mutation and action
  // mutations are sync actions are async 
  state: {
    count: 0
  },
  mutations: {
    //that will change count
    increment(state){
      state.count++
    }
  },
  actions: {
    //in here we are calling mutaions by context 
    //context.commit("NAMEOFMUTATION")
    // we dont trigger directly action , we do through dispatch, store.dispatch("NAMEOFACTION")
  },
  modules: {
    // 100lerce actions ve methods olusumunu engellemek icin modules var
    // usefull for scaleble app, module auth veya module feed gibi 
    auth
  }
})
