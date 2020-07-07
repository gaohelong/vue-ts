import { shallowMount } from '@vue/test-utils'
import CptTest from '@/components/CptTest.vue'

describe('CptTest.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CptTest, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
