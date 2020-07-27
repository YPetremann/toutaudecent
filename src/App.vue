<template>
  <Xterm/>
</template>

<script>
import Toutaudecent from "@/Toutaudecent/App.vue";
import Xterm from "@/Xterm/App.vue";
export default {
  components: {
    Toutaudecent,
    Xterm
  }
};
</script>
<style>
.flex {
  display: flex;
}
.flex > .grow {
  flex-grow: 1;
}
</style>
