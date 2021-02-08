<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div class="bg-background w-full bg-landing-pattern bg-top">
      <div
        class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
      >

        <Heading
          heading="Take Andronix to the Next Level"
          deco_heading="MODDED OS"
          sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
        />

        <PrimaryTextButton @click="$router.push('/pricing')"
                           label="GET NOW"
        />
      </div>

      <!--  Features   -->
      <div class="mt-24 px-12 md:px-24">
        <Heading heading="What can you do with this?"
                 sub_heading="Genuine question but this cannot be answered without writing a book. There are infinite uses for Andronix. To keep it in understandable terms, you can almost do 70% of the things that you can do on an actual Linux machine."
                 deco_heading="ANDRONIX"
        />
        <div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center">
            <FeatureCard v-for="features in moddedOsFeaturesData" :title="features.title"
                         :desc="features.sub_title" :color="features.color"
            >
              <div v-html="features.icon"></div>
            </FeatureCard>
          </div>
        </div>
      </div>
      <!-- Metrics -->
      <div class="mt-24 lg:mt-48 px-12 md:px-24 lg:mx-24">
        <Heading
          heading="Modded OS Metrics"
          sub_heading="Take a look at where our Modded OS Stands."
          deco_heading="METRICS"
        />

        <div
          class="grid grid-cols-2 gap-y-12 gap-x-4 md:grid-cols-2 lg:grid-cols-4 text-white font-sans text-center justify-center"
        >
          <CounterComponent v-for="meta in metadata" :value="meta.value" :heading="meta.param" :color="meta.color">
            <div v-html="meta.icon"></div>
          </CounterComponent>
        </div>
      </div>

      <!-- Testimonials   -->
      <div class="mt-24  lg:mt-48 px-12 md:px-24">
        <Heading heading="What people say!" sub_heading="Listen to what our users say about us all around the internet."
                 deco_heading="ANDRONIX"
        />
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 md:gap-8"
        >
          <TestimonialModdedOsCard v-for="testimonial in moddedOsTestimonials" :name="testimonial.name"
                                   :title="testimonial.title"
                                   :quote="testimonial.quote"
          >
            <div v-html="testimonial.icon"></div>
          </TestimonialModdedOsCard>
        </div>
      </div>

      <!--  Previews  -->
      <div class="mt-24 lg:mt-24 px-12 md:px-24">
        <Heading
          heading="Take a look"
          sub_heading="Have a sneak peak on our Modded OS."
          deco_heading="Modded OS "
        />

        <div class="mt-10">
          <div v-for="os in moddedOsInfo" class="pb-5 md:pb-8 lg:pb-16">

            <div
              class="grid grid-col-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4 justify-center lg:justify-between pb-24 items-center"
            >

              <div class="text-white text-center lg:text-left">
                <h3 class="font-extrabold text-2xl md:text-4xl my-3" :class="`text-${os.color}`">{{ os.logo_text }}</h3>
                <h3 class="font-extrabold text-xl md:text-2xl mb-3">{{ os.name }}</h3>
                <h3 class="max-w-md mx-auto lg:mx-1">{{ os.description }}</h3>
                <ul class="text-white my-8">
                  <li v-for="feature in os.features">
                    <div class="inline-flex space-x-3 text-center">
                      <svg class="w-5 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                      >
                        <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                        />
                      </svg>
                      <p class="text-sm">{{ feature }}</p>
                    </div>
                  </li>
                </ul>
                <div class="mt-10">
                  <div @click="purchase(os.id)"
                       class="w-1/2 mx-auto lg:mx-1 cursor-pointer px-3 py-2 bg-primary-500 flex items-center space-x-5 justify-center rounded hover:bg-primary-600 hover:scale-105 transition transform duration-300"
                  >
                    <svg class="text-white fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor"
                    >
                      <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      />
                    </svg>
                    <p class="text-white font-bold">Buy
                      Now!
                    </p>
                  </div>
                </div>
              </div>
              <div class="images grid-rows-2 grid grid-cols-2 gap-4">
                <div v-for="image in imagesArray[os.id]" v-viewer class="images"
                >
                  <img class="object-cover " :src="image"
                       alt=""
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </XyzTransition>
</template>
<script>
import { firestore } from '~/plugins/firebase'
import moddedOsFeatures from '~/static/Data/features/modded-os-features.json'
import moddedOsTestimonials from '~/static/Data/testimonials/modded-os-testimonials.json'
import metadata from '~/static/Data/misc/modded-os-metric.json'
import moddedOsInfo from '~/static/Data/products/modded-os-info.json'

export default {
  async mounted () {
    await this.fetchImages()
  },
  methods: {
    purchase: function (id) {
      if (this.$store.getters['auth/isUserLoggedIn']) {
        this.$router.push(`/checkout/buy/${(id).replace('_modded', '')}`)
      } else {
        this.$router.push('/auth/login')
      }
    },
    async fetchImages () {
      try {
        let res = await this.$axios.get('/gen/modded-images')
        let imagesObj = res.data

        for (let osImageId in imagesObj) {
          if (imagesObj.hasOwnProperty(osImageId)) {
            this.$set(this.imagesArray, osImageId, imagesObj[osImageId])
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  data: () => {
    return {
      moddedOsInfo: moddedOsInfo.info,
      moddedOsFeaturesData: moddedOsFeatures.features,
      moddedOsTestimonials: moddedOsTestimonials.testimonials,
      imagesArray: {},
      metadata: metadata.metadata
    }
  },
  watch: {
    imagesArray: {
      handler (val) {
        console.log(val)
      }
      ,
      deep: true
    }
    ,
    name: 'index',
  }
}
</script>

<style scoped>

</style>
