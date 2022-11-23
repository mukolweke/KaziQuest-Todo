<script setup>
import { defineProps, defineEmits } from "@vue/reactivity";

defineProps({
  activeItemsCount: Number,
});

let emit = defineEmits(["clearCompleted", "filter"]);
</script>

<template>
  <div
    class="bg-very-dark-desaturated-blue rounded-b-[4px] px-6 py-4 text-xs flex items-center justify-between"
  >
    <p>{{ activeItemsCount }} items left</p>

    <div class="flex items-center space-x-4">
      <p class="cursor-pointer" @click="emit('filter', 'all')">All</p>

      <p class="cursor-pointer" @click="emit('filter', 'active')">Active</p>

      <p class="cursor-pointer" @click="emit('filter', 'completed')">Completed</p>
    </div>

    <button @click="emit('clearCompleted')">Clear Completed</button>
  </div>
</template>
