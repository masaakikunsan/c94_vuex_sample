<template>
  <div class="create-todo">
    <input v-model="formData.name">
    <button @click="CREATE_TODO(formData)">create</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      formData: {
        id: null,
        name: '',
        isComplete: false
      }
    }
  },
  computed: {
    ...mapGetters('todos', ['todos'])
  },
  mounted () {
    this.formData.id = this.todos.length + 1
  },
  methods: {
    ...mapActions('todos', ['CREATE_TODO'])
  }
}
</script>

<style scoped>
.create-todo {
  display: flex;
  align-items: center;
}
</style>
