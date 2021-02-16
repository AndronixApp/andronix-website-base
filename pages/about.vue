<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div>
      <div
        class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
      >
        <Heading
          class="px-10"
          heading="Who we are?"
          deco_heading="ANDRONIX"
          sub_heading="We are developers from India who like to share our knowledge and try to deliver a platform to
          mobile users to make them aware of the Linux kernel and distros, providing them a way to use desktop softwares on their Android devices.
          We are really thankful to all our users and our additional team members for supporting us and bringing us to where we are today."
        />

        <PrimaryTextButton label="TALK TO US" link="https://chat.andronix.app"/>
      </div>

      <div class="section-gap">
        <Heading
          heading="Our Story"
          deco_heading="ABOUT"
          sub_heading="It's kinda long but quite interesting. It's our story from yet another app that let's you install Linux to one of the top ones in the domain."
        />
        <p class="text-gray-300 text-center md:px-12 lg:px-24 tracking-wide leading-loose lg:leading-8 md:text-lg">
          The idea of Andronix incepted during in the year 2019 when we, Prakhar Shukla and Anurag Verma were riding
          back home from our workout. It struck to us that there are people using their phones as computers either
          because they simply cannot afford them or because it is just portable. We thought of converting that idea into
          an app which ended up us finding that there were apps already existing that just did that but the issue was
          firstly, they were just outdated and ugly to look at and secondly, if you're stuck, you're basically on your
          own.

          <br>
          <br>

          Andronix was born. We released our first version, way different from what it currently offers. The journey
          started and soon we released Andronix Premium, Andronix Commands and then the most anticipated product, the
          Andronix Modded OS. We enjoyed and learnt a lot while developing for Andronix. It basically gave us a platform
          to refine our passion for programming.

          <br>
          <br>

          To say that Andronix has changed our lives, would be an understatement because of all the love that we get,
          whether it be from the people rating us or emailing us about how much they love using Andronix to the mods
          over at Discord helping us to keep things moving around there. We are ever so much grateful for all the love
          and support we get, and it really makes us move forward with a confidence boost.
        </p>
      </div>

      <!-- Team -->
      <div class="section-gap">
        <Heading
          heading="Our Team"
          deco_heading="MEET US"
          sub_heading="Here's us. We have a specturm of poeple down here, from developers to community moderators to people who support us and much more."
        />

        <div
          class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center"
        >
          <TeamCard
            class="justify-self-center"
            :class="
              index === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
            "
            v-for="(member, index) in teams.dev"
            :name="member.name"
            :key="member.name"
            :position="member.position"
            :quote="member.quote"
            :photo_url="member.photo_url"
          />
        </div>

        <!--   Support Team     -->
        <XyzTransition :appear-visible="true" duration="auto">
          <div class="px-5 py-5 mt-16 pb-16">
            <div
              class="flex-col space-y-4"
              xyz="fade flip-down duration-10 delay-2 stagger ease-out-back"
            >
              <h2 class="heading-2 xyz-nested">Support Team</h2>
            </div>
          </div>
        </XyzTransition>
        <div
          class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-y-4 gap-x-4 justify-center items-center"
        >
          <TeamCard
            class="justify-self-center"
            v-for="member in teams.support"
            :name="member.name"
            :key="member.name"
            :position="member.position"
            :quote="member.quote"
            :photo_url="member.photo_url"
          />
        </div>

        <!-- Special mentions -->
        <XyzTransition :appear-visible="true" duration="auto">
          <div class="px-5 py-5 mt-16 pb-16">
            <div
              class="flex-col space-y-4"
              xyz="fade flip-down duration-10 delay-2 stagger ease-out-back"
            >
              <h2 class="heading-2 xyz-nested">Special Mentions</h2>
            </div>
          </div>
        </XyzTransition>
        <div
          class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center"
        >
          <TeamCard
            class="justify-self-center"
            :class="
              index === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
            "
            v-for="(member, index) in teams.specials"
            :name="member.name"
            :key="member.name"
            :position="member.position"
            :quote="member.quote"
            :photo_url="member.photo_url"
          />
        </div>
      </div>
    </div>
  </XyzTransition>
</template>

<script>
import teams from '~/static/Data/misc/teams.json'

export default {
  name: 'about.vue',
  data: function () {
    return {
      teams,
    }
  },
}
</script>

<style scoped>
</style>
