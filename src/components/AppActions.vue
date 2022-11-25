<script setup>
import { useTodoStore } from "../store/todo";

const store = useTodoStore();

let submitFilter = (value) => {
  store.setFilter(value);
};
</script>

<template>
  <div
    class="text-very-dark-grayish-blue-2 dark:text-dark-grayish-blue bg-very-dark-desaturated-blue dark:bg-light-gray rounded-b-[4px] px-6 py-4 text-xs flex items-center justify-between"
  >
    <p>{{ store.activeTodosCount }} item{{ store.activeTodosCount > 1 ? "s" : "" }} left</p>

    <div class="hidden sm:flex items-center space-x-4">
      <p
        class="cursor-pointer font-bold duration-[.3s] transition-colors"
        :class="{
          'text-primary-bright-blue': store.activeFilter === 'all',
          'hover:text-very-light-grayish-blue hover:dark:text-very-dark-grayish-blue':
            store.activeFilter !== 'all',
        }"
        @click="submitFilter('all')"
      >
        All
      </p>

      <p
        class="cursor-pointer font-bold duration-[.3s] transition-colors"
        :class="{
          'text-primary-bright-blue': store.activeFilter === 'active',
          'hover:text-very-light-grayish-blue hover:dark:text-very-dark-grayish-blue':
            store.activeFilter !== 'active',
        }"
        @click="submitFilter('active')"
      >
        Active
      </p>

      <p
        class="cursor-pointer font-bold duration-[.3s] transition-colors"
        :class="{
          'text-primary-bright-blue': store.activeFilter === 'completed',
          'hover:text-very-light-grayish-blue hover:dark:text-very-dark-grayish-blue':
            store.activeFilter !== 'completed',
        }"
        @click="submitFilter('completed')"
      >
        Completed
      </p>
    </div>

    <button
      type="button"
      class="hover:text-very-light-grayish-blue hover:dark:text-very-dark-grayish-blue duration-[.3s] transition-colors"
      @click="store.clearCompletedTodos()"
    >
      Clear Completed
    </button>
  </div>
</template>
