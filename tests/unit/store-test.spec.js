import { shallowMount, createLocalVue } from '@vue/test-utils';
import StoreTest from '@/components/StoreTest.vue';
import Vue from 'vue';
import Vuex from 'vuex'
import store from '@/store/'

const localVue = createLocalVue()

localVue.use(Vuex)


describe('StoreTest', () => {

  it('вызывает "calculate" на клик кнопки' , () => {
    
   
    const state

    const actions = {
      calculate: jest.fn()
    }

    const getters = {
      storeCounter: () => 10
    }

    const store = new Vuex.Store({
      state,
      getters,
      actions
    })

    const wrapper = shallowMount(StoreTest, { store, localVue });

    const button  = wrapper.find('button');
    button.trigger('click');
    expect(actions.calculate).toHaveBeenCalled()
  })

  it('получает и рендерит геттер' , () => {
    const wrapper = shallowMount(StoreTest, { store, localVue });
    expect(wrapper.html()).toContain(`<span class="getter-value">0</span>`);
  })


  it('клик на кнопку вызывает экшн, который вызывает мутацию и которая меняет state.count и геттер выводит результат' , () => {
    const wrapper = shallowMount(StoreTest, { store, localVue });
    const button  = wrapper.find('button');

    button.trigger('click');
    button.trigger('click');

    const span = wrapper.find('span.getter-value')

    expect(wrapper.vm.storeCounter == 2 && span.html() == '<span class="getter-value">2</span>').toBe(true);
  })

});
