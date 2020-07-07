import { mount, shallowMount } from '@vue/test-utils'
import CptMsg from '@/components/CptMsg.vue'

describe('CptMsg.vue', () => {
  const wrapper = mount(CptMsg)

  it('renders the correct markup', () => {
    const msg = 'new message'
    const cptWrapper = shallowMount(CptMsg, {
      propsData: { msg }
    })
    expect(cptWrapper.html()).toContain('<span class="msg">new message</span>')
  })

  // 也便于检查已存在的元素
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})
