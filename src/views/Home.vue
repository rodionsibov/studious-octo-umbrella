<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center gap-4 px-8 pt-8 md:w-3/6 m-auto"
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
    <div class="mb-3 space-y-4">
      <p>My passion is to develop modern and responsive websites.</p>
      <p>
        I have a life interest for all things web and developing code. The fact
        is that I get a huge moral satisfaction, when I create or improve
        something with my own hands.
      </p>
      <p>
        And in programming the results of your actions can be seen instantly. I
        like it a lot.
      </p>
    </div>
    <router-link
      class="flex justify-center text-gray-800"
      to="/projects"
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
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
