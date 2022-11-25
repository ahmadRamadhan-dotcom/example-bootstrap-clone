<template>
  <section
    class="mt-10 md:mt-24 w-11/12 md:w-10/12 lg:w-[550px] xl:w-[600px] mx-auto"
  >
    <p class="text-[40px] text-center text-[#212529] font-[300] font-['Arial']">
      Album example
    </p>
    <p
      class="mt-3 text-xl text-center text-[#6c757d] font-['Arial'] font-[300]"
    >
      Something short and leading about the collection below—its contents, the
      creator, etc. Make it short and sweet, but not too short so folks don’t
      simply skip over it entirely.
    </p>
    <div class="flex flex-wrap justify-center gap-2">
      <button
        id="btn_primary"
        type="button"
        class="bg-[#007bff] px-3 md:px-4 py-1.5 text-center text-base rounded-md mt-4 border text-[#fff]"
      >
        Main call to action
      </button>
      <button
        id="btn_secondary"
        type="button"
        class="bg-[#6c757d] px-2 md:px-4 py-1.5 text-center text-base rounded-md mt-4 border text-[#fff]"
      >
        Secondary action
      </button>
    </div>
  </section>
</template>

<style scoped>
#btn_primary {
  border-color: #007bff;
}

#btn_secondary {
  border-color: #6c757d;
}
</style>
