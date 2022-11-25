<template>
  <main class="flex justify-center bg-[#f5f5f5] h-screen">
    <section class="grid place-content-center place-items-center sm:mt-14">
      <img
        src="https://getbootstrap.com/docs/4.2/assets/brand/bootstrap-solid.svg"
        alt="bootstrap_logo"
        class="w-[70px]"
      />
      <form class="mt-8 w-[300px]">
        <p class="font-normal text-[#212529] text-[28px] text-center">
          Please sign in
        </p>
        <input
          type="email"
          required
          placeholder="Email address"
          class="w-full border py-2 p-3 mt-3 text-[#495057] bg-[#fff] border-[#ced4da] transition duration-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="password"
          required
          placeholder="Password"
          class="w-full border py-2 mt-1 p-3 text-[#495057] bg-[#fff] border-[#ced4da] transition duration-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <div class="flex items-center justify-center gap-2 mt-5">
          <input type="checkbox" />
          <p class="font-normal text-[#212529] text-base">Remember me</p>
        </div>
        <button
          type="button"
          class="border border-[#007bff] rounded-md mt-4 bg-[#007bff] text-[#fff] w-full text-center text-xl py-2"
        >
          Sign in
        </button>
      </form>
      <footer class="mt-14 mb-10">
        <p class="text-base font-normal text-[#6c757d]">© 2017-2018</p>
      </footer>
    </section>
  </main>
</template>
