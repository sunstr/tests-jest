<template>
  <div class="home">
    <input type="text" v-model="counter">
    <HelloWorld @evt="evtListenter" msg="Welcome to Your Vue.js App"/>
    <Formg/>
    <StoreTest/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Formg from '@/components/Form.vue';
import StoreTest from '@/components/StoreTest.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Formg,
    StoreTest
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    evtListenter() {
      this.counter = this.counter + 1;
    },
  },
};
</script>
