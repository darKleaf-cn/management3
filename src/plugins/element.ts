import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/zh-cn';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import type { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default (app: App) => {
  const { language } = storeToRefs(useLanguageStore());
  app.use(ElementPlus, {
    locale: language.value === 'en' ? en : zhCn
  });
};
