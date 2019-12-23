import { shallowMount } from '@vue/test-utils';
import Form from '@/components/Form.vue';
import axios from 'axios';
import Vue from 'vue';


describe('Home', () => {

  it('renders a 2 inputs', () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.findAll('input').length).toEqual(2)
  })

  it('renders a button', () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.findAll('button').length).toEqual(1)
  })

  it('inputs has errors after bad val validate', () => {

    const wrapper = shallowMount(Form);
    wrapper.vm.input1 = 99;
    wrapper.vm.input2 = 99;
    wrapper.vm.checkValidateInput1();
    wrapper.vm.checkValidateInput2();

    expect(wrapper.findAll('.error').length == 2 && !wrapper.vm.validateForm()).toBe(true)
    
  });

  it('inputs has no errors after good val validate', () => {

    const wrapper = shallowMount(Form);
    wrapper.vm.input1 = 100;
    wrapper.vm.input2 = 100;
    wrapper.vm.checkValidateInput1();
    wrapper.vm.checkValidateInput2();

    expect(wrapper.findAll('.error').length == 0 && wrapper.vm.validateForm()).toBe(true)
    
  });

  it('check form agregate and return good data', () => {
    const wrapper = shallowMount(Form);
    wrapper.vm.input1 = 100;
    wrapper.vm.input2 = 100;
    let data = wrapper.vm.agregateData();
    expect(typeof data == 'object' && data.input1 == 100 && data.input2 == 100).toBe(true);
  });


  const $mockResponse = {status: 200, elements: [1,2,3]};

  it('check that form is changed after success response', () => {
    const wrapper = shallowMount(Form);
    wrapper.vm.processResponse($mockResponse)
    expect(wrapper.html()).toContain(`<h2>Успех</h2>`);
  });

  it('functional test api', () => {
    axios.defaults.withCredentials = true;

    const func = async () => {
      let result = await axios.get('https://livedev.skillbox.ru/api/revolution/end/date')
      expect(result.status == 200).toBe(true);
    }


    return Vue.nextTick().then(func)

  });

});
