<template>
  <div class="container">
    <h1>お気持ち虚無同盟 Vuexのいろは sample</h1>
    <div>
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from '../components/TodoList'
import { mapActions } from 'vuex'

export default {
  components: { TodoList },
  mounted () {
    this.INIT_TODO()
  },
  methods: {
    ...mapActions('todos', ['INIT_TODO'])
  }
}
</script>

<style>
.container {
  width: 600px;
  margin: 0 auto;
}
</style>
