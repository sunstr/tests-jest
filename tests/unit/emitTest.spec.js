import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';
import Vue from 'vue';

const $mockTestVar = 1;

describe('Home', () => {
  it('check that emit was called', () => {
    const child = shallowMount(HelloWorld);
    child.vm.$emit('evt');
    expect(child.emitted().evt.length).toBe(1);
  });

  it('check that counter is changed to +1 after emit', () => {
    const wrapper = shallowMount(Home);
    const child = shallowMount(HelloWorld);

    wrapper.setData({ counter: 10 });
    wrapper.find(HelloWorld).vm.$emit('evt');
    expect(wrapper.vm.counter).toBe(11);

  });

  it('mock test', () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $mockTestVar,
      },
    });
    
    wrapper.setData({ counter: 1 });
    expect(wrapper.vm.counter + wrapper.vm.$mockTestVar).toBe(2);
  });
});
