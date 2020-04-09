import Vue from 'vue';
import CustomInput from '@/coponents/CustomInput/CustomInput.vue';

export const asAComponent = () => ({
  components: { CustomInput },
  template: '<CustomInput />'
});