<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="button" @click="$emit('evt', 'kek')">
      Кнопка
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
  .button {
    min-width: 100px;
    height: 36px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    background-color: red;
    border: none;
    outline: none;
  }
</style>
