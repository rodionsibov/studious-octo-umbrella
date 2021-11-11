<template>
  <div class="antialiased bg-blue-900 text-gray-50 min-h-screen">
    <div class="bg-gray-900 inline-block p-3 font-bold rounded-br">
      <router-link to="/">😉rodionsibov/</router-link>
    </div>
    <div class="md:w-1/2 m-auto">
      <div
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

      <div v-show="isVisible" class="p-2">
        <LoginForm />
      </div>

      <div
        @click="isVisible = !isVisible"
        class="
          p-3
          absolute
          right-10
          top-10
          bg-yellow-500
          rounded-lg
          cursor-pointer
          hover:bg-yellow-600
          transition
          duration-300
        "
      >
       Login in
      </div>
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
      isVisible: true,
    };
  },
};
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
}
</style>