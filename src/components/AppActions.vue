<script setup>
import { defineProps, defineEmits, ref } from "@vue/reactivity";

defineProps({
  activeItemsCount: Number,
});

let emit = defineEmits(["clearCompleted", "filter"]);

let activeFilter = ref("all");

let submitFilter = (filter) => {
  activeFilter.value = filter;
  emit("filter", filter);
};
</script>

<template>
  <div
    class="text-very-dark-grayish-blue-2 bg-very-dark-desaturated-blue rounded-b-[4px] px-6 py-4 text-xs flex items-center justify-between"
  >
    <p>{{ activeItemsCount }} item{{ activeItemsCount > 1 ? "s" : "" }} left</p>

    <div class="flex items-center space-x-4">
      <p
        class="cursor-pointer font-bold duration-[.3s] transition-colors"
        :class="{
          'text-primary-bright-blue': activeFilter === 'all',
          'hover:text-very-light-grayish-blue': activeFilter !== 'all',
        }"
        @click="submitFilter('all')"
      >
        All
      </p>

      <p
        class="cursor-pointer font-bold duration-[.3s] transition-colors"
        :class="{
          'text-primary-bright-blue': activeFilter === 'active',
          'hover:text-very-light-grayish-blue': activeFilter !== 'active',
        }"
        @click="submitFilter('active')"
      >
        Active
      </p>

      <p
        class="cursor-pointer font-bold duration-[.3s] transition-colors"
        :class="{
          'text-primary-bright-blue': activeFilter === 'completed',
          'hover:text-very-light-grayish-blue': activeFilter !== 'completed',
        }"
        @click="submitFilter('completed')"
      >
        Completed
      </p>
    </div>

    <button
      class="hover:text-very-light-grayish-blue duration-[.3s] transition-colors"
      @click="emit('clearCompleted')"
    >
      Clear Completed
    </button>
  </div>
</template>
