<template>
  <div class="min-h-screen min-w-full scroll-snap-start">
    <div
      v-if="isErrors"
      class="flex flex-col gap-4 justify-center items-center p-8 min-h-screen text-center text-xl"
    >
      Sorry! It seems we can't fetch data right now 😥
      <router-link
        to="/"
        class="text-sm hover:underline p-1 text-gray-500 hover:text-gray-900"
        >Go Home</router-link
      >
    </div>
    <div v-else>
      <div
        v-if="isLoading"
        class="flex justify-center items-center min-h-screen animate-pulse"
      >
        😴 Loading ...
      </div>
      <div v-else class="p-8 flex items-center flex-col gap-8">
        <ul class="space-y-2">
          <li
            v-for="(project, index) in projectsList"
            :key="index"
            class=""
            :class="`rotate-${Math.floor(Math.random() * 10)}`"
          >
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
              class="bg-white shadow-md border rounded-lg p-4 flex items-center hover:bg-gray-100 w-80"
            >
              <img
                :src="project.owner.avatar_url"
                alt="avatar"
                class="rounded-full w-10 h-10"
              />
              <div class="ml-4 truncate pr-2">
                <div class="font-semibold truncate capitalize text-gray-900">
                  {{ styleTitle(project.name) }}
                </div>
                <div
                  class="text-left text-gray-700 truncate"
                  :title="project.description"
                >
                  {{ project.description }}
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div v-if="!isLoading">
          <div v-if="projectsList.length < projects.length">
            <button
              @click="loadMore"
              class="hover:underline hover:text-gray-100 text-gray-500 p-1"
            >
              Load More
            </button>
          </div>
          <div v-else>
            <a
              class="hover:underline hover:text-gray-100 text-gray-500 p-1"
              href="https://github.com/rodionsibov"
              target="_blank"
              >Visit My Github <i class="fab fa-github fa-lg fa-fw"></i
            ></a>
          </div>
        </div>
        <div>
          <div class="text-xl font-semibold text-center">
            Development Skills
          </div>
          <ul class="flex justify-center gap-3 p-4">
            <li
              v-for="(skill, index) in skills"
              :key="index"
              class="text-sm font-semibold px-2 py-1 rounded bg-gray-800"
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
    setTimeout(() => {}, 3000);
    this.fetchData();
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