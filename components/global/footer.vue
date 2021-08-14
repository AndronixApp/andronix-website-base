<template>
  <div class="bg-gray-800 px-12 md:px-16 lg:px-24 pb-12 pt-16 mt-40">
    <div
      class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-20 gap-y-16 max-w-screen-xl justify-center mx-0"
    >

      <!--  Info and socials    -->
      <div class="">
        <h3 class="text-2xl md:text-3xl text-white font-bold text-center md:text-left">Let's make the world
          more open and free to
          use.</h3>
        <div
          class="pt-10 grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-8 justify-center items-center text-center md:text-left"
        >
          <div class=" flex-col space-y-2"
          >
            <p class="font-bold text-sm uppercase text-gray-400 pb-2">Want to talk?</p>
            <a target="_blank" href="https://chat.andronix.app"
               class="underline text-gray-200 hover:text-purple-300 transition duration-200 cursor-pointer"
            >Discord</a>
          </div>
          <div class="flex-col space-y-2">
            <p class="font-bold text-sm uppercase text-gray-400">Source code?</p>
            <a target="_blank" href="https://git.andronix.app"
               class="underline text-gray-200 hover:text-blue-300 transition duration-200 cursor-pointer"
            >Github</a>
          </div>
          <div class="flex-col space-y-2 col-span-2">
            <p class="pb-2 font-bold text-sm uppercase text-center md:text-left text-gray-400">Reach out to us</p>
            <div class="flex space-x-5 justify-self-center justify-center items-center md:justify-start">
              <a target="_blank" href="https://git.andronix.app">
                <svg
                  class="w-5 fill-current text-gray-400 transform transition hover:text-black duration-200 hover:scale-110"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <a target="_blank" href="https://patreon.com/andronixapp">
                <svg
                  class="w-5 fill-current text-gray-400 transform transition hover:text-red-600 duration-200 hover:scale-110"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z"
                  />
                </svg>
              </a>
              <a target="_blank" href="https://forum.andronix.app">
                <svg
                  class="w-5 fill-current text-gray-400  transform transition hover:text-yellow-500 duration-200 hover:scale-110"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563c-2.593-.003-4.996 1.352-6.337 3.57-1.33 2.208-1.387 4.957-.148 7.22L4.4 19.61l4.794-1.074c2.745 1.225 5.965.676 8.136-1.39 2.17-2.054 2.86-5.228 1.737-7.997-1.135-2.778-3.84-4.59-6.84-4.585h-.008z"
                  />
                </svg>
              </a>
              <a target="_blank" href="https://chat.andronix.app">
                <svg
                  class="w-5 fill-current text-gray-400 transform transition hover:text-purple-500 duration-200 hover:scale-110"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-6">

        </div>
      </div>

      <hr class="border-dashed border-t-1 mr-3 my-4 border-opacity-70 border-gray-500 md:hidden">

      <!--  Menu    -->

      <div class="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-1 md:gap-x-10 items-baseline justify-center lg:mt-8">
        <!--   Policies     -->
        <div class="text-gray-400 text-sm text-center">
          <h3 class="font-bold text-lg text-gray-300">Policies</h3>
          <ul class="flex-col space-y-2 pt-3 ">
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/legal/refund-policy">
              Refund Policy
            </NuxtLink>
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline"
                      to="/legal/terms-conditions"
            >T&C
            </NuxtLink>
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/legal/privacy-policy">
              Privacy policy
            </NuxtLink>
          </ul>
        </div>
        <!--   Products     -->
        <div
          class="text-gray-400 text-sm text-center col-span-2  md:col-span-1 justify-self-center mx-auto md:order-1 order-2"
        >
          <h3
            class="font-bold text-lg text-gray-300 "
          >
            Products</h3>
          <ul class="flex-col space-y-2 pt-3 ">
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/products/modded-os">
              Modded OS
            </NuxtLink>
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/products/premium">
              Premium
            </NuxtLink>
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/products/commands">
              Commands
            </NuxtLink>
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/pricing">Pricing
            </NuxtLink>
            <li>
              <a class="block hover:text-white duration-200 transition hover:underline"
                 target="_blank" href="https://docs.andronix.app"
              >Documentation
              </a>
            </li>
          </ul>
        </div>
        <!--   Policies     -->
        <div class="text-gray-400 text-sm text-center md:order-2 order-1">
          <h3 class="font-bold text-lg text-gray-300">Know us</h3>
          <ul class="flex-col space-y-2 pt-3 ">
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/help">Help
            </NuxtLink>
            <NuxtLink class="block hover:text-white duration-200 transition hover:underline" to="/about">About us
            </NuxtLink>
            <li>
              <a
                class="block hover:text-white duration-200 transition hover:underline"
                target="_blank" href="https://translate.andronix.app"
              >Translate
              </a>
            </li>
            <li>
              <a
                class="block hover:text-white duration-200 transition hover:underline"
                target="_blank" href="https://status.andronix.app"
              >Services Status
              </a>
            </li>
          </ul>
        </div>
      </div>


      <hr class="border-dashed border-t-1 mr-3 my-4 border-opacity-70 border-gray-600 md:hidden">
      <!--  Copyright and stuff    -->
      <div class="text-white text-center lg:justify-self-end lg:mt-8"
      >
        <!--        <h3 class="font-extrabold text-3xl pb-8">andronix<strong class="text-primary-400">.app</strong></h3>-->
        <img
          class="mx-auto w-48 lg:w-56 -m-3"
          src="~assets/images/logo_new_semi_fhd_dark.png"
          alt=""
        />
        <a href="https://devriz.com" target="_blank"
           class="text-gray-400  text-sm">A
          product of
          <strong class="underline cursor-pointer text-gray-200">Devriz Technologies
            LLP</strong></a>
        <p class="text-gray-400 text-sm">©{{ getCurrentYear() }} All rights reserved.</p>
        <p class="mt-3 text-xs text-gray-400 w-10/12 text-center mx-auto">
          Made with <a target="_blank" href="https://tailwindcss.com" class="underline font-bold text-gray-400"
        >Tailwind</a>, <a href="https://nuxtjs.org" class="underline font-bold text-gray-400"
        >NuxtJS</a>.
        </p>


        <!-- Status   -->
        <a target="_blank" href="https://status.andronix.app"
           class="mt-4 transition transform hover:-translate-y-0.5 duration-200  cursor-pointer underline font-bold text-gray-200 flex justify-center items-center space-x-3">
          <p>Services Status</p>
          <div>
            <p class="w-3 h-3 rounded-full bg-green-400 animate-ping"></p>
            <p class="w-3 h-3 -mt-3 absolute z-10 rounded-full bg-green-400"></p>
          </div>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
