<template>
  <div class="">
    <div class="my-10">
      <img class="" src="https://picsum.photos/400" alt="" />
      <div class="my-3" v-if="project">
        <div class="my-5 text-sm text-gray-400">
          Updated at:
          <span class="font-bold">
            {{ updated }}
          </span>
        </div>
        <div class="text-3xl">
          {{ name }}
        </div>
        <div class="">
          {{ project.description }}
        </div>
      </div>
      <div class="my-10" v-if="project">
        <a :href="project.html_url" class="">
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
  data() {
    return {
      project: null,
    };
  },
  computed: {
    name() {
      return this.project.name.replaceAll("-", " ")
    },
    updated() {
      return new Date(this.project.updated_at).toDateString();
    },
  },
  async created() {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_API_PROJECT}/${this.$route.params.id}`
      );
      const data = await res.json();
      this.project = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>