import type { Directive } from 'vue';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/stores/user';

import { Permission } from '@/type/permission';

export const permission: Directive = {
  mounted(el: HTMLElement, binding) {
    const { permission } = storeToRefs(useUserStore());
    const { value } = binding;
    if (permission.value === Permission.Super || permission.value === value) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
};
