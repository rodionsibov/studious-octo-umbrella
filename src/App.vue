<template>
  <div class="antialiased">
    <div class="bg-blue-900 text-white p-2 mb-4 inline-block m-auto">
      <router-link to="/">rodionsibov/</router-link>
    </div>
    <div class="w-1/2 m-auto">
      <router-view />
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
};
</script>

<style>
</style>