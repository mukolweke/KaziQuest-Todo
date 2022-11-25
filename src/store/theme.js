import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  //States
  let theme = ref("light");

  //Getters
  let activeTheme = computed(() => theme.value);

  //Actions
  let setThemeData = () => {
    if (localStorage.getItem("theme") !== null) {
      let data = localStorage.getItem("theme");
      if (data) theme.value = JSON.parse(data);
    } else {
      updateLocalStorage();
    }

    if (theme.value === "dark") {
      const body = document.body;
      body.classList.add("dark");
    }
  };

  let updateLocalStorage = () => {
    if (localStorage.getItem("theme")) localStorage.removeItem("theme");

    localStorage.setItem("theme", JSON.stringify(theme.value));
  };

  let updateTheme = (value) => {
    theme.value = value;
    updateLocalStorage();
  };

  return {
    activeTheme,
    setThemeData,
    updateTheme,
  };
});
