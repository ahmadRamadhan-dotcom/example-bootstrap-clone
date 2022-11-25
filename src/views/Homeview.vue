<template>
  <Header />
  <main>
    <section class="p-12 md:p-12">
      <div class="mt-14 md:mt-8">
        <p
          id="title_example"
          class="font-['Arial'] leading-[35px] font-medium text-[#212529] text-[32px]"
        >
          Custom components
        </p>
        <p
          id="desc_example"
          class="font-medium mt-4 text-base text-[#212529] font-['Arial'] lg:w-[81%]"
        >
          Brand new components and templates to help folks quickly get started
          with Bootstrap and demonstrate best practices for adding onto the
          framework.
        </p>
      </div>
      <div
        id="example_card_container"
        class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4 xl:gap-8"
      >
        <Card :tailwind-example="fakeComponentsData" />
      </div>
    </section>
  </main>
</template>

<script setup>
import Header from "~/components/home/Header.vue";
import Card from "~/components/home/Card.vue";

const fakeComponentsData = [
  {
    id: 1,
    image: "https://getbootstrap.com/docs/4.2/assets/img/examples/album.png",
    projectName: "Album",
    descProject:
      "Simple one-page template for photo galleries, portfolios, and more.",
    to: "/album",
  },
  {
    id: 2,
    image: "https://getbootstrap.com/docs/4.2/assets/img/examples/pricing.png",
    projectName: "Pricing",
    descProject:
      "Example pricing page built with Cards and featuring a custom header and footer.",
    to: "/pricing",
  },
  {
    id: 3,
    image: "https://getbootstrap.com/docs/4.2/assets/img/examples/checkout.png",
    projectName: "Checkout",
    descProject:
      "Custom checkout form showing our form components and their validation features.",
    to: "/checkout",
  },
  {
    id: 4,
    image: "https://getbootstrap.com/docs/4.2/assets/img/examples/sign-in.png",
    projectName: "Sign-in",
    descProject: "Custom form layout and design for a simple sign in form.",
    to: "/sign-in",
  },
];
</script>
