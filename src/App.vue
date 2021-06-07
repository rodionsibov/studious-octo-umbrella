<template>
  <div class="antialiased text-gray-100 bg-gray-900">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translate(0, -100px);
  opacity: 0;
}
</style>