
<template>
  <div>{{ $route.params.filter }}
    <ul>
      <li  v-for="todo in filteredTodos"
  :key="todo.id">{{todo.title}}</li>
    </ul>
  </div>
</template>
<script>
  
  const filters = {
      all(todos) {
            return todos;
        },
      complete(todos) {
        return todos.filter(todo => todo.complete);
      },
      actiive(todos)  {
        return todos.filter(todo => !todo.complete);
      }
  }

  export default {
    data() {
      return {
        todos: [
          {id: 1, title: 'walk dog', complete: false },
          {id: 2, title: 'get coffee', complete: false },
          {id: 3, title: 'work on vue', complete: true},
        ]
      }
    },
    computed: {
      filteredTodos() {
        const filter =  this.$route.params.filter || 'all'
        return filters[filter](this.todos);
      }
    }
  }
</script>

<style scoped>

</style>