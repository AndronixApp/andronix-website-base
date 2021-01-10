<template>
  <div
    class="flex-col bg-background mx-auto justify-center items-center"
  >
    <Landing class="m-0"/>
    <Testimonials class="top-section"/>
    <div
      class="bg-rect-pattern bg-no-repeat top-section"
    >
      <Heading heading="What do you get?"
               sub_heading="Get a wide selection of almost all the major distributions, desktop environments and window managers."
               deco_heading="ANDRONIX"
      />
      <div class="mx-auto mx-20 md:mx-40 lg:mx-44">
        <DistroLogoGrid class="top-inner-section"/>
        <DeLogoGrid class="top-inner-section"/>
        <WmLogoGrid class="top-inner-section"/>
      </div>
    </div>


    <div class="flex-col bg-circle-pattern bg-no-repeat mx-10 md:mx-20">
      <!-- Features   -->
      <div class="top-section">
        <Heading heading="What can you do with this?"
                 sub_heading="Guinean question but this cannot be answered without writing a book. There are infinite uses for Andronix. To keep it in understandable terms, you can almost do 70% of the things that you can do on an actual Linux machine."
                 deco_heading="ANDRONIX"
        />
        <div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center">
            <FeatureCard v-for="features in andronixFeatures" :title="features.title"
                         :desc="features.sub_title" :color="features.color"
            >
              <div v-html="features.icon"></div>
            </FeatureCard>
          </div>
        </div>
      </div>

      <div class="top-section">
        <Heading heading="It's easy..."
                 sub_heading="Just a few steps to your favourite distributions. Easy to follow with an intuitive UI."
                 deco_heading="ANDRONIX"
        />

        <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans">
          <StepsCard v-for="step in andronixSteps" :title="step.title"
                     :description="step.sub_title" :step="step.step" :color="step.color"
          >
            <div v-html="step.icon"></div>
          </StepsCard>
        </div>
      </div>
      <Pricing class="top-section"/>
    </div>
  </div>
</template>
<script>

import andronixFeatures from '../static/Data/features/andronix-features.json'
import andronixSteps from '../static/Data/misc/andronix-steps.json'

export default {
  watch: {
    isDrawerOpen: {
      immediate: true,
      handler (isDrawerOpen) {
        if (process.client) {
          if (isDrawerOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  },
  data: function () {
    return {
      andronixFeatures: andronixFeatures.features,
      andronixSteps: andronixSteps.steps,
    }
  }
}

</script>

<style>
*,
html,
body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

body {
  background-color: #0f1535;
  width: 100%;
  height: auto;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

.section {
  @apply mt-48 md:mt-64 lg:mt-80 px-16 md:px-24 md:px-48
}

.top-section {
  @apply mt-32 md:mt-44 lg:mt-56
}

.top-inner-section {
  @apply mt-12 md:mt-24 lg:mt-36 mx-10
}

.gray {
  filter: grayscale(0) contrast(40%);
}

.cont {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
