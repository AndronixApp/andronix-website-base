<template>
  <div class="bg-background w-full bg-landing-pattern bg-top">


    <div
      class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
    >

      <Heading
        heading="The Power of Andronix"
        deco_heading="ANDRONIX PREMIUM"
        sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
      />

      <div class="-mt-6 button-1">GET NOW</div>
    </div>

    <!--  Features   -->
    <div class="mt-24 mb-24 lg:mb-48 lg:mt-48 px-12 md:p-24">
      <Heading heading="What can you do with this?"
               sub_heading="Genuine question but this cannot be answered without writing a book. There are infinite uses for Andronix. To keep it in understandable terms, you can almost do 70% of the things that you can do on an actual Linux machine."
               deco_heading="ANDRONIX"
      />
      <div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center">
          <FeatureCard v-for="features in premiumFeatures" :title="features.title"
                       :desc="features.sub_title" :color="features.color"
          >
            <div v-html="features.icon"></div>
          </FeatureCard>
        </div>
      </div>
    </div>
    <!-- Metrics -->
    <div class="mt-24 mb-24 lg:mb-48 lg:mt-48 px-12 md:p-24 lg:mx-24">
      <Heading
        heading="Modded OS Metrics"
        sub_heading="Take a look at where our Modded OS Stands."
        deco_heading="METRICS"
      />

      <div
        class="grid grid-cols-2 gap-y-12 gap-x-4 md:grid-cols-2 lg:grid-cols-4 text-white font-sans text-center justify-center"
      >
        <CounterComponent v-for="meta in metric" :value="meta.value" :heading="meta.param" :color="meta.color">
          <div v-html="meta.icon"></div>
        </CounterComponent>
      </div>
    </div>

    <!-- Testimonials   -->
    <div class="mt-24 mb-24 lg:mb-48 lg:mt-48 px-12 md:p-24">
      <Heading heading="What people say!" sub_heading="Listen to what our users say about us all around the internet."
               deco_heading="ANDRONIX"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 md:gap-8">
        <TestimonialModdedOsCard v-for="testimonial in testimonials" :name="testimonial.name"
                                 :title="testimonial.title"
                                 :quote="testimonial.quote"
        >
          <div v-html="testimonial.icon"></div>
        </TestimonialModdedOsCard>
      </div>
    </div>


  </div>
</template>

<script>
import features from '~/static/Data/features/premium-features.json'
import testimonials from '~/static/Data/testimonials/premium-testimonials.json'
import metrics from '~/static/Data/misc/premium-metric.json'

export default {
  name: 'index',
  data: function () {
    return {
      premiumFeatures: features.features,
      metric: metrics.metadata,
      testimonials: testimonials.testimonials,
    }
  }
}
</script>

<style scoped>

</style>
