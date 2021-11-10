<template>
  <h1 class="text-3xl my-5">Projects</h1>
  <div class="my-10">
    <div v-if="isErrors" class="">
      Sorry! It seems we can't fetch data right now 😥
      <router-link to="/" class="block font-bold mt-5 hover:underline"
        >Go Home</router-link
      >
    </div>
    <div v-else class="">
      <div
        v-if="isLoading"
        class="flex justify-center items-center animate-pulse"
      >
        😴 Loading ...
      </div>
      <div v-else class="">
        <ul class="space-y-10">
          <li v-for="(project, index) in projectsList" :key="index" class="">
            <router-link
              :to="{
                name: 'Project',
                params: {
                  id: project.name,
                  name: project.name,
                  description: project.description,
                  url: project.html_url,
                  updated: project.updated_at,
                },
              }"
              class="hover:underline"
            >
              <div class="">
                <div class="text-xl font-bold my-1">
                  {{ styleTitle(project.name) }}
                </div>
                <div class="" :title="project.description">
                  {{ project.description }}
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div v-if="!isLoading">
          <div v-if="projectsList.length < projects.length">
            <button @click="loadMore" class="my-5 text-gray-500">
              👉 Load More...
            </button>
          </div>
          <div v-else>
            <div class="my-10">
              👉
              <a
                href="https://github.com/rodionsibov"
                target="_blank"
                class="hover:underline"
                >Visit My Github <i class="fab fa-github fa-lg fa-fw"></i
              ></a>
            </div>
          </div>
        </div>
        <div>
          <div class="text-2xl mt-20 mb-5">Development Skills</div>
          <ul class="space-x-2">
            <li
              v-for="(skill, index) in skills"
              :key="index"
              class="
                rounded
                bg-gray-700
                text-white
                font-bold
                inline-block
                px-2
                py-1
                hover:bg-gray-600
              "
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      perPage: 20,
      page: 1,
      projectsList: [],
      projectsCount: 5,
      skills: [],
      isLoading: true,
      isErrors: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.fetchData();
    }, 3000);
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(
          `${process.env.VUE_APP_API}?per_page=${this.perPage}&page=${this.page}`
        );
        const data = await res.json();
        console.log(data);
        this.projects = data;
        this.projects.forEach((project) => {
          if (
            project.language !== null &&
            !this.skills.includes(project.language)
          )
            this.skills.push(project.language);
        });
      } catch (error) {
        console.log(error);
        this.isErrors = true;
      }
      this.isLoading = false;
      this.getProjects();
    },
    getProjects() {
      this.projectsList = this.projects.slice(0, this.projectsCount);
      return this.projectsList;
    },
    loadMore() {
      if (this.projectsList.length <= this.projects.length) {
        this.projectsCount += 5;
        this.projectsList = this.projects.slice(0, this.projectsCount);
      }
    },
    styleTitle(text) {
      return text.replaceAll("-", " ");
    },
  },
};
</script>

<style>
</style>