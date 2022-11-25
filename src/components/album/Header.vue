<template>
  <header
    :class="
      list
        ? 'h-[28em] sm:h-[19em] lg:h-[17em] xl:h-[14.5em] '
        : 'h-[3.7em] xl:h-[3.5em]'
    "
    class="flex justify-center bg-[#343a40]"
  >
    <div class="w-11/12 sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1120px]">
      <div :class="list ? 'block transition duration-1000' : 'hidden'">
        <TopNav :contact-list="contactList" />
      </div>
      <BottomNav :list="list" :show-list="showList" />
    </div>
  </header>
</template>

<script setup>
import TopNav from "~/components/album/TopNav.vue";
import BottomNav from "~/components/album/BottomNav.vue";
import { ref } from "vue";
const contactList = [
  { id: 1, name: "Follow on Twitter" },
  { id: 2, name: "Like on Facebook" },
  { id: 3, name: "Email me" },
];

const list = ref(false);

const showList = () => {
  list.value = !list.value;
};
</script>
