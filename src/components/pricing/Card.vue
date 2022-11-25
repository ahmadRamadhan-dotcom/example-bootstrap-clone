<template>
  <article
    v-for="(data, index) in pricingData"
    :key="index"
    id="card_container"
    :class="index == 2 ? 'sm:col-span-2 md:col-span-1' : ''"
    class="shadow-sm rounded-sm h-[20.8em]"
  >
    <div
      id="plan"
      class="h-[3.5em] grid place-content-center place-items-center"
    >
      <span
        class="font-normal text-[#212529] text-[21px] md:text-2xl text-center"
        >{{ data.plan }}</span
      >
    </div>
    <div id="card_content" class="mt-5">
      <p
        id="price"
        class="text-center font-medium text-[#212529] text-[35px] md:text-[40px]"
      >
        ${{ data.price }}
        <span class="font-normal text-[#6c757d] text-[32px]"> / mo</span>
      </p>
      <p
        v-for="(item, index) in data.details"
        id="detail"
        :key="index"
        :class="index == 0 ? 'mt-5' : ''"
        class="text-[#212529] text-base text-center font-normal"
      >
        {{ item.item }}
      </p>
    </div>
    <div class="mt-4 flex justify-center">
      <button
        :class="
          data.price != 0
            ? 'bg-[#007bff] text-white'
            : 'text-[#007bff] hover:text-white'
        "
        class="text-xl hover:bg-[#007bff] transition duration-400 font-normal w-10/12 py-1.5 rounded-sm text-center border border-[#007bff]"
        type="button"
        id="button_action"
      >
        {{ data.action }}
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  pricingData: Array,
});
</script>

<style scoped>
#plan {
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

#card_container {
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
