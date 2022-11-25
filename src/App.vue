<script setup>
import AppHeader from "./components/AppHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Actions from "./components/AppActions.vue";
import FilterActions from "./components/FilterActions.vue";
import { useTodoStore } from "./store/todo";
import { useThemeStore } from "./store/theme";
import { onMounted } from "@vue/runtime-dom";

const store = useTodoStore();
const storeTheme = useThemeStore();

onMounted(() => {
  store.setStoreData();
  storeTheme.setThemeData();
});
</script>

<template>
  <section ref="body" class="min-h-screen bg-very-dark-blue dark:bg-very-light-grayish-blue">
    <section class="h-[200px] sm:h-[300px]">
      <div class="image-header"></div>
    </section>

    <section class="absolute top-[40px] sm:top-[80px] left-0 right-0 mx-6 sm:mx-0">
      <div class="max-w-[540px] mx-auto w-full space-y-4 sm:space-y-8">
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

        <FilterActions class="sm:hidden" />

        <p
          v-if="store.filteredTodos.length > 0"
          class="text-xs text-center text-very-dark-grayish-blue-2 dark:text-dark-grayish-blue"
        >
          Drag and drop to reorder list
        </p>
      </div>
    </section>
  </section>
</template>
