import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    electro:{
      noun:[],
      cont:[],
      heal:[]
    },
    list:{
      drink:[],
      alc:[],
      drug:[],
      game:[],
      fiz:[]
    }
  },
  mutations: {
    list(s,{data,name}){
      s.list[name]=data;
    },
    electro(s,{data,name}){
      s.electro[name]=data;
    }
  },
  getters:{
    drink:s=>s.list.drink,
    alc:s=>s.list.alc,
    drug:s=>s.list.drug,
    game:s=>s.list.game,
    fiz:s=>s.list.fiz,
    electro:s=>s.electro
  },
  actions: {
    async electro({commit},name){
      try{
        let req = (await firebase.database().ref(`electro/${name}`).once('value')).val();
        commit('electro',{
          data:req,
          name
        })
        return true;
      }catch(e){
        // throw e;
      }
    },
    async list({commit},name){
      try{
        let req = (await firebase.database().ref(name).once('value')).val();
        commit('list',{
          data:req,
          name
        })
        return true;
      }catch(e){
        // throw e;
      }
    }
  },
  // modules: {
    
  // }
})