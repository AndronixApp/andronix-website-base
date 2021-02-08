<template>
  <div class="bg-background w-full bg-top">
    <div
      class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
    >

      <Heading
        heading="Sync Your World"
        deco_heading="ANDRONIX COMMANDS "
        sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
      />

      <PrimaryTextButton @click="$router.push('/pricing')"
                         label="GET IT WITH PREMIUM"
      />
    </div>

    <!--  Features   -->
    <div class="section-gap">
      <Heading heading="Get your Commands."
               sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores illo in ipsa laudantium nihil placeat praesentium reiciendis sapiente voluptatum."
               deco_heading="COMMANDS"
      />
      <div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-10 text-white font-sans text-center">
          <FeatureCard v-for="features in app" :title="features.title"
                       :desc="features.sub_title" :color="features.color"
          >
            <div v-html="features.icon"></div>
          </FeatureCard>
        </div>
      </div>
    </div>

    <div class="section-gap">
      <Heading heading="Get your Commands."
               sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores illo in ipsa laudantium nihil placeat praesentium reiciendis sapiente voluptatum."
               deco_heading="COMMANDS"
      />
      <div>
        <img class="mx-auto w-11/12 md:w-3/6 lg:w-1/2" src="~/assets/images/screenshots/andronix-commands-app-ss.png"
             alt=""
        >
      </div>
    </div>

    <div class="section-gap">
      <Heading heading="How does it work?"
               sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores illo in ipsa laudantium nihil placeat praesentium reiciendis sapiente voluptatum."
               deco_heading="COMMANDS"
      />
      <div>
        <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans">
          <StepsCard v-for="step in steps" :title="step.title"
                     :description="step.sub_title" :step="step.step" :color="step.color"
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
            <p class="font-medium text-gray30">You get some nice perks and you also help us maintain this project.</p>
          </div>
          <PrimaryTextButton @click="$router.push('/checkout/buy/premium')" label="GET NOW"/>
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
      steps: steps.steps
    }
  }
}
</script>

<style scoped>

</style>
