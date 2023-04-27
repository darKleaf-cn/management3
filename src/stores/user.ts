import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getStore, setStore } from '@/util/storage';

import { Permission } from '@/type/permission';

export const useUserStore = defineStore('user', () => {
  const roleStorage = JSON.parse(getStore('role') as string);
  const permissionStorage = getStore('permission') as Permission;
  const role = ref<Array<string>>(roleStorage);
  const permission = ref<Permission>(permissionStorage);

  function changePermission(value: Permission) {
    permission.value = value;
    setStore('permission', value);
    switch (value) {
      case Permission.Normal:
        setStore('role', [Permission.Normal]);
        break;
      case Permission.Manage:
        setStore('role', [Permission.Manage]);
        break;
      case Permission.Super:
        setStore('role', [Permission.Normal, Permission.Manage, Permission.Super]);
        break;
    }
    location.reload();
  }
  return { role, permission, changePermission };
});
