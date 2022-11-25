<template>
  <nav
    class="mt-6 lg:w-[800px] xl:w-[880px] grid sm:flex sm:gap-4 md:gap-32 md:ga-48 xl:gap-[120px]"
  >
    <div class="grid sm:w-[350px] lg:w-[500px] xl:w-[620px]">
      <p class="font-['Arial'] text-[#fff] text-2xl">About</p>
      <p class="font-['Arial'] mt-2 font-normal text-base text-[#6c757d]">
        Add some information about the album below, the author, or any other
        background context. Make it a few sentences long so folks can pick up
        some informative tidbits. Then, link them off to some social networking
        sites or contact information.
      </p>
    </div>
    <div class="grid mt-10 sm:mt-0 sm:h-[2.5em]">
      <p class="font-['Arial'] text-[#fff] text-2xl">Contact</p>
      <span
        v-for="(data, index) in contactList"
        :key="index"
        class="font-['Arial'] text-[#fff] text-base font-normal hover:underline"
        >{{ data.name }}</span
      >
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  contactList: Array,
});
</script>
