<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div class="bg-background w-full bg-landing-pattern bg-top">
      <div
        class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
      >

        <Heading
          heading="Who we are?"
          deco_heading="ANDRONIX"
          sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
        />
      </div>


      <div class="px-12 md:px-24 lg:px-48 text-center">
        <Heading
          heading="Our Story"
          deco_heading="ABOUT"
          sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
        />
        <p class="text-white text-lg tracking-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid deleniti earum, eius esse eum, illum
          itaque magni neque, nesciunt nobis quasi repudiandae rerum ullam vel velit veniam? Asperiores autem
          consectetur, dolore dolores inventore iure laboriosam, molestias, nisi odit quas quibusdam velit vitae
          voluptas. Cumque explicabo itaque nostrum officiis perspiciatis.
          <br><br>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum facilis nulla officia repudiandae
          voluptatibus! A adipisci autem distinctio dolor. Dignissimos, ducimus enim ex itaque qui quisquam. At atque
          cum dolor doloremque, dolores dolorum ducimus facilis fuga, iste libero nihil nobis numquam praesentium quidem
          reiciendis sapiente, sint tempore voluptatem voluptatum!
          <br><br>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet magnam mollitia nesciunt nobis officia
          perspiciatis placeat quasi similique voluptate? Distinctio exercitationem iure recusandae repellat.
          Accusantium autem cum delectus, dolor est odit officia vero? Delectus, deleniti dolores explicabo facere
          fugiat fugit iste, laborum natus odio quam quos sequi sint suscipit voluptate!
          <br><br>

        </p>
      </div>


      <!-- Team -->
      <div class="mt-24 px-12 md:p-24">
        <Heading
          heading="Our Team"
          deco_heading="ABOUT"
          sub_heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eaque iure minus pariatur quas unde!"
        />

        <div class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center">
          <TeamCard class="justify-self-center" :class="index===0 ? 'md:justify-self-end':'md:justify-self-start'"
                    v-for="(member,index) in teams.dev"
                    :name="member.name"
                    :position="member.position"
                    :quote="member.quote"
                    :photo_url="member.photo_url"
          />
        </div>

        <!--   Support Team     -->
        <XyzTransition :appear-visible="true" duration="auto">
          <div class="px-5 py-5 mt-16 pb-16">
            <div class="flex-col space-y-4" xyz="fade flip-down duration-10 delay-2 stagger ease-out-back">
              <h2 class="heading-2 xyz-nested">
                Support Team</h2>
            </div>
          </div>
        </XyzTransition>
        <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-y-4 gap-x-4 justify-center items-center">
          <TeamCard class="justify-self-center" v-for="member in teams.support"
                    :name="member.name"
                    :position="member.position"
                    :quote="member.quote"
                    :photo_url="member.photo_url"
          />
        </div>


        <!-- Special mentions -->
        <XyzTransition :appear-visible="true" duration="auto">
          <div class="px-5 py-5 mt-16 pb-16">
            <div class="flex-col space-y-4" xyz="fade flip-down duration-10 delay-2 stagger ease-out-back">
              <h2 class="heading-2 xyz-nested">
                Special Mentions</h2>
            </div>
          </div>
        </XyzTransition>
        <div class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center">
          <TeamCard class="justify-self-center" :class="index===0 ? 'md:justify-self-end':'md:justify-self-start'"
                    v-for="(member, index) in teams.specials"
                    :name="member.name"
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
      teams
    }
  }
}
</script>

<style scoped>

</style>
