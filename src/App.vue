<template>
  <router-view />
  <div>
    <span
      >© Developed by
      <a href="https://github.com/rodionsibov"> Rodion Sibov</a>
    </span>
    <span>
      &nbsp; &bull;
      {{ date }}
    </span>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translate(0, 100px) rotate(0deg) !important;
  opacity: 0;
}
</style>