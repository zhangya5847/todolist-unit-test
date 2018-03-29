import List from '@/components/List.vue'
import Vue from 'vue'

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
})