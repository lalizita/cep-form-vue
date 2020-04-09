<template>
  <div class="max-w-xs">
    <h1>insira o seu cep</h1>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="cep">Cep</label>
          <!-- border-red-500: !$v.address.cep.required -->
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="{
          'border-red-500' : !$v.address.cep.required 
          }"
          type="text"
          id="cep"
          placeholder="Cep"
          @keyup="validateCEP"
          style="height:72px"
          v-model="address.cep"
        />
        <div class="text-red-500" v-if="!$v.address.cep.required">Field is required</div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="logradouro">logradouro</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="logradouro"
          placeholder="logradouro"
          style="height:72px"
          v-model="address.logradouro"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="uf">uf</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="uf"
          placeholder="uf"
          style="height:72px"
          v-model="address.uf"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="cidade">Cidade</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="cidade"
          placeholder="cidade"
          style="height:72px"
          v-model="address.localidade"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="numero">Número</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="numero"
          placeholder="numero"
          style="height:72px"
          v-model="address.numero"
        />
      </div>
      <div class="mb-4">
        <button 
        @click="handleSubmit"
        class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        style="height:72px"
        >
        Enviar
        </button>
      </div>
    </div>
    <!-- {{ submitData }} -->
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: "Form",
  data() {
    return {
      address: {
        cep: "",
        logradouro: "",
        uf: "",
        localidade: "",
        numero: ""
      },
      submitData:'',
    };
  },
  validations: {
    address : {
      cep: {
        required,
        // async isUnique (value) {
          // if (value === '') return true
          // const response = await fetch(`https://viacep.com.br/ws/${value.trim()}/json/`)
          // return Boolean(await response.json())
        // }
      }
    }
  },
  methods: {
    callCepAPI() {
      fetch(`https://viacep.com.br/ws/${this.address.cep.trim()}/json/`)
        .then(res => res.json())
        .then(address => {
          const { cep, ...rest } = address;
          const validCep = cep.replace("-", "");
          this.address = { ...rest, cep: validCep };
        });
    },
    validateCEP() {
      console.log("validate");
      if (this.address.cep.length === 8) this.callCepAPI();
      if (this.address.cep.length === 0){
        this.address = {
          logradouro: "",
          uf: "",
          localidade: "",
          numero: ""
        };
      }
    },
    handleSubmit() {
      this.submitData = this.address
    }
  }
};

</script>