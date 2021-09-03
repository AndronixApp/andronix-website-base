<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div>
      <div
        class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
      >
        <Heading
          class="px-10"
          heading="Connect with us!"
          deco_heading="ANDRONIX"
          sub_heading="Facing any issues? We are here to help you with all your queries and issues."
        />
      </div>
      <div class="grid px-12 md:px-24 grid-cols-1 md:grid-cols-2 pb-16 md:pb-24 lg:grid-cols-4 justify-center items-center gap-5">
        <cta-card
          v-for="platform in contact" :key="platform.color"
          :title="platform.param"
          :buttonColor="platform.color"
          :buttonLink="platform.link"
          :desc="platform.value"
          :color="platform.color"
          :button-text="platform.ctaText"
        >
          <div v-html="platform.icon"></div>
        </cta-card>
      </div>
    </div>
  </XyzTransition>
</template>

<script>
import contact from "../static/data/misc/contact.json"
import CtaCard from "~/components/base/ctaCard";

export default {
  name: "contact",
  components: {CtaCard},
  data: function () {
    return {
      contact: contact.platforms
    }
  }
}
</script>

<style scoped>

</style>
