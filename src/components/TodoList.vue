<script setup>
import { useTodoStore } from "../store/todo";
import { computed, ref } from "@vue/runtime-dom";
import draggable from "vuedraggable";

const store = useTodoStore();

let drag = ref(false);

let myTodos = computed({
  get() {
    if (store.activeFilter === "active") {
      return store.filteredTodos.filter((item) => item.completed === false);
    } else if (store.activeFilter === "completed") {
      return store.filteredTodos.filter((item) => item.completed === true);
    } else {
      return store.filteredTodos;
    }
  },
  set(value) {
    store.updateTodos(value);
  },
});

let activeId = ref(null);
</script>

<template>
  <div
    class="relative dark:text-very-dark-grayish-blue bg-very-dark-desaturated-blue dark:bg-light-gray rounded-t-[4px]"
  >
    <draggable
      v-if="myTodos.length > 0"
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
          class="px-6 py-[18px] border-b border-very-dark-grayish-blue-3 dark:border-dark-grayish-blue/20 cursor-pointer"
        >
          <div class="flex items-center">
            <div
              class="flex items-center cursor-pointer"
              @click.prevent="store.markTodoComplete(element.id)"
            >
              <div
                class="relative w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-[.5s]"
                :class="{
                  'completed-todo border-0': element.completed,
                  'hovered-border': activeId === element.id,
                  'border-very-dark-grayish-blue-2/20 dark:border-dark-grayish-blue/20':
                    activeId !== element.id,
                }"
              >
                <img
                  v-if="element.completed"
                  src="../assets/images/ICON-CHECK.png"
                  alt="Icon Cancel"
                  class="object-contain"
                />
              </div>
            </div>

            <p
              @click.prevent="store.markTodoComplete(element.id)"
              class="px-6 w-full"
              :class="{
                'line-through text-very-dark-grayish-blue-2  dark:text-dark-grayish-blue':
                  element.completed,
              }"
            >
              {{ element.title }}
            </p>

            <div
              v-show="activeId === element.id"
              @click.prevent="store.removeTodo(element.id)"
              class="ml-auto w-6 h-6 flex items-center"
            >
              <img src="../assets/images/ICON-CROSS.png" alt="Icon Cancel" />
            </div>
          </div>
        </div>
      </template>
    </draggable>

    <div
      v-else
      class="py-6 flex flex-col items-center justify-center text-very-dark-grayish-blue-2 dark:text-dark-grayish-blue"
    >
      No Todos added
    </div>
  </div>
</template>

<style scoped>
.completed-todo {
  background: linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%));
}

.hovered-border {
  border-color: hsl(280, 87%, 65%, 0.4);
}

.sortable-chosen.sortable-ghost {
  box-shadow: 0 2px 10px 0 hsl(220, 98%, 61%, 0.3);
  z-index: 1;
}
</style>
