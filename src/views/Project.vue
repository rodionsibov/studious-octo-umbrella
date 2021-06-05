<template>
  <div>
    <!-- image -->
    <div>
      <img src="https://picsum.photos/300" alt="" />
    </div>
    <!-- title & description -->
    <div>
      <div class="font-semibold">
        Project Name
      </div>
      <div>
        Updated at:
        <span>
          {{ new Date().toDateString() }}
        </span>
      </div>
      <div class="text-left text-gray-700">
        Project discription goes here
      </div>
    </div>
    <!-- link -->
    <div>
      <a href="">View Code <i class="fab fa-github fa-lg fa-fw"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style>
</style>