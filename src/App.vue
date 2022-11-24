<script setup>
import AppHeader from "./components/AppHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Actions from "./components/AppActions.vue";

// let paginate = (array, page_size, page_number) => {
//   return array.slice((page_number - 1) * page_size, page_number * page_size);
// };

// console.log(paginate(todos.value, 2, 1), paginate(todos.value, 2, 2), paginate(todos.value, 2, 3));
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
          <TodoInput class="mb-4" />

          <div>
            <!-- List Items -->
            <TodoList />

            <!-- Actions -->
            <Actions />
          </div>
        </div>

        <!-- <p
          v-if="store.filteredTodos.length > 0"
          class="text-xs text-center text-very-dark-grayish-blue-2"
        >
          Drag and drop to reorder list
        </p> -->
      </div>
    </section>
  </section>
</template>
