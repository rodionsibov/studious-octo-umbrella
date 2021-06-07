<template>
  <div class="antialiased text-gray-100 bg-gray-900">
    <router-view />
    <div class="flex justify-center p-3 text-sm text-gray-500">
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