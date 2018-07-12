import axios from 'axios'

export default {
  namespaced: true,
  state: {
    todos: [],
    add: false
  },
  getters: {
    todos: state => state.todos,
    add: state => state.add
  },
  mutations: {
    initTodo (state, todos) {
      state.todos = todos
    },
    changeTodo (state, todo) {
      state.todos.find((a)=>a.id == todo.id).isComplete = !state.todos.find((a)=>a.id == todo.id).isComplete
    },
    changeAddTodo (state) {
      state.add = true
    },
    createTodo (state, todo) {
      state.todos.push(todo)
      state.add = false
    }
  },
  actions: {
    async INIT_TODO ({ commit }) {
      const res = await axios.get('http://localhost:3000/todos')
      const data = res.data
      commit('initTodo', data)
    },
    async CHANGE_TODO ({ commit }, todo) {
      await axios.put(`http://localhost:3000/todos/${todo.id}`, todo)
      commit('changeTodo', todo)
    },
    CHANGE_ADD_TODO ({ commit }) {
      commit('changeAddTodo')
    },
    async CREATE_TODO ({ commit }, todo) {
      await axios.post('http://localhost:3000/todos', todo)
      commit('createTodo', todo)
    }
  }
}
