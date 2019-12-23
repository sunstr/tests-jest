<template>
    <form>
     <div v-if="!success">
        <input
         type="text"
         class="input1"
         @input="checkValidateInput1()"
         :class="{'error' : input1error}"
         v-model="input1"
         placeholder="Enter number"
       >
       <input
         type="text"
         class="input2"
         @input="checkValidateInput2()"
         :class="{'error' : input2error}"
         v-model="input2"
         placeholder="Enter number"
       >
       <button
         class="button"
         @click.prevent="getResponse()">
           submit
       </button>
     </div>
     <div v-else>
       <h2>Успех</h2>
     </div>
    </form>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Form',
  data() {
    return {
      url: '/events/sale/content?id=100',
      input1: '',
      input1error: false,
      input2: '',
      input2error: false,
      success: false
    };
  },
  computed: {
    
  },
  methods: {

    checkValidateInput1() {
      if(this.input1.length != 0 && (Number(this.input1) < 100) || isNaN(this.input1))
        this.input1error = true;
      else
        this.input1error = false;
    },

    checkValidateInput2() {
      if(this.input2.length != 0 && (Number(this.input2) < 100) || isNaN(this.input2))
        this.input2error = true;
      else
        this.input2error = false;
    },

    agregateData() {

      const data = {
          input1: this.input1,
          input2: this.input2,
      };

      return data
    },

    validateForm() {
      if(this.input1error || this.input2error || this.input1 == '' || this.input2 == '')
        return false

      return true
    },

    async getResponse() {
      axios.defaults.baseURL = '/api/'
      axios.defaults.withCredentials = true;

      
      if(this.validateForm) {
        const response = await axios.post(this.url, this.agregateData())
        this.processResponse(response)
      }
      
    },

    processResponse(response) {
      if(response.status == 200)
        this.success = true
    },
  },
};
</script>

<style lang="scss">
  form {
    padding: 50px;
    border: 1px solid greenyellow;
    width: 500px;
    margin: 0 auto;
    margin-top: 50px;
  }
  input {
    height: 36px;
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid lightgrey;
    padding: 0 10px;

    &:focus {
      border-color: lightblue;
    }

    &.error {
      border-color: red;
    }
  }
  .button {
    min-width: 100px;
    height: 46px;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
    background-color: red;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #af0000;
    }
  }
</style>
