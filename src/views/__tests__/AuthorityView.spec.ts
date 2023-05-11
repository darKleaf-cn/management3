import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AuthorityViewVue from '../authority/AuthorityView.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AuthorityViewVue);
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
