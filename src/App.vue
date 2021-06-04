<template>
  <div
    class="bg-gray-300 text-gray-800 antialiased min-h-screen flex flex-col justify-end"
  >
    <div class="bg-gray-400 p-8 flex justify-center">
      <ul class="absolute space-y-2 -mt-32" style="bottom: 124px">
        <transition name="fade" v-for="email in 5" :key="email">
          <li
            v-show="visible"
            class="transform"
            :class="`rotate-${Math.floor(Math.random() * 10)}`"
          >
            <a
              href=""
              class="bg-white shadow-md border rounded-lg p-4 flex items-center hover:bg-gray-100 w-80"
            >
              <img
                src="https://avatars.githubusercontent.com/u/60054035?v=4"
                alt="avatar"
                class="rounded-full w-10 h-10"
              />
              <div class="ml-4">
                <div class="font-semibold">Hey Email Invite</div>
                <div class="text-left text-gray-700">Rodion Sibov</div>
              </div>
            </a>
          </li>
        </transition>
      </ul>
      <button
        @click="visible = !visible"
        class="bg-white shadow-md border rounded-lg p-4 flex items-center hover:bg-gray-100 w-80 -mt-16"
      >
        <img
          src="https://avatars.githubusercontent.com/u/60054035?v=4"
          alt="avatar"
          class="rounded-full w-10 h-10"
        />
        <div class="ml-4">
          <div class="font-semibold">Hey Email Invite</div>
          <div class="text-left text-gray-700">Rodion Sibov</div>
        </div>
      </button>
    </div>
  </div>
  <!-- <router-view />
  <div>
    <span
      >© Developed by
      <a href="https://github.com/rodionsibov"> Rodion Sibov</a>
    </span>
    <span>
      &nbsp; &bull;
      {{ date }}
    </span>
  </div> -->
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