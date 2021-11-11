<template>
  <form
    @submit.prevent="handleSubmit"
    class="
      my-10
      bg-gray-900
      shadow-lg
      p-4
      rounded
      hover:bg-gray-800
      transition
      duration-150
    "
  >
    <h1 class="text-4xl my-4">
      {{ title }}
    </h1>
    <div class="grid gap-2">
      <CustomInput
        v-for="(input, i) in inputs" :key="i"
        :label="input.label"
        v-model="input.value"
        :type="input.type"
      />
      <button class="hover:underline">Log in</button>
    </div>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";

export default {
  components: {
    CustomInput,
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