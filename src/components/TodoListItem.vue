<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" class="todo-list">
      <input type="checkbox" :checked="todo.isComplete" readonly="true" @click.prevent="CHANGE_TODO(todo)">
      <span>{{ todo.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todos: Array
  },
  methods: {
    ...mapActions('todos', ['CHANGE_TODO'])
  }
}
</script>

<style scoped>
.todo-list {
  display: flex;
  align-items: center;
}
</style>
