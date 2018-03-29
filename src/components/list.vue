<template>
  <div>
    <h1>My Todo List</h1>
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
    }
  },
}
</script>
<style scoped>
  ul, li {
    list-style-type: none;
  }
</style>
