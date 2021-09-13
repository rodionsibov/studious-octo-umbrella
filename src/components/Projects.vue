<template>
  <div class="">
    <div
      v-if="isErrors"
      class=""
    >
      Sorry! It seems we can't fetch data right now 😥
      <router-link
        to="/"
        class=""
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
        <ul class="">
          <li
            v-for="(project, index) in projectsList"
            :key="index"
            class=""
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
              class=""
            >
              <!-- <img
                :src="project.owner.avatar_url"
                alt="avatar"
                class=""
              /> -->
              <div class="">
                <div class="">
                  {{ styleTitle(project.name) }}
                </div>
                <div
                  class=""
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
              class=""
            >
              Load More
            </button>
          </div>
          <div v-else>
            <a
              class=""
              href="https://github.com/rodionsibov"
              target="_blank"
              >Visit My Github <i class="fab fa-github fa-lg fa-fw"></i
            ></a>
          </div>
        </div>
        <div>
          <div class="">
            Development Skills
          </div>
          <ul class="">
            <li
              v-for="(skill, index) in skills"
              :key="index"
              class=""
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