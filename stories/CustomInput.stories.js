import '@/assets/css/tailwind.css'
import CustomInput from '@/components/CustomInput/CustomInput.vue';

export default{
  title: 'CustomInput',
  component: '<CustomInput />'
};

export const Text = () => ({
  components: { CustomInput },
  template: '<h1>Hello Button <CustomInput /></h1>',
});
