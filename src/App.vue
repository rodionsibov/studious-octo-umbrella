<template>
  <div class="antialiased bg-blue-900 text-gray-50 min-h-screen">
    <div class="bg-gray-900 inline-block p-3 font-bold rounded-br">
      <router-link :to="{ name: 'Home' }">😉 rodionsibov/</router-link>
    </div>
    <div class="md:w-11/12 m-auto p-4">
      <TheNavigation />
      <main class="p-2">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  font-weight: bold;
}
</style>