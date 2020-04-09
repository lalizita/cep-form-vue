import Vue from 'vue';
import CustomInput from '@/components/CustomInput/CustomInput.vue';


export default{
  title: 'CustomInputInside components directory',
  component: '<CustomInput />'
};

export const Text = () => ({
  components: { CustomInput },
  template: '<h1>Hello Button <CustomInput /></h1>',
});
