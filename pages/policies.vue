<template>
  <div>
    <!-- Testimonials   -->
    <div class="mt-24 px-12 md:px-24 pb-28 bg-no-repeat">
      <heading
        class="px-10"
        heading="Policies & Terms"
        sub_heading="Explore our policies about Andronix."
        deco_heading="ANDRONIX"
      />

      <div

        class="grid grid-cols-1 md:max-w-md lg:grid-cols-3 gap-x-8 gap-y-3 lg:max-w-screen-xl mx-auto"
      >


        <cta-card
          title="Privacy Policy"
          buttonColor="bg-green-400"
          button-internal-link="/legal/privacy-policy"
          desc="Know how we handle your data here at Andronix."
          color="bg-green-400"
          button-text="Explore"
        >
          <svg
            class="w-10 text-green-400 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </cta-card>

        <cta-card
          title="Terms"
          buttonColor="bg-blue-400"
          button-internal-link="/legal/terms-conditions"
          desc="Know the terms you accept when you sign up."
          color="bg-blue-400"
          button-text="Explore"
        >
          <svg
            class="w-10 text-blue-400 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >

            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
          </svg>
        </cta-card>

        <cta-card
          title="Refund"
          buttonColor="bg-primary-400"
          button-internal-link="/legal/refund-policy"
          desc="Know when you're eligible for a refund."
          color="bg-primary-400"
          button-text="Explore"
        >
          <svg
            class="w-10 text-primary-400 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>

          </svg>
        </cta-card>
      </div>
    </div>
  </div>
</template>

<script>
import CtaCard from "~/components/base/ctaCard";

export default {
  name: "policies",
  components: {CtaCard}
}
</script>

<style scoped>

</style>
