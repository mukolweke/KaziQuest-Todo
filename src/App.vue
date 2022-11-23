<script setup>
import AppHeader from "./components/AppHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Actions from "./components/AppActions.vue";
</script>

<template>
  <section class="min-h-screen bg-very-dark-blue">
    <section class="">
      <img
        src="./assets/images/bg-desktop-dark.jpg"
        alt="Todo BG Image"
        class="object-cover h-full w-full"
      />
    </section>

    <section class="absolute top-[80px] left-0 right-0">
      <div class="max-w-[540px] mx-auto w-full space-y-8">
        <!-- Header -->
        <AppHeader />

        <div class="text-light-grayish-blue w-full">
          <!-- Text Input -->
          <TodoInput class="mb-4" />

          <!-- List Items -->
          <TodoList />

          <!-- Actions -->
          <Actions />
        </div>

        <p class="text-xs text-center text-light-grayish-blue">Drag and drop to reorder list</p>
      </div>
    </section>
  </section>
</template>
