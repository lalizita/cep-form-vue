import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import CustomInput from '@/components/CustomInput/CustomInput.vue';

export default{
  title: 'CustomInput',
  component: '<CustomInput />'
};

export const Text = () => ({
  components: { CustomInput },
  template: '<h1>Hello Button <CustomInput /></h1>',
});
