<template>
  <div class="antialiased bg-blue-900 text-gray-50 min-h-screen">
    <div class="bg-gray-900 inline-block p-3 font-bold rounded-br">
      <router-link :to="{ name: 'Home' }">😉 rodionsibov/</router-link>
    </div>
    <div class="md:w-1/2 m-auto">
      <nav
        class="
          p-6
          md:p-3
          space-y-4
          text-2xl
          md:space-x-4
          flex flex-col
          md:flex-row md:space-y-0 md:text-base
        "
      >
        <router-link
          v-for="page in pages"
          :key="page"
          :to="{ name: page }"
          class="hover:underline"
        >
          {{ page }}
        </router-link>
      </nav>
      <LoginForm />
      <div class="p-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: { LoginForm },
  data() {
    return {
      pages: ["Home", "Projects", "About"],
    };
  },
};
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
}
</style>