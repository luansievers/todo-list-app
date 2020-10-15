import { shallowMount } from '@vue/test-utils'
import VTodo from '@/components/VTodo.vue'


it('should be able to view a list of tasks', async () => {
  const wrapper = shallowMount(VTodo)

  wrapper.setData({ todoList: [{
      message: 'First Todo',
      date: new Date(),
      done: false
    }] });
  await wrapper.vm.$nextTick()
  let button = wrapper.findComponent({ name: 'v-subheader' })
  expect(button.text()).toBe("1 left")
})

  it('should create a new todo', async () => {
    const wrapper = shallowMount(VTodo)

    wrapper.setData({ todo: 'Second' })
    wrapper.findComponent({ name: 'v-text-field' }).vm.$emit(
        'keydown',
        new KeyboardEvent('keydown', {
          keyCode: 13
        })
    )
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.todo).toBe('')
  })

