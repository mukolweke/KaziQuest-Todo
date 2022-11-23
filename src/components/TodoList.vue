<script setup>
import { ref, computed, defineProps, defineEmits } from "@vue/reactivity";

let props = defineProps({
  items: Array,
});

let filterdItems = computed(() => props.items);
let activeIndex = ref(null);

let hoverTodoItem = (index) => {
  activeIndex.value = index;
};

let emit = defineEmits(["markComplete", "removeTodo"]);

let markComplete = (index) => {
  emit("markComplete", index);
};

let removeTodo = (index) => {
  emit("removeTodo", index);
};
</script>

<template>
  <div class="bg-very-dark-desaturated-blue rounded-t-[4px]">
    <ul>
      <li
        v-for="(item, index) in filterdItems"
        :key="index"
        @mouseover="hoverTodoItem(index)"
        @mouseout="hoverTodoItem(index)"
        class="px-6 py-[18px] border-b border-very-dark-grayish-blue-3 cursor-pointer"
      >
        <div class="flex items-center">
          <!-- Complete Checkmark -->
          <label
            class="inline-flex items-center cursor-pointer"
            @click.prevent="markComplete(index)"
          >
            <div
              class="w-5 h-5 rounded-full border border-very-dark-grayish-blue-2 flex items-center justify-center"
              :class="{ 'completed-todo': item.completed }"
            >
              <img v-if="item.completed" src="../assets/images/ICON-CHECK.png" alt="Icon Cancel" />
            </div>
          </label>

          <!-- Item Label -->
          <p
            @click.prevent="markComplete(index)"
            class="pl-6 w-full"
            :class="{ 'line-through text-very-dark-grayish-blue-2': item.completed }"
          >
            {{ item.label }}
          </p>

          <!-- Item remove action -->
          <div v-if="activeIndex === index" @click.prevent="removeTodo(index)" class="ml-auto">
            <img src="../assets/images/ICON-CROSS.png" alt="Icon Cancel" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.completed-todo {
  background: linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%));
}
</style>
