<template>
  <form
    @submit.prevent="handleSubmit"
    class="
      mx-4 md:m-0 md:my-10
      bg-gray-900
      shadow-lg
      p-4
      rounded
      hover:bg-gray-800
      transition
      duration-150
      relative
    "
  >
    <h1 class="text-4xl my-4">
      {{ title }}
    </h1>
    <div class="grid gap-2">
      <LoginFormCustomInput
        v-for="(input, i) in inputs"
        :key="i"
        :label="input.label"
        v-model="input.value"
        :type="input.type"
      />
      <button class="hover:underline">Log in</button>
    </div>
    <svg
      @click="$router.push('/')"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 absolute right-2 top-2 hover:opacity-70 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </form>
</template>

<script>
import LoginFormCustomInput from "@/components/LoginFormCustomInput.vue";

export default {
  components: {
    LoginFormCustomInput,
  },
  data() {
    return {
      title: "Login Form",
      inputs: [
        {
          label: "Email",
          value: "",
          type: "email",
        },
        {
          label: "Password",
          value: "",
          type: "password",
        },
      ],
      email: "@mail.com",
      password: "",
      emailLabel: "Email",
      passwordLabel: "Password",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.inputs[0]);
    },
  },
};
</script>

<style>
</style>