import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import auth from './auth'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    home:[],
    electro:{
      noun:[],
      cont:[],
      heal:[]
    },
    dars:{
      noun:[],
      cont:[],
    },
    list:{
      drink:[],
      alc:[],
      drug:[],
      game:[],
      fiz:[]
    },
    tel:false,
    fil:false
  },
  mutations: {
    home(s,data){
      s.home=data;
    },
    list(s,{data,name}){
      s.list[name]=data;
    },
    electro(s,{data,name}){
      s.electro[name]=data;
    },
    dars(s,{data,name}){
      s.dars[name]=data;
    },
    tel(s,data){
      s.tel=data
    },
    fil(s,data){
      s.fil=data
    }
  },
  getters:{
    home:s=>s.home,
    drink:s=>s.list.drink,
    alc:s=>s.list.alc,
    drug:s=>s.list.drug,
    game:s=>s.list.game,
    fiz:s=>s.list.fiz,
    electro:s=>s.electro,
    tel:s=>s.tel,
    fil:s=>s.fil,
    dars:s=>s.dars
  },
  actions: {
    async tel({commit}){
      try{
        let req = (await firebase.database().ref(`tel`).once('value')).val();
        commit('tel',req);
        return true;
      }catch(e){
        // throw e;
      }
    },
    async fil({commit}){
      try{
        let req = (await firebase.database().ref(`fil`).once('value')).val();
        commit('fil',req);
        return true;
      }catch(e){
        // throw e;
      }
    },
    async home({commit}){
      try{
        let req = (await firebase.database().ref(`home`).once('value')).val();
        commit('home',req);
        return true;
      }catch(e){
        // throw e;
      }
    },
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
    async dars({commit},name){
      try{
        let req = (await firebase.database().ref(`dars/${name}`).once('value')).val();
        commit('dars',{
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
    },
  },
  modules: {
    auth
  }
})