import {shallowMount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import Gallery from '../../src/App.vue';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App', () => {

  let getters;
  let store;

  beforeEach(() => {
    getters = {
      numberItems: () => 20,
      selectedItems: () => 3,
      itemsInfosVisible: () => 'visible',
    }

    store = new Vuex.Store({
      getters
    });
  });

  it('test getters render', () => {
    const wrapper = shallowMount(Gallery, {store, localVue});
    const p = wrapper.find('.infos-items');
    expect(p.text()).toContain('There are ' + getters.numberItems() + ' items');
    expect(p.text()).toContain(getters.selectedItems() + ' selected');
  })
});
