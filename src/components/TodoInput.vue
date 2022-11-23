<template>
  <div>
    <div class="relative focus-within:text-gray-400 w-full">
      <span class="absolute inset-y-0 left-0 flex items-center pl-6">
        <label class="inline-flex items-center">
          <div class="w-5 h-5 rounded-full border border-very-dark-grayish-blue-2"></div>
        </label>
      </span>
      <input
        type="search"
        name="q"
        class="w-full py-4 text-very-light-grayish-blue bg-very-dark-desaturated-blue rounded-[4px] pl-16 focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Currently typing"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
