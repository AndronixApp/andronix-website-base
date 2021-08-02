<template>
  <div
    class="flex-col bg-background w-full justify-center items-center"
  >
    <landing/>
    <div
      class=" bg-no-repeat top-section"
    >
      <Heading heading="What do you get?"
               sub_heading="Get a wide selection of almost all the major distributions, desktop environments and window managers."
               deco_heading="ANDRONIX"
      />
      <div class="mx-auto mx-20 md:mx-32 lg:mx-44">
        <distro-logo-grid class="top-inner-section"/>
        <de-logo-grid class="top-inner-section"/>
        <wm-logo-grid class="top-inner-section"/>
      </div>
    </div>

    <div class="flex-col bg-no-repeat mx-10 md:mx-20">
      <div class="top-section">
        <Heading heading="It's easy..."
                 sub_heading="Just a few steps to your favourite distributions. Easy to follow with an intuitive UI."
                 deco_heading="ANDRONIX"
        />

        <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans">
          <steps-card v-for="step in andronixSteps" :title="step.title" :key="step.color"
                     :description="step.sub_title" :step="step.step" :color="step.color"
          >
            <div v-html="step.icon"></div>
          </steps-card>
        </div>
      </div>
    </div>

    <div class="flex-col bg-no-repeat mx-10 md:mx-20">
      <!-- Features   -->
      <div class="top-section">
        <Heading heading="What can I do with Andronix?"
                 sub_heading="Genuine question, but this cannot be answered without writing a book. There are infinite uses for Andronix. To keep it in understandable terms, you can almost do 70% of what you can do on an actual Linux machine."
                 deco_heading="ANDRONIX"
        />
        <div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center">
            <feature-card v-for="features in andronixFeatures" :title="features.title"
                         :desc="features.sub_title" :color="features.color" :key="features.color"
            >
              <div v-html="features.icon"></div>
            </feature-card>
          </div>
        </div>
      </div>
    </div>


    <div class="flex-col bg-no-repeat mx-10 md:mx-20">
      <!-- Features   -->
      <div class="top-section">
        <Heading heading="What people say!"
                 sub_heading="Listen to what our users say about us all around the internet."
                 deco_heading="TESTIMONIALS"
        />
        <div>
          <div class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center">
            <testimonial-card v-for="testimonial in mainTestimonials"
                             :tilt="testimonial.tilt"
                             :quote="testimonial.quote"
                             :name="testimonial.name"
                             :key="testimonial.name"
                             :platform="testimonial.platform"
                             :bg_gradient="testimonial.bg_gradient"

            >
              <div v-html="testimonial.icon"></div>
            </testimonial-card>
          </div>
        </div>
      </div>
    </div>


    <div class="flex-col bg-no-repeat mx-10 md:mx-20">
      <!-- Features   -->
      <div class="top-section">
        <heading heading="Our Products"
                 sub_heading="Here's what we offer..."
                 deco_heading="PRODUCTS"
        />
        <div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 mt-10 text-white font-sans text-center mx-auto lg:max-w-screen-lg"
          >
            <product-component v-for="(product, index) in products"
                              :class="get_bg_color_product_cards(index)"
                              :index="index"
                              :isPaid="product.isPaid"
                              :description="product.description"
                              :product="product.product"
                              :key="product.product"
                              :link="product.link"
            >
            </product-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import andronixFeatures from '../static/data/features/andronix-features.json'
import products from '../static/data/misc/products.json'
import mainTestimonials from '../static/data/testimonials/main-testimonials.json'
import andronixSteps from '../static/data/misc/andronix-steps.json'
import TestimonialCard from "~/components/testimonial/testimonialCard";
import Heading from "~/components/global/heading";
import ProductComponent from "~/components/landing/productComponent";
import FeatureCard from "~/components/landing/featureCard";
import StepsCard from "~/components/steps/stepsCard";
import DistroLogoGrid from "~/components/landing/distroLogoGrid";
import DeLogoGrid from "~/components/landing/deLogoGrid";
import WmLogoGrid from "~/components/landing/wmLogoGrid";
import Landing from "~/components/landing";

export default {
  components: {
    Landing,
    WmLogoGrid,
    DeLogoGrid, DistroLogoGrid, StepsCard, FeatureCard, ProductComponent, Heading, TestimonialCard},
  methods: {
    get_bg_color_product_cards (index) {
      return index / 3 === 0 || index / 3 === 1 ? 'md:bg-gray-800 bg-gray-800' : 'bg-gray-800 md:bg-gray-700'
    }
  },
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
      products: products.products,
      mainTestimonials: mainTestimonials.testimonials,
      andronixSteps: andronixSteps.steps,
    }
  }
}

</script>

<style>
*,
html {
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
}

body {
  background-color: #0f1535;
  max-width: 100%;
  overflow-x: hidden;
  height: auto;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

.section {
  @apply mt-48 md:mt-64 lg:mt-80 px-16 md:px-24 md:px-48
}

.top-section {
  @apply mt-32 md:mt-44
}

.top-inner-section {
  @apply mt-12 md:mt-24 mx-10
}


/* Typography */


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
