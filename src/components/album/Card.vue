<template>
  <article
    v-for="(card, index) in cards"
    :key="index"
    class="h-[24.8em] md:h-[30.8em] lg:h-[26.8em] xl:h-[24.8em] border shadow-md"
  >
    <svg
      class="placeholder"
      width="100%"
      height="225"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
      aria-label="Placeholder: Thumbnail"
    >
      <title>Placeholder</title>
      <rect fill="#55595c" width="100%" height="100%"></rect>
      <text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text>
    </svg>
    <div class="p-5" id="card_body">
      <p
        id="card_title"
        class="font-normal font-['Arial'] text-base text-[#212529]"
      >
        {{ card.content }}
      </p>
      <div class="flex items-center justify-between">
        <div class="flex mt-7">
          <button
            type="button"
            class="border px-2 py-1 rounded-sm font-['Arial'] border-[#6c757d] text-[#6c757d] text-[.875rem] hover:text-white hover:bg-[#6c757d] text-center"
          >
            View
          </button>
          <button
            type="button"
            class="border px-2 py-1 rounded-sm font-['Arial'] border-[#6c757d] text-[#6c757d] text-[.875rem] hover:text-white hover:bg-[#6c757d] text-center"
          >
            Edit
          </button>
        </div>
        <p class="font-['Arial'] mt-7 text-[13px] text-[#6c757d]">9 mins</p>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  cards: Array,
});
</script>

<style scoped>
.placeholder {
  text-anchor: middle;
  font-size: 1.125rem;
  border-radius: 0.125rem; /* 2px */
}
</style>
