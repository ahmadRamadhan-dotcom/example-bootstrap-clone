<template>
  <Header />
  <main>
    <Hero />
    <section
      class="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8 mt-32 w-11/12 sm:w-[500px] md:w-[700px] lg:w-[950px] xl:w-[1110px] mx-auto"
    >
      <Card :cards="albums" />
    </section>
  </main>
</template>
<script setup>
import Header from "~/components/album/Header.vue";
import Hero from "~/components/album/Hero.vue";
import Card from "~/components/album/Card.vue";

const albums = [
  {
    id: 0,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 1,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 3,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 4,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 5,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 6,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 7,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 8,
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];
</script>
