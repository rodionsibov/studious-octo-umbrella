<template>
  <label>
    {{ label }}
    <input
      class="p-2 rounded text-black block mt-1 w-full"
      v-model="inputValue"
      :type="type"
    />
  </label>
</template>

<script>
export default {
  props: ["label", "modelValue", "type"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  //   data() {
  //       return {
  //           inputValue: ''
  //       }
  //   }
};
</script>

<style>
</style>