<template>
  <main
    class="grid place-content-center place-item-center w-11/12 xl:w-[1110px] mx-auto mt-3 md:mt-10"
  >
    <div
      class="text-center grid place-content-center place-item-center xl:w-[700px] mx-auto"
    >
      <span
        class="text-[49px] lg:text-[56px] font-[300] font-['Arial'] text-[#212529]"
        >Pricing
      </span>
      <p class="font-['300'] text-xl text-[#212529]">
        Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It’s built with default Bootstrap
        components and utilities with little customization.
      </p>
    </div>
    <div
      class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:gap-8 mt-12 xl:w-[940px]"
    >
      <Card :pricing-data="pricingData" />
    </div>
  </main>
</template>

<script setup>
import Card from "~/components/pricing/Card.vue";
const pricingData = [
  {
    id: 1,
    plan: "Free",
    price: 0,
    details: [
      {
        id: 1,
        item: "10 users included",
      },
      {
        id: 2,
        item: "2 GB of storage",
      },
      {
        id: 3,
        item: "Email support",
      },
      {
        id: 4,
        item: "Help center access",
      },
    ],
    action: "Sign up for free",
  },
  {
    id: 2,
    plan: "Pro",
    price: 15,
    details: [
      {
        id: 1,
        item: "20 users included",
      },
      {
        id: 2,
        item: "10 GB of storage",
      },
      {
        id: 3,
        item: "Priority email support",
      },
      {
        id: 4,
        item: "Help center access",
      },
    ],
    action: "Get started",
  },
  {
    id: 3,
    plan: "Enterprise",
    price: 29,
    details: [
      {
        id: 1,
        item: "30 users included",
      },
      {
        id: 2,
        item: "15 GB of storage",
      },
      {
        id: 3,
        item: "Phone and email support",
      },
      {
        id: 4,
        item: "Help center access",
      },
    ],
    action: "Contact us",
  },
];
</script>
