<template>
  <div class="bg-background w-full bg-top">
    <div
      class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
    >
      <Heading class="px-10"
               heading="Sync Your World"
               deco_heading="ANDRONIX COMMANDS "
               sub_heading="Andronix Commands is a one-stop solution for all your Terminal needs. Save and sync commands the go, just copy and paste."
      />

      <PrimaryTextButton
        @click="$router.push('/pricing')"
        label="GET IT WITH PREMIUM"
      />
    </div>

    <!--  Features   -->
    <div class="section-gap">
      <Heading
        heading="What is Andronix Commands?"
        sub_heading="Andronix Commands is a very useful and intuitive tool developed by Andronix which cures the problem of remembering all the commands while you use a Terminal or anything. AndroNix Commands let's you sync your commands and access them from anywhere in the world on any internet connected device right in a browser, phone or just your command line."
        deco_heading="COMMANDS"
      />
      <div>
        <div
          class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-10 text-white font-sans text-center"
        >
          <FeatureCard
            v-for="features in app"
            :title="features.title"
            :desc="features.sub_title"
            :color="features.color"
            :key="features.color"
          >
            <div v-html="features.icon"></div>
          </FeatureCard>
        </div>
      </div>
    </div>

    <div class="section-gap">
      <Heading
        heading="Get your Commands."
        sub_heading="Use Andronix Commands within Andronix, use our web app or just be the terminal person you are and have it right where you're working, i.e. on your terminal application."
        deco_heading="ANDRONIX COMMANDS"
      />
      <div>
        <img
          class="mx-auto w-11/12 md:w-3/6 lg:w-1/2"
          src="~/assets/images/screenshots/andronix-commands-app-ss.png"
          alt=""
        />
      </div>
    </div>


    <div class="px-12 md:px-24 lg:mx-24 mt-24 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <a href="#"
         class="cursor-pointer rounded bg-gray-800 flex text-white px-4 py-3 space-x-5 hover:-translate-y-1.5 transform transition duration-200"
      >
        <div class="w-1/4 flex items-center justify-center">
          <svg class="w-10 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M17.523 15.341a1 1 0 010-1.999 1 1 0 010 2m-11.046 0a1 1 0 010-2 1 1 0 010 2m11.405-6.02l1.997-3.46a.416.416 0 00-.152-.567.416.416 0 00-.568.152L17.137 8.95c-1.547-.706-3.284-1.1-5.137-1.1s-3.59.394-5.137 1.1L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.567l1.997 3.46C2.688 11.186.343 14.658 0 18.76h24c-.344-4.102-2.69-7.574-6.119-9.44"
            />
          </svg>
        </div>
        <div class="w-3/4">
          <p class="font-bold text-xl">Android</p>
          <p class="text-gray-400 text-sm lg:text-base">Get your commands within Andronix App.</p>
        </div>
      </a>
      <a href="https://web.andronix.app"
         class="cursor-pointer rounded bg-gray-800 flex text-white px-4 py-3 space-x-5 hover:-translate-y-1.5 transform transition duration-200"
      >
        <div class="w-1/4 flex items-center justify-center">
          <svg class="w-10 text-blue-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
        <div class="w-3/4">
          <p class="font-bold text-xl">Web</p>
          <p class="text-gray-400 text-sm lg:text-base">On the web? Get your commands right there!</p>
        </div>
      </a>
      <a href="https://www.npmjs.com/package/andronix-command-cli"
         class="cursor-pointer rounded bg-gray-800 flex text-white px-4 py-3 space-x-5 hover:-translate-y-1.5 transform transition duration-200"
      >
        <div class="w-1/4 flex items-center justify-center">
          <svg class="w-10 text-purple-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div class="w-3/4">
          <p class="font-bold text-xl">Command Line</p>
          <p class="text-gray-400 text-sm lg:text-base">Right in your terminal app. No need to leave the terminal.</p>
        </div>
      </a>
    </div>

    <div class="section-gap">
      <Heading
        heading="How does it work?"
        sub_heading="Using Commands is as easy as it can get. You just need to enter the details and we'll handle the syncing. Everything is realtime and hence accessible on all your devices as soon as you hit enter."
        deco_heading="COMMANDS"
      />
      <div>
        <div
          class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans"
        >
          <StepsCard
            v-for="step in steps"
            :title="step.title"
            :description="step.sub_title"
            :step="step.step"
            :color="step.color"
            :key="step.color"
          >
            <div v-html="step.icon"></div>
          </StepsCard>
        </div>
      </div>
    </div>
    <div class="mt-48 -mb-40">
      <div class="bg-primary-600 bg-opacity-50 rounded-t-lg px-5 py-5">
        <div class="flex justify-between items-center">
          <div class="text-gray-200">
            <h3 class="font-extrabold text-2xl">Get Andronix Premium.</h3>
            <p class="font-medium text-gray30">
              You get some nice perks and you also help us maintain this
              project.
            </p>
          </div>
          <PrimaryTextButton
            @click="$router.push('/checkout/buy/premium')"
            label="GET NOW"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import features from '~/static/Data/features/commands-feature.json'
import steps from '~/static/Data/misc/command-steps.json'

export default {
  name: 'index',
  data: function () {
    return {
      app: features.features,
      steps: steps.steps,
    }
  },
}
</script>

<style scoped>
</style>
