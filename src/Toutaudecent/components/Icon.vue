<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div>
        <input type="text" v-model="items[index].message">
        <input type="text" v-model="items[index].message">
        <input type="text" v-model="items[index].surface">
      </div>
    </div>
    <button @click="addNewfield">Add</button>
  </div>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.addNewfield();
  },
  methods: {
    addNewfield() {
      this.items.push({
        message: "test",
        surface: 45
      });
    }
  }
};
</script>

<style>
</style>
