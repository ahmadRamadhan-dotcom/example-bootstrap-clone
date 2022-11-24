<template>
  <div v-for="(data, index) in tailwindExample" id="example_card" class="">
    <a href="#">
      <img
        :src="data.image"
        id="thumbnail"
        alt="thumbnail"
        class="p-[.25rem] border-2"
      />
      <p
        id="title_project_example"
        class="hover:text-[#0056b3] mt-3 hover:underline text-[#007bff] font-medium text-xl font-['Arial']"
      >
        {{ data.projectName }}
      </p>
      <p
        id="desc_project_example"
        class="font-['Arial'] text-[#6c757d] font-normal text-base mt-3"
      >
        {{ data.descProject }}
      </p>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  tailwindExample: Array,
});
</script>
