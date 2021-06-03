<template>
  <div v-if="error">Sorry! It seems we can't fetch data right now 😥</div>
  <section v-else>
    <h1>Projects</h1>
    <div class="">
      <div v-if="loading">😴 Loading ...</div>
      <div
        v-else
        v-for="(project, index) in projectsList"
        :key="index"
        class=""
      >
        <h2 class="">
          {{ trimTitle(project.name) }}
        </h2>
        <p>
          {{ trimText(project.description) }}
        </p>
        <div class="">
          <p>
            <strong>Updated at: </strong>
            {{ new Date(project.updated_at).toDateString() }}
          </p>
          <img
            :src="project.owner.avatar_url"
            alt="Avatar"
            style="width: 30px; border-radius: 50%"
          />
        </div>
        <div class="">
          <a :href="project.html_url" target="_blank">View Code</a>
        </div>
      </div>
      <div>
        <h2>Development Skills</h2>
        <ul class="">
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div v-if="!loading">
      <div v-if="projectsList.length < projects.length">
        <button @click="loadMore">Load More</button>
      </div>
      <div v-else>
        <a href="https://github.com/rodionsibov" target="_blank"
          >Visit My Github</a
        >
      </div>
    </div>
  </section>
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
      loading: true,
      errors: false,
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
          `https://api.github.com/users/rodionsibov/repos?per_page=${this.perPage}&page=${this.page}`
        );
        const data = await res.json();
        console.log(data);
        this.projects = data;
        this.projects.forEach((project) => {
          if (
            project.language !== null &&
            this.skills.includes(project.language)
          )
            this.skills.push(project.language);
        });
      } catch (error) {
        console.log(error);
        this.errors = true;
      }
      this.loading = false;
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
    trimTitle(text) {
      let title = text.replaceAll("-", " ").replace("_", " ");
      if (title.length > 15) {
        return title.slice(0, 12) + "...";
      }
      return title;
    },
    trimText(text) {
      if (text.length > 100) {
        return text.slice(0, 100) + "...";
      }
      return text;
    },
  },
};
</script>

<style>
</style>