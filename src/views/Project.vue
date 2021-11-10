<template>
  <div class="">
    <div class="my-10">
      <img class="" src="https://picsum.photos/400" alt="" />
      <div class="my-3">
        <div class="">
          Updated at:
          <span class="font-bold">
            {{ updated }}
          </span>
        </div>
        <div class="text-3xl">
          {{ name }}
        </div>
        <div class="">
          {{ $route.params.description }}
        </div>
      </div>
      <div class="my-10">
        <a :href="$route.params.url" class="">
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