<template>
  <nav
    id="bottom_nav"
    :class="list ? 'mt-12' : 'mt-2'"
    class="flex w-11/12 mx-auto sm:w-full items-center justify-between"
  >
    <div class="flex items-center">
      <span class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
          ></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      </span>
      <p class="font-bold text-[#fff] text-xl font-['Arial']">Album</p>
    </div>
    <button
      @click="showList"
      type="button"
      id="show_hide_button"
      class="border rounded-sm text-[#fff] w-14 h-10 bg-[#343a40]"
    >
      <div class="w-8 mx-auto">
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="rgba(255, 255, 255, 0.5)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </div>
    </button>
  </nav>
</template>

<script setup>
const props = defineProps({
  list: Boolean,
  showList: Function,
});
</script>

<style scoped>
#show_hide_button {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
