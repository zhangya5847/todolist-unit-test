<template>
  <div>
    <h1>My Todo List</h1>
    <input type="text" v-model="newItem">
    <button @click="addItemToList">ADD</button>
    <ul>
      <li v-for="(item, i) in list" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {
      list: ['eat food', 'work', 'sleep'],
      newItem: '',
    }
  },
  methods: {
    addItemToList() {
      this.list.unshift(this.newItem)
      this.newItem = ''
    },
  },
}
</script>
<style scoped>
  ul, li {
    list-style-type: none;
  }
</style>
