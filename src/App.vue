<template>
  <div class="antialiased">
    <div class="bg-blue-900 text-white inline-block p-3 font-bold rounded-br">
      <router-link to="/">😉rodionsibov/</router-link>
    </div>
    <div class="md:w-1/2 m-auto p-3">
      <div class="space-x-4">
        <router-link :to="{ name: 'Home' }" class="hover:underline"
          >Home</router-link
        >
        <router-link :to="{ name: 'Projects' }" class="hover:underline"
          >Projects</router-link
        >
        <router-link :to="{ name: 'About' }" class="hover:underline"
          >About</router-link
        >
      </div>
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
.router-link-exact-active {
  font-weight: bold;
}
</style>