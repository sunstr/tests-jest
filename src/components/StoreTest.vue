<template>
  <div class="store-test">
    <h2>store testing</h2>
    
    <div>
      <div class="store-test__label">
        <span>store-counter:</span>
        <span class="getter-value">{{storeCounter}}</span>
      </div>
      <button class="button" @click="calculate();">store.increment</button>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'store-test',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
        storeCounter: 'storeCounter',
    })
  },
  methods: {
    ...mapActions({
        calculate: 'calculate',
    }),
  },
};
</script>

<style lang="scss">
.store-test {
  border: 2px solid yellowgreen;
  padding: 20px;
  margin: 40px auto;
  width: 500px;

  &__label {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    span:first-child {
      margin-right: 5px;
    }
  }
}
  
</style>
