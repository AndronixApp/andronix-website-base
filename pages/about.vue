<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div>
      <div
        class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
      >
        <Heading
          heading="Who we are?"
          deco_heading="ANDRONIX"
          sub_heading="We are developers from India who like to share our knowledge and try to deliver a platform to
          mobile users to make them aware of the Linux kernel and distros, providing them a way to use desktop softwares on their Android devices.
          We are really thankful to all our users and our additional team members for supporting us and bringing us to where we are today."
        />
      </div>

      <div class="section-gap">
        <Heading
          heading="Our Story"
          deco_heading="ABOUT"
          sub_heading="It's kinda long but quite interesting. It's our story from yet another app that let's you install Linux to one of the top ones in the domain."
        />
        <p class="text-gray-300 text-center md:px-12 lg:px-24 tracking-normal">
          Andronix started as an idea of providing a simple script which lets
          the user download and install a basic Linux filesystem on a non-rooted
          Android device. As days passed we soon realized that the apps already
          out were out of developement phase and people wanted something new
          with more up-to-date features and a support platform where they can
          raise their queries.

          <br /><br />
          We also implemented Andronix Commands with an in-depth support for
          using that offline, caching and everything handled by the app at real
          time.
          <br /><br />
          This app was the idea of <b>Anurag Verma</b> who had a vision to
          provide people without computer, the power of Linux on thier Android
          devices. There were many apps for doing this, but none with a
          lucrative UI or even a considerable UX and appreciable support team.
          We designed Andronix from scratch to make it super user-friendly and
          pretty to look attached with multiple support platforms to give user a
          place to get rid of thier issues. <br /><br />

          While we really enjoyed developing for the community, we were sad to
          see that most of the already present apps were full of apps
          <br /><br />
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
          class="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-y-4 gap-x-4 justify-center items-center"
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
import teams from "~/static/Data/misc/teams.json";

export default {
  name: "about.vue",
  data: function () {
    return {
      teams,
    };
  },
};
</script>

<style scoped>
</style>
