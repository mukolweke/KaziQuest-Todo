<script setup>
import { useTodoStore } from "../store/todo";
import { computed, ref } from "@vue/reactivity";
import draggable from "vuedraggable";

let drag = ref(false);

const store = useTodoStore();

let myTodos = computed({
  get() {
    return store.filteredTodos;
  },
  set(value) {
    store.sortTodos(value);
  },
});

let activeId = ref(null);
let activeLabel = ref(null);
</script>

<template>
  <div class="relative bg-very-dark-desaturated-blue rounded-t-[4px]">
    <draggable
      v-if="store.filteredTodos.length > 0"
      v-model="myTodos"
      group="todos"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      drag-direction="vertical"
      replace-direction="vertical"
    >
      <template #item="{ element }">
        <div
          @mouseover.prevent="activeId = element.id"
          @mouseout.prevent="activeId = null"
          class="px-6 py-[18px] border-b border-very-dark-grayish-blue-3 cursor-pointer"
        >
          <div class="flex items-center">
            <label
              @mouseover.prevent="activeLabel = element.id"
              @mouseout.prevent="activeLabel = null"
              class="inline-flex items-center cursor-pointer"
              @click.prevent="store.markTodoComplete(element.id)"
            >
              <div
                class="w-5 h-5 rounded-full border border-very-dark-grayish-blue-2 flex items-center justify-center"
                :class="{
                  'completed-todo': element.completed,
                }"
              >
                <img
                  v-if="element.completed"
                  src="../assets/images/ICON-CHECK.png"
                  alt="Icon Cancel"
                />
              </div>
            </label>

            <p
              @click.prevent="store.markTodoComplete(element.id)"
              class="px-6 w-full"
              :class="{ 'line-through text-very-dark-grayish-blue-2': element.completed }"
            >
              {{ element.title }}
            </p>

            <div
              v-if="activeId === element.id"
              @click.prevent="store.removeTodo(element.id)"
              class="ml-auto block w-6 h-6"
            >
              <img src="../assets/images/ICON-CROSS.png" alt="Icon Cancel" />
            </div>
          </div>
        </div>
      </template>
    </draggable>

    <div v-else class="py-6 flex items-center justify-center text-very-dark-grayish-blue-2">
      No Todos added
    </div>
  </div>
</template>

<style scoped>
.completed-todo {
  background: linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%));
}

.sortable-chosen.sortable-ghost {
  box-shadow: 0 2px 10px 0 hsl(220, 98%, 61%);
  z-index: 1;
}
</style>
