<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
  </header>
  <router-view />
  <footer>
    © Developed by <a href="https://rodionsibov.github.io">Rodion Sibov</a> &bull;
    {{ date }}
  </footer>
</template>

<script>
export default {
  computed: {
    date() {
      return new Date().getFullYear()
    }
  }
};
</script>

