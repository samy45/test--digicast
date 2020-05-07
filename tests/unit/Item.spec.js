import {shallowMount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import Item from "../../src/views/partial/Item";


const localVue = createLocalVue()

describe('Item', () => {
  it('does render right elements in item', () => {
    const wrapper = shallowMount(Item, {
      propsData: {
        item:
          {
            "id": 31,
            "title": "New York",
            "img": "city-01.jpg",
            "date": "2019-02-52 24:23:52",
            "isSelected": false
          },
      }
    });
    const title = wrapper.find('h1').text();
    const image = wrapper.find('b-img-lazy').attributes("src");
    expect(title).toBe('New York');
    expect(image).toBe('img/city-01.jpg');
  });
});
