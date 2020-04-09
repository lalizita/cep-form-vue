<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="cep">Cep</label>
      <!-- :class="{
          'border-red-500' : !$v.address.cep.required 
          }" -->
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      style="height:72px"
    />
    <div class="text-red-500">Field is required</div>
  </div>
</template>

<script>
  export default {
    name: 'CustomInput'
  }
</script>