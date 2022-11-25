<script setup>
import { useTodoStore } from "../store/todo";
import { ref, onMounted } from "vue";

const store = useTodoStore();

let todo = ref("");

let submit = () => {
  if (todo.value) {
    store.addTodo(todo.value);
    todo.value = "";
  }
};

// Focus input on load
const input = ref(null);
onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <form @submit.prevent="submit">
    <div class="relative focus-within:text-gray-400 w-full">
      <span class="absolute inset-y-0 left-0 flex items-center pl-6">
        <label class="inline-flex items-center">
          <div
            class="w-5 h-5 rounded-full border-2 border-very-dark-grayish-blue-2/20 dark:border-dark-grayish-blue/20"
          ></div>
        </label>
      </span>

      <input
        v-model="todo"
        ref="input"
        class="w-full text-sm sm:text-[19px] py-3 sm:py-4 pr-6 text-very-light-grayish-blue placeholder:text-very-dark-grayish-blue-2 placeholder:dark:text-light-grayish-blue dark:text-very-dark-grayish-blue bg-very-dark-desaturated-blue dark:bg-light-gray rounded-[4px] pl-16 outline-none caret-primary-bright-blue focus:ring-0"
        placeholder="Add a todo"
        autocomplete="off"
      />
    </div>
  </form>
</template>
