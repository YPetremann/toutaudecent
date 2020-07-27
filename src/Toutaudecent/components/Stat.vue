<template>
  <details open>
    <summary :style="`background:${headColor}`" class="flex">
      <span class="grow">{{name}} :</span>
      <input v-model.number="internal_value" type="range" min="0" max="100" step="5">
      <input v-model.number="internal_value" type="number" min="0" max="100" step="5">
    </summary>
    <ul>
      <slot></slot>
    </ul>
  </details>
</template>

<script>
export default {
  name: "Stat",
  props: {
    name: String,
    headColor: String,
    baseColor: String,
    value: Number
  },
  data() {
    return {
      internal_value: 40
    };
  },
  watch: {
    internal_value(v, o) {
      if (v !== o) {
        this.$emit("input", v);
      }
    },
    value(v, o) {
      if (v !== o) {
        this.internal_value = v;
      }
    }
  }
};
</script>
<style>
</style>
