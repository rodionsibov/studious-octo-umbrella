<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center gap-4 px-8 pt-8"
  >
    <img
      class="w-40 h-40 rounded-full mb-4"
      src="https://avatars.githubusercontent.com/u/60054035?v=4"
      alt=""
    />
    <div class="text-center">
      <h1 class="text-2xl">Hi there 👋, I am Rodion</h1>
      <div class="text-xl font-bold">Web developer</div>
    </div>
    <div class="mb-3 space-y-4">
      <p>My passion is to develop modern and responsive websites.</p>
      <p>
        I have a life interest for all things web and developing code. The fact
        is that I get a huge moral satisfaction, when I create or improve
        something with my own hands. And in programming the results of your
        actions can be seen instantly. I like it a lot.
      </p>
    </div>
    <router-link
      class="flex justify-center"
      to="/projects"
      title="Swipe right to view my Projects and Skills"
    >
      <svg
        width="102"
        height="24"
        viewBox="0 0 102 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101.061 13.0607C101.646 12.4749 101.646 11.5251 101.061 10.9393L91.5147 1.3934C90.9289 0.807612 89.9792 0.807612 89.3934 1.3934C88.8076 1.97918 88.8076 2.92893 89.3934 3.51472L97.8787 12L89.3934 20.4853C88.8076 21.0711 88.8076 22.0208 89.3934 22.6066C89.9792 23.1924 90.9289 23.1924 91.5147 22.6066L101.061 13.0607ZM0 13.5H100V10.5H0V13.5Z"
          fill="black"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
