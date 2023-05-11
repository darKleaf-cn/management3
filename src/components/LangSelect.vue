<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';
import { useI18n } from 'vue-i18n';

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value: string) {
      return ['dark', 'light'].includes(value);
    }
  }
});

const { setLang } = useLanguageStore();
const i18n = useI18n();
function setLanguage(lang: string) {
  setLang(lang);
  i18n.locale.value = lang;
}
</script>

<template>
  <ElDropdown trigger="click" @command="setLanguage">
    <div>
      <elTooltip content="国际化" :effect="effect">
        <elButton>切换</elButton>
      </elTooltip>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem command="zh"> 中文 </ElDropdownItem>
        <ElDropdownItem command="en"> English </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style lang="scss" scoped></style>
