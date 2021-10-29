<template>
  <div class="antialiased">
    <div class="bg-black text-white p-2 mb-4 inline-block m-auto"><a href="">rodionsibov/</a></div>
    <div class="">
      <router-view />
    </div>

    <div class="">
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