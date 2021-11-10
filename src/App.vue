<template>
  <div class="antialiased">
    <div class="bg-blue-900 text-white p-2 mb-4 inline-block m-auto">
      <router-link to="/">rodionsibov/</router-link>
    </div>
    <div class="w-1/2 m-auto">
      <router-view />
    </div>

    <div class="">
      <h1 class="text-3xl my-5">Footer</h1>
      <span
        >© Developed by
        <a href="https://github.com/rodionsibov"> Rodion Sibov</a>
      </span>
      <span>
        &nbsp; &bull;
        {{ date }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    date() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>