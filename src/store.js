import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [],
        itemsInfosVisible: 'hidden',
    },
    mutations: {
      SET_ITEMS(state, items){
        state.items = items;
      },
      DELETE_ITEM(state, itemId){
        state.items = state.items.filter(i => i.id !== itemId);
      },
      EDIT_SELECT_ITEM(state, itemId){
        let index = state.items.findIndex(i => i.id === itemId);
        if(state.items[index].isSelected){
          Vue.set(state.items[index], 'isSelected', false)
        }else{
          Vue.set(state.items[index], 'isSelected', true)
        }
      },
      SET_ITEMS_INFOS_VISIBLE(state){
        state.itemsInfosVisible = 'visible';
      },
      SET_ITEMS_INFOS_HIDDEN(state){
        state.itemsInfosVisible = 'hidden';
      }
    },
    getters: {
      numberItems: state => {
        return state.items.length
      },
      selectedItems: state => {
        return state.items.filter(i => i.isSelected === true).length
      },
      itemsInfosVisible: state => {
        return state.itemsInfosVisible
      },
    },
    actions: {
       async loadItems({commit}){
         let response = await axios.get("json/item-list.json");
         commit('SET_ITEMS',response.data.items);
       },
       async deleteItem({commit},item){
         commit('DELETE_ITEM', item.id);
       },
       async editSelectItem({commit},item){
         commit('EDIT_SELECT_ITEM', item.id);
       },
      async setItemsInfosVisible({commit}){
        commit('SET_ITEMS_INFOS_VISIBLE');
      },
      async setItemsInfosHidden({commit}){
        commit('SET_ITEMS_INFOS_HIDDEN');
      }
    },
});
