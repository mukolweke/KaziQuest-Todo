import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore("todo", () => {
  //States
  let todos = ref([
    { id: 1, title: "Complete online Javascript course", completed: true },
    { id: 2, title: "10 minutes meditation", completed: false },
    { id: 3, title: "Read for 1 hour", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  let activeFilter = ref("all");

  //Getters
  let filteredTodos = computed(() => todos.value);

  let activeTodosCount = computed(() => {
    return todos.value.filter((item) => item.completed === false).length;
  });

  //Actions
  let sortTodos = (value) => {
    todos.value = value;
  };

  let addTodo = (value) => {
    let id = todos.value[todos.value.length - 1].id;
    todos.value.push({ id: id + 1, title: value, completed: false });
  };

  let markTodoComplete = (idValue) => {
    todos.value.find((item) => item.id === idValue).completed = true; // eslint-disable-line
    filterTodos(activeFilter.value);
  };

  let removeTodo = (id) => {
    let index = todos.value.findIndex((item) => item.id === id);

    if (index > -1) {
      todos.value.splice(index, 1);
    }

    filterTodos(activeFilter.value);
  };

  let clearCompletedTodos = () => {
    todos.value = todos.value.filter((todo) => !todo.completed);
    filterTodos(activeFilter.value);
  };

  let filterTodos = (filter) => {
    activeFilter.value = filter;

    if (filter === "all") {
      filteredTodos.value = [...todos.value];
    }

    if (filter === "active") {
      filteredTodos.value = [...todos.value.filter((item) => item.completed === false)];
    }

    if (filter === "completed") {
      filteredTodos.value = [...todos.value.filter((item) => item.completed === true)];
    }
  };

  return {
    activeFilter,
    filteredTodos,
    activeTodosCount,
    addTodo,
    markTodoComplete,
    removeTodo,
    clearCompletedTodos,
    filterTodos,
    sortTodos,
  };
});
