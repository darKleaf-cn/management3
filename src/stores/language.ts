import { getStore, setStore } from '@/util/storage';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLanguageStore = defineStore('language', () => {
  const language = ref((getStore('language') as string) || 'zh');

  function setLang(lang: string) {
    language.value = lang;
    setStore('language', lang);
  }
  function getLanuage() {
    return language.value;
  }
  return {
    language,
    setLang,
    getLanuage
  };
});
