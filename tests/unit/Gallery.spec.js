import { shallowMount,mount,  createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Gallery from '../../src/views/Gallery';
import Item from "../../src/views/partial/Item";


const localVue = createLocalVue();
localVue.use(Vuex);

describe('Gallery', () => {

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      loadItems: jest.fn(),
      setItemsInfosVisible : jest.fn(),
      deleteItem : jest.fn(),
    };

    store = new Vuex.Store({
      state: {
        items: [
          {
            "id": 31,
            "title": "New York",
            "img": "city-01.jpg",
            "date": "2019-02-52 24:23:52",
            "isSelected": false
          },
          {
            "id": 2,
            "title": "Los Angeles",
            "img": "city-02.jpg",
            "date": "2019-02-52 24:23:52",
            "isSelected": false
          },
          {
            "id": 3,
            "title": "Toronto",
            "img": "city-03.jpg",
            "date": "2019-02-52 24:23:52",
            "isSelected": false
          }],
      },
      actions
    });
  });

  it('does call mounted actions', () => {
    shallowMount(Gallery, {
      localVue,
      store
    });
    expect(actions.loadItems).toHaveBeenCalled();
    expect(actions.setItemsInfosVisible).toHaveBeenCalled();
  });

  it('does render right number of items', () => {
       const wrapper = shallowMount(Gallery, { store, localVue });
       expect(wrapper.findAll(Item).length).toBe(3)
  });

  it('test delete action not call confirm step', async () => {
    const wrapper = mount(Gallery, { store, localVue });
    wrapper.find(".delete").trigger("click");
    await wrapper.vm.$nextTick();
    expect(actions.deleteItem).toHaveBeenCalled();
  });
});
