import { createApp, type Directive } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import * as directives from '@/directives';
import i18n from './locales';
import initElement from './plugins/element';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
initElement(app);

Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.mount('#app');
