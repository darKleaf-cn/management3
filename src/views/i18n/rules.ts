import { useI18n } from 'vue-i18n';

export const validatePassword = () => {
  const i18n = useI18n();
  return (rule: any, value: any, callback: any) => {
    if (value.length < 6) {
      callback(new Error(i18n.t('msg.login.passwordRule')));
    } else {
      callback();
    }
  };
};
