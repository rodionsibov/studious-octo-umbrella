<template>
  <div>
    <div v-if="isErrors">Sorry! It seems we can't fetch data right now 😥</div>
    <div v-else>
      <div v-if="isLoading">😴 Loading ...</div>
      <div v-else>
        <div class="bg-gray-400 p-8 flex justify-center">
          <ul class="absolute space-y-2 -mt-32" style="bottom: 124px">
            <transition
              name="fade"
              v-for="(project, index) in projectsList"
              :key="index"
            >
              <li
                class="transform"
                :class="`rotate-${Math.floor(Math.random() * 10)}`"
              >
                <a
                  href=""
                  class="bg-white shadow-md border rounded-lg p-4 flex items-center hover:bg-gray-100 w-80"
                >
                  <img
                    :src="project.owner.avatar_url"
                    alt="avatar"
                    class="rounded-full w-10 h-10"
                  />
                  <div class="ml-4">
                    <div class="font-semibold">
                      {{ trimTitle(project.name) }}
                    </div>
                    <div class="text-left text-gray-700">
                      {{ trimText(project.description) }}
                    </div>
                  </div>
                </a>
              </li>
            </transition>
          </ul>
        </div>
      </div>
      <div v-if="!isLoading">
        <div v-if="projectsList.length < projects.length">
          <button @click="loadMore">Load More</button>
        </div>
        <div v-else>
          <a href="https://github.com/rodionsibov" target="_blank"
            >Visit My Github <i class="fab fa-github fa-lg fa-fw"></i
          ></a>
        </div>
      </div>
      <div>
        <h2>Development Skills</h2>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
        </ul>
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
