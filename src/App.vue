<script setup>
import AppHeader from "./components/AppHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Actions from "./components/AppActions.vue";
import { ref } from "@vue/runtime-core";
import { computed } from "@vue/reactivity";

let todos = ref([
  { title: "Complete online Javascript course", completed: true },
  { title: "10 minutes meditation", completed: false },
  { title: "Read for 1 hour", completed: false },
  { title: "Pick up groceries", completed: false },
  { title: "Complete Todo App on Frontend Mentor", completed: false },
]);

let filteredTodos = ref(todos.value);
let activeFilter = ref("all");

let addTodo = (value) => {
  todos.value.push({ title: value, completed: false });
};

let markTodoComplete = (indexVal) => {
  todos.value.find((item, index) => index === indexVal).completed = true; // eslint-disable-line
  filterTodos(activeFilter.value);
};

let removeTodo = (indexVal) => {
  todos.value.splice(indexVal, 1);
};

let activeTodosCount = computed(() => {
  return todos.value.filter((item) => item.completed === false).length;
});

let clearCompletedTodos = () => {
  todos.value.splice(
    todos.value.findIndex((item) => item.completed === true),
    1
  );
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
</script>

<template>
  <section class="min-h-screen bg-very-dark-blue">
    <section class="">
      <img
        src="./assets/images/bg-desktop-dark.jpg"
        alt="Todo BG Image"
        class="object-cover h-full w-full"
      />
    </section>

    <section class="absolute top-[80px] left-0 right-0">
      <div class="max-w-[540px] mx-auto w-full space-y-8">
        <!-- Header -->
        <AppHeader />

        <div class="text-light-grayish-blue w-full">
          <!-- Text Input -->
          <TodoInput @saveTodo="addTodo" class="mb-4" />

          <div>
            <!-- List Items -->
            <TodoList
              :items="filteredTodos"
              @markComplete="markTodoComplete"
              @removeTodo="removeTodo"
            />

            <!-- Actions -->
            <Actions
              :active-items-count="activeTodosCount"
              @clearCompleted="clearCompletedTodos"
              @filter="filterTodos"
            />
          </div>
        </div>

        <p v-if="filterTodos.length > 0" class="text-xs text-center text-very-dark-grayish-blue-2">
          Drag and drop to reorder list
        </p>
      </div>
    </section>
  </section>
</template>
