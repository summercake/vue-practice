<template>
    <div>
       <h1>{{msg}}</h1>
       <!-- <router-view></router-view> -->
       <button @click="show">notify</button>
    </div>
</template>
<script>
export default {
  data() {
    return { msg: "Hello App.vue!!!" };
  },
  methods: {
    show() {
      this.$notify("Im good!!!", { delay: 1000 });
    }
  },
  computed: {},
  components: {}
};
</script>
<style scoped>
</style>
