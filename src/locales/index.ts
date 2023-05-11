import { createI18n } from 'vue-i18n';
import mZhLocale from './zh';
import mEnLocale from './en';
import { getStore } from '@/util/storage';

const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
};

const locale = getStore('language') || 'zh';

const i18n = createI18n({
  // 使用composition api模式，则需要将其设置为false
  legacy: false,
  globalInjection: true,
  locale,
  messages
});

export default i18n;
