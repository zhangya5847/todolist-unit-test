import List from '@/components/List.vue'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

describe('List.vue', () => {
  it('display the items from the list', () => {
    //test
    // 1／build component
    const Constructor = Vue.extend(List)
    const ListCompontent = new Constructor().$mount()
    // 2/use 'chai' with 'ecpect' pattern
    // 这个断言检查HTML列表中的文本是否与组件data里的数据吻合
    expect(ListCompontent.$el.textContent).to.contain('sleep')
  })
  it('add a new item to list by click', () => {
    // // 1／build component
    // const Constructor = Vue.extend(List)
    // const ListCompontent = new Constructor().$mount()
    // // 2/ set value of new item
    // ListCompontent.newItem = 'play'
    // // 3/ click button
    // const button = ListCompontent.$el.querySelector('button')
    // const clickEvent = new window.Event('click')
    // button.dispatchEvent(clickEvent)
    // ListCompontent._watcher.run()
    // // 4/ check new item not only in the html but also in the list array
    // expect(ListCompontent.$el.textContent).to.contain('play')
    // expect(ListCompontent.list).to.contain('play')

    // 使用vue测试工具库
    const wrapper =  mount(List)
    // console.log(wrapper)
    wrapper.vm.newItem = 'play'
    wrapper.find('button').trigger('click')
    expect(wrapper.text()).to.contain('play')
    expect(wrapper.vm.list).to.contain('play')

  })
})