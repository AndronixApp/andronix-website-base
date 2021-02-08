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

      <PrimaryTextButton @click="$router.push('/pricing')"
                         label="GET NOW"
      />
    </div>

    <!--  Features   -->
    <div class="mt-24 px-12 md:px-24">
      <Heading heading="What can you do with this?"
               sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores delectus ducimus, eum explicabo, hic ipsa maiores necessitatibus nostrum pariatur placeat praesentium quia quidem ratione repudiandae sint sit, ut voluptas?"
               deco_heading="ANDRONIX"
      />
      <div>
        <div
          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center items-center"
        >
          <FeatureCard v-for="features in premiumFeatures" :title="features.title"
                       :desc="features.sub_title" :color="features.color"
          >
            <div v-html="features.icon"></div>
          </FeatureCard>
        </div>
      </div>
      <p class="text-gray-400 text-xs mt-6 text-center">** Modded Discounts are only available via in-app purchases as
        of now. The
        eligibility of the discount can vary due to the differences in taxes across the globe.</p>
    </div>


    <!-- Metrics -->
    <div class="section-gap">
      <Heading
        heading="Premium Metrics"
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

    <div class="section-gap">
      <Heading
        heading="Andronix Commands"
        sub_heading="Manage all your terminal commands and more from around the world. Andronix Commands comes bundled with Andronix Premium."
        deco_heading="COMMANDS"
      />

      <div>
        <img class="mx-auto w-11/12 md:w-3/6 lg:w-1/2" src="~/assets/images/screenshots/andronix-commands-app-ss.png"
             alt=""
        >
      </div>

      <PrimaryTextButton class="w-1/2 lg:w-1/4 mx-auto pt-24" @click="$router.push('/products/commands')"
                         label="Know More!"
      />
    </div>

    <!-- Testimonials   -->
    <div class="section-gap">
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
