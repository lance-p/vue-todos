const storeKey = 'todos'

export default {
  get() {
    //return localStorage.getItem(storeKey)
    return [
      {id: 1, title: 'walk dog', complete: false },
      {id: 2, title: 'get coffee', complete: false },
      {id: 3, title: 'work on vue', complete: true},
    ]
  },
  set(todos) {
    localStorage.setItem(storeKey, todos)
  }
}