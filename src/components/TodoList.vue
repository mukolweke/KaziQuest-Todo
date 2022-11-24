<script setup>
import { useTodoStore } from "../store/todo";
import { ref } from "@vue/reactivity";

const store = useTodoStore();

let activeId = ref(null);
let activeLabel = ref(null);
</script>

<template>
  <div class="bg-very-dark-desaturated-blue rounded-t-[4px]">
    <ul v-if="store.filteredTodos.length > 0">
      <li
        v-for="item in store.filteredTodos"
        :key="item.id"
        @mouseover.prevent="activeId = item.id"
        @mouseout.prevent="activeId = null"
        class="px-6 py-[18px] border-b border-very-dark-grayish-blue-3 cursor-pointer"
      >
        <div class="flex items-center">
          <!-- Complete Checkmark -->
          <label
            @mouseover.prevent="activeLabel = item.id"
            @mouseout.prevent="activeLabel = null"
            class="inline-flex items-center cursor-pointer"
            @click.prevent="store.markTodoComplete(item.id)"
          >
            <div
              class="w-5 h-5 rounded-full border border-very-dark-grayish-blue-2 flex items-center justify-center"
              :class="{
                'completed-todo': item.completed,
              }"
            >
              <img v-if="item.completed" src="../assets/images/ICON-CHECK.png" alt="Icon Cancel" />
            </div>
          </label>

          <!-- Item Label -->
          <p
            @click.prevent="store.markTodoComplete(item.id)"
            class="px-6 w-full"
            :class="{ 'line-through text-very-dark-grayish-blue-2': item.completed }"
          >
            {{ item.title }}
          </p>

          <!-- Item remove action -->
          <div
            v-if="activeId === item.id"
            @click.prevent="store.removeTodo(item.id)"
            class="ml-auto block w-6 h-6"
          >
            <img src="../assets/images/ICON-CROSS.png" alt="Icon Cancel" />
          </div>
        </div>
      </li>
    </ul>

    <div v-else class="py-6 flex items-center justify-center text-very-dark-grayish-blue-2">
      No Todos added
    </div>
  </div>
</template>

<style scoped>
.completed-todo {
  background: linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%));
}
</style>
