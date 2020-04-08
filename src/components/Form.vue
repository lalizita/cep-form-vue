<template>
  <div class="w-full max-w-xs">
    <h1>insira o seu cep</h1>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Cep</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Cep"
          @change="validateCEP"
          v-model="address.cep"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">logradouro</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="logradouro"
          v-model="address.logradouro"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">uf</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="uf"
          v-model="address.uf"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Cidade</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="cidade"
          v-model="address.localidade"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Número</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="numero"
          v-model="address.numero"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
      }
    };
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
      if (this.address.cep.length < 8)
        this.address = {
          cep: "",
          logradouro: "",
          uf: "",
          localidade: "",
          numero: ""
        };
    }
  }
};
</script>