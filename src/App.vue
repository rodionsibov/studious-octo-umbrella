<template>
  <div class="antialiased">

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