<template>
  <div>
    <TodoListItem :todos="todos" />
    <CreateTodo v-if="add" />
    <button v-if="!add" @click="CHANGE_ADD_TODO()">+ ADD</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoListItem from './TodoListItem'
import CreateTodo from './CreateTodo'

export default {
  components: { TodoListItem, CreateTodo },
  computed: {
    ...mapGetters('todos', ['todos', 'add'])
  },
  methods: {
    ...mapActions('todos', ['CHANGE_ADD_TODO'])
  }
}
</script>

<style lang="css">
</style>
