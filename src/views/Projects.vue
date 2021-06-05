<template>
  <div>
    <div v-if="isErrors">Sorry! It seems we can't fetch data right now 😥</div>
    <div v-else>
      <div v-if="isLoading">😴 Loading ...</div>
      <div v-else>
        <div class="p-8 flex justify-center">
          <ul class="space-y-2">
            <transition
              name="fade"
              v-for="(project, index) in projectsList"
              :key="index"
            >
              <li
                class="transform"
                :class="`rotate-${Math.floor(Math.random() * 10)}`"
              >
                <router-link
                  to=""
                  class="bg-white shadow-md border rounded-lg p-4 flex items-center hover:bg-gray-100 w-80"
                >
                  <img
                    :src="project.owner.avatar_url"
                    alt="avatar"
                    class="rounded-full w-10 h-10"
                  />
                  <div class="ml-4">
                    <div class="font-semibold text-gray-900">
                      {{ project.name }}
                    </div>
                    <div class="text-left text-gray-700 overflow-ellipsis">
                      {{ project.description }}
                    </div>
                  </div>
                </router-link>
              </li>
            </transition>
          </ul>
        </div>
      </div>
      <div v-if="!isLoading" class="text-center mb-6">
        <div v-if="projectsList.length < projects.length">
          <button
            @click="loadMore"
            class="hover:underline hover:text-gray-900 text-gray-500"
          >
            Load More
          </button>
        </div>
        <div v-else>
          <a
            class="hover:underline hover:text-gray-900 text-gray-500"
            href="https://github.com/rodionsibov"
            target="_blank"
            >Visit My Github <i class="fab fa-github fa-lg fa-fw"></i
          ></a>
        </div>
      </div>
      <div>
        <div class="text-xl font-semibold text-center text-gray-900">Development Skills</div>
        <ul class="flex justify-center gap-3 p-4">
          <li
            v-for="(skill, index) in skills"
            :key="index"
            class="text-sm font-semibold border px-2 py-1 rounded bg-gray-100"
          >
            {{ skill }}
          </li>
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