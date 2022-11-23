<script setup>
import { ref, defineEmits } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

let todo = ref("");

let emit = defineEmits(["saveTodo"]);

let submit = () => {
  if (todo.value) {
    emit("saveTodo", todo.value);
    todo.value = "";
  }
};

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
          <div class="w-5 h-5 rounded-full border border-very-dark-grayish-blue-2"></div>
        </label>
      </span>

      <input
        v-model="todo"
        ref="input"
        class="w-full py-4 text-very-light-grayish-blue bg-very-dark-desaturated-blue rounded-[4px] pl-16 outline-none caret-primary-bright-blue focus:ring-0"
        placeholder="Add a todo"
        autocomplete="off"
      />
    </div>
  </form>
</template>
