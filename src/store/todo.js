import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore("todo", () => {
  //States
  const seedTodos = [
    { id: 1, title: "Complete online Javascript course", completed: true },
    { id: 2, title: "Complete Todo App on Frontend Mentor", completed: false },
  ];

  let todos = ref([]);

  let filterVal = ref("all");

  //Getters
  let filteredTodos = computed(() => todos.value);

  let activeTodosCount = computed(() => {
    return todos.value.filter((item) => item.completed === false).length;
  });

  let activeFilter = computed(() => filterVal.value);

  //Actions
  let updateTodos = (value) => {
    todos.value = value;
  };

  let setStoreData = () => {
    if (localStorage.getItem("todos") !== null) {
      let data = localStorage.getItem("todos");
      if (data) todos.value = JSON.parse(data);
    } else {
      todos.value = seedTodos;
      updateLocalStorage();
    }
  };

  let updateLocalStorage = () => {
    if (localStorage.getItem("todos")) localStorage.removeItem("todos");

    localStorage.setItem("todos", JSON.stringify(todos.value));
  };

  let addTodo = (value) => {
    let index = todos.value.findIndex((item) => item.title.toLowerCase() === value.toLowerCase());
    if (index > -1) return;

    let id = todos.value[todos.value.length - 1]?.id;
    let todoId = id ? id + 1 : 1;

    todos.value.push({ id: todoId, title: value, completed: false });
    updateLocalStorage();
  };

  let markTodoComplete = (idValue) => {
    todos.value.find((item) => item.id === idValue).completed = true; // eslint-disable-line
    // filterTodos(activeFilter.value);
    updateLocalStorage();
  };

  let removeTodo = (id) => {
    let index = todos.value.findIndex((item) => item.id === id);

    if (index > -1) {
      todos.value.splice(index, 1);
    }

    // filterTodos(activeFilter.value);
    updateLocalStorage();
  };

  let clearCompletedTodos = () => {
    todos.value = todos.value.filter((todo) => !todo.completed);
    // filterTodos(activeFilter.value);
    updateLocalStorage();
  };

  let setFilter = (value) => {
    filterVal.value = value;
  };

  return {
    activeFilter,
    filteredTodos,
    activeTodosCount,
    addTodo,
    markTodoComplete,
    removeTodo,
    clearCompletedTodos,
    setStoreData,
    updateTodos,
    setFilter,
  };
});
