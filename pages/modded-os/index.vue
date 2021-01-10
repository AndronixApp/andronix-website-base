<template>
  <div class="bg-background w-full bg-landing-pattern bg-top">


    <div class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col">

      <Heading
        heading="Take Andronix to the Next Level"
        deco_heading="MODDED OS"
        sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
      />

      <div class="-mt-6 rounded px-8 py-3 bg-primary-500 text-white font-extrabold text-lg">GET NOW</div>
    </div>

    <!--  Features   -->
    <div class="mt-24 mb-24 lg:mb-48 lg:mt-48 px-12 md:p-24">
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
    <div class="mt-24 mb-24 lg:mb-48 lg:mt-48 px-12 md:p-24 lg:mx-24">
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
    <div class="mt-24 mb-24 lg:mb-48 lg:mt-48 px-12 md:p-24">
      <Heading heading="What people say!" sub_heading="Listen to what our users say about us all around the internet."
               deco_heading="ANDRONIX"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 md:gap-8">
        <TestimonialModdedOsCard :name="moddedOsTestimonials[0].name" :title="moddedOsTestimonials[0].title"
                                 :quote="moddedOsTestimonials[0].quote"
        >
          <svg class="w-5 text-white opacity-40 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </TestimonialModdedOsCard>
        <TestimonialModdedOsCard :name="moddedOsTestimonials[1].name" :title="moddedOsTestimonials[1].title"
                                 :quote="moddedOsTestimonials[1].quote"
        >
          <svg class="w-5 text-white opacity-40 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </TestimonialModdedOsCard>
        <TestimonialModdedOsCard :name="moddedOsTestimonials[2].name" :title="moddedOsTestimonials[2].title"
                                 :quote="moddedOsTestimonials[2].quote"
        >
          <svg class="w-5 text-white opacity-40 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </TestimonialModdedOsCard>
        <TestimonialModdedOsCard :name="moddedOsTestimonials[3].name" :title="moddedOsTestimonials[3].title"
                                 :quote="moddedOsTestimonials[3].quote"
        >
          <svg class="w-5 text-white opacity-40 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </TestimonialModdedOsCard>
      </div>
    </div>

    <!--  Previews  -->
    <div class="mt-24 lg:mt-48 px-12 md:p-24">
      <Heading
        heading="Take a look"
        sub_heading="Have a sneak peak on our Modded OS."
        deco_heading="Modded OS "
      />

      <div class="space-x-8 space-y-20 md:space-y-24">
        <div>
          <div class="mb-8 md:mb-12">
            <h2
              class="font-extrabold text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl"
            >Ubuntu XFCE</h2>
            <h2 class="font-medium text-base text-center  mt-4 text-gray-400 space">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aperiam aut, nam. Ipsam placeat qui repellendus?</h2>
          </div>

          <div
            class="flex-col text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl space-y-3
 bg-card_background p-8 rounded-lg border-dotted border-4 border-primary"
          >
            <div class="images grid grid-cols-1 md:grid-cols-2 gap-8 justify-around items-center"
                 v-viewer="{movable: false}"
            >
              <div class="w-full rounded-lg justify-self-stretch" v-for="url in imagesArray[this.UBUNTU_XFCE]">
                <img class="object-cover " :src="url"
                     alt=""
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-8 md:mb-12">
            <h2
              class="font-extrabold text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl"
            >Debian XFCE</h2>
            <h2 class="font-medium text-base text-center  mt-4 text-gray-400 space">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aperiam aut, nam. Ipsam placeat qui repellendus?</h2>
          </div>

          <div
            class="flex-col text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl space-y-3
 bg-card_background p-8 rounded-lg border-dotted border-4 border-pink-800"
          >
            <div class="images grid grid-cols-1 md:grid-cols-2 gap-8 justify-around items-center"
                 v-viewer="{movable: false}"
            >
              <div class="w-full rounded-lg justify-self-stretch" v-for="url in imagesArray[this.DEBIAN_XFCE]">
                <img class="object-cover " :src="url"
                     alt=""
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-8 md:mb-12">
            <h2
              class="font-extrabold text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl"
            >Manjaro XFCE</h2>
            <h2 class="font-medium text-base text-center  mt-4 text-gray-400 space">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aperiam aut, nam. Ipsam placeat qui repellendus?</h2>
          </div>

          <div
            class="flex-col text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl space-y-3
 bg-card_background p-8 rounded-lg border-dotted border-4 border-green-600"
          >
            <div class="images grid grid-cols-1 md:grid-cols-2 gap-8 justify-around items-center"
                 v-viewer="{movable: false}"
            >
              <div class="w-full rounded-lg justify-self-stretch" v-for="url in imagesArray[this.MANJARO_XFCE]">
                <img class="object-cover " :src="url"
                     alt=""
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-8 md:mb-12">
            <h2
              class="font-extrabold text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl"
            >Ubuntu KDE</h2>
            <h2 class="font-medium text-base text-center  mt-4 text-gray-400 space">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aperiam aut, nam. Ipsam placeat qui repellendus?</h2>
          </div>

          <div
            class="flex-col text-white font-sans text-center text-xl sm:text-2xl lg:text-3xl space-y-3
 bg-card_background p-8 rounded-lg border-dotted border-4 border-blue-600"
          >
            <div class="images grid grid-cols-1 md:grid-cols-2 gap-8 justify-around items-center"
                 v-viewer="{movable: false}"
            >
              <div class="w-full rounded-lg justify-self-stretch" v-for="url in imagesArray[this.UBUNTU_KDE]">
                <img class="object-cover " :src="url"
                     alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import moddedOsFeatures from 'static/Data/features/modded-os-features.json'
import moddedOsTestimonials from '../../static/Data/testimonials/modded-os-testimonials.json'

const UBUNTU_XFCE_DOC = 'ubuntu_xfce_modded'
const DEBIAN_XFCE_DOC = 'debian_xfce_modded'
const UBUNTU_KDE_DOC = 'ubuntu_kde_modded'
const MANJARO_XFCE_DOC = 'manjaro_xfce_modded'

import metadata from '../../static/Data/misc/app-performance-metadata.json'

export default {
  created () {
    this.UBUNTU_XFCE = UBUNTU_XFCE_DOC
    this.DEBIAN_XFCE = DEBIAN_XFCE_DOC
    this.MANJARO_XFCE = MANJARO_XFCE_DOC
    this.UBUNTU_KDE = UBUNTU_KDE_DOC
  },
  mounted () {
    this.$fetch()
  },
  fetch () {
    let refArray = [UBUNTU_XFCE_DOC, MANJARO_XFCE_DOC, UBUNTU_KDE_DOC, DEBIAN_XFCE_DOC]

    for (let i = 0; i < refArray.length; ++i) {
      let ref = refArray[i]
      this.$fire.firestore.collection('osImages')
        .doc(ref)
        .get().then((doc) => {
        if (doc.exists) {
          this.$set(this.imagesArray, ref, doc.data().images)
        } else {
          console.log(`NOT_FOUND ${ref}`)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  data: () => {
    return {
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
      },
      deep: true
    },
    name: 'index',
  }
}
</script>

<style scoped>

</style>
