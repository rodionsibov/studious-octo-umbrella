<template>
  <div class="m-auto my-5">
    Developed by
    <a href="https://github.com/rodionsibov"> Rodion Sibov</a> &bull;
    {{ date }}
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      return new Date().getFullYear();
    },
  },
};
</script>
