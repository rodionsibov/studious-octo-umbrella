<template>
    <div class="">
    <div class="">
      <div class="">
        <h1 class="text-3xl mt-5 mb-1 text-blue-100">
          Hi there 👋, I am Rodion
        </h1>
        <div class="font-bold mb-5">Web developer</div>
      </div>
      <div class="space-y-4">
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
    </div>
  </div>
  <router-link
    :to="{ name: 'Projects' }"
    class="p-3 rounded bg-blue-700 hover:bg-blue-600 transition duration-300 text-white inline-block my-5"
    >View Projects</router-link
  >
</template>

<script>
export default {};
</script>
