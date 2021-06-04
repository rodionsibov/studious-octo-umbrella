<template>
  <header>
    <img src="https://avatars.githubusercontent.com/u/60054035?v=4" alt="" />
    <h1>Hi there 👋, I am Rodion</h1>
    <h2>
      I'm a web developer. My passion is to develop modern and responsive
      websites.
    </h2>
    <p>
      I have a life interest for all things web and developing code. The fact is
      that I get a huge moral satisfaction, when I create or improve something
      with my own hands. And in programming the results of your actions can be
      seen instantly. I like it a lot.
    </p>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link>
      <a href="https://rodionsibov.github.io"
        ><i class="fab fa-github fa-lg fa-fw"></i
      ></a>
    </nav>
  </header>
  <main>
    <div v-if="errors">Sorry! It seems we can't fetch data right now 😥</div>
    <section v-else>
      <div v-if="loading">😴 Loading ...</div>
      <div class="" v-else>
        <div v-for="(project, index) in projectsList" :key="index" class="">
          <h3 class="">
            {{ trimTitle(project.name) }}
          </h3>
          <p>
            {{ trimText(project.description) }}
          </p>
          <div class="">
            <div>
              <h5>Updated at:</h5>
              <div>{{ new Date(project.updated_at).toDateString() }}</div>
            </div>
            <img class="w-8 h-8 rounded-full" :src="project.owner.avatar_url" alt="" />
          </div>
          <div class="">
            <a :href="project.html_url" target="_blank">View Code</a>
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
        <div>
          <h2>Development Skills</h2>
          <ul class="">
            <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
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
