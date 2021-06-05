<template>
  <div class="min-h-screen flex flex-col gap-3 p-8">
    <!-- image -->
      <img class="" src="https://picsum.photos/300" alt="" />
    <!-- title & description -->
    <div>
      <div class="text-xs text-gray-500">
        Updated at:
        <span class="font-semibold">
          {{ new Date().toDateString() }}
        </span>
      </div>
      <div class="text-2xl text-gray-900 capitalize">
        {{ $route.params.name.replaceAll("-", " ") }}
      </div>
    </div>
    <div class="text-gray-900">
      {{ $route.params.description }}
    </div>
    <!-- link -->
    <div class="flex justify-center mt-6">
      <a
        :href="$route.params.url"
        class="text-gray-900 px-4 py-2 border border-gray-500 rounded hover:border-gray-900"
      >
        <i class="fab fa-github fa-lg fa-fw"></i>
        View the Code
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>