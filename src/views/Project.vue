<template>
  <div class="min-h-screen flex flex-col p-4 bg-gray-200">
    <div class="bg-gray-900 border rounded-lg overflow-hidden shadow-md">
      <img class="w-full" src="https://picsum.photos/300" alt="" />
      <div class="p-6 space-y-3">
        <div class="text-2xl capitalize">
          {{ name }}
        </div>
        <div class="text-xs uppercase text-gray-600 tracking-wide">
          Updated at:
          <span class="font-semibold">
            {{ updated }}
          </span>
        </div>
        <div class="">
          {{ $route.params.description }}
        </div>
      </div>
      <div class="flex justify-center m-8">
        <a
          :href="$route.params.url"
          class="px-4 py-2 border border-gray-500 rounded hover:border-gray-900"
        >
          <i class="fab fa-github fa-lg fa-fw"></i>
          View the Code
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.params.name?.replaceAll("-", " ") || "Title";
    },
    updated() {
      return new Date(this.$route.params.updated).toDateString();
    },
  },
};
</script>

<style>
</style>