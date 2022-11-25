<script setup>
import { useThemeStore } from "../store/theme";
const storeTheme = useThemeStore();

let toggleAppTheme = () => {
  if (storeTheme.activeTheme === "light") {
    storeTheme.updateTheme("dark");
  } else {
    storeTheme.updateTheme("light");
  }

  const body = document.body;
  body.classList.toggle("dark");

  // focus input on switch
  const input = document.querySelectorAll("input")[0];
  input.focus();
};
</script>

<template>
  <section class="flex items-center justify-between">
    <div class="text-light-gray leading-10 tracking-widest text-2xl sm:text-4xl font-semibold">
      <h1>TODO</h1>
    </div>

    <div class="w-6 h-6 cursor-pointer" @click="toggleAppTheme">
      <img
        v-if="storeTheme.activeTheme === 'light'"
        class="object-cover h-full"
        src="../assets/images/ICON-SUN.png"
        alt="Sun Icon"
      />

      <img v-else class="object-cover h-full" src="../assets/images/ICON-MOON.png" alt="Sun Icon" />
    </div>
  </section>
</template>
