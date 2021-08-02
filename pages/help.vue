<template>
  <div>
    <!-- Testimonials   -->
    <div class="mt-24 px-12 md:px-24 pb-28 bg-no-repeat">
      <heading
        class="px-10"
        heading="Get Help Fast!"
        sub_heading="We are here to help you through our community channels. Please stay patient while waiting for an answer and read the respective rules of the platform."
        deco_heading="ANDRONIX"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 lg:max-w-screen-xl mx-auto"
      >
        <cta-card
          title="Discord"
          buttonColor="bg-purple-400"
          buttonLink="https://chat.andronix.app"
          desc="Join a community of over 5500+ Andronix users on Discord."
          color="bg-purple-400"
        >
          <svg
            class="w-10 text-purple-400 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </cta-card>

        <cta-card
          title="Andronix Forum"
          buttonColor="bg-blue-400"
          buttonLink="https://forum.andronix.app"
          desc="Join or search through the forum for the most common questions."
          color="bg-blue-400"
        >
          <svg
            class="w-10 text-blue-400 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </cta-card>
      </div>
    </div>
  </div>
</template>

<script>
import meta from '~/static/seo/meta-head.json'
import Heading from "~/components/global/heading";
import CtaCard from "~/components/base/ctaCard";

export default {
  components: {CtaCard, Heading},
  head () {
    return {
      title: meta.help.title,
      meta: [{
        hid: meta.help.hid,
        name: meta.help.name,
        content: meta.help.content
      }]
    }
  },
  name: "help",
};
</script>

<style scoped>
</style>
