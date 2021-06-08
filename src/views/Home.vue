<template>
  <div class="min-h-screen min-w-full scroll-snap-start">
    <div
      class="flex flex-col justify-center items-center gap-4 p-8 md:w-1/2 m-auto"
    >
      <img
        class="w-40 h-40 rounded-full mb-4"
        src="https://avatars.githubusercontent.com/u/60054035?v=4"
        alt=""
      />
      <div class="text-center">
        <h1 class="text-2xl">Hi there 👋, I am Rodion</h1>
        <div class="text-xl font-bold">Web developer</div>
      </div>
      <div class="mb-6 space-y-4">
        <p>My passion is to develop modern and responsive websites.</p>
        <p>
          I have a life interest for all things web and developing code. The
          fact is that I get a huge moral satisfaction, when I create or improve
          something with my own hands.
        </p>
        <p>
          And in programming the results of your actions can be seen instantly.
          I like it a lot.
        </p>
      </div>
      <div
        class="flex justify-center text-gray-800"
        title="Swipe right to view my Projects and Skills"
      >
        <svg
          v-for="i in 3"
          :key="i"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 animate-ping"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
  <Projects />
</template>

<script>
import Projects from "@/components/Projects.vue";
export default {
  components: { Projects },
};
</script>
