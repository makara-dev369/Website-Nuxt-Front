<template>
  <div>
    <div v-for="dt of data" :key="dt.id">
      <div class="">
        <component :is="dt.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [
      { id: 1, name: "section-hero" },
      { id: 2, name: "section-code" },
      { id: 3, name: "section-tiger" },
      { id: 4, name: "section-article" },
      { id: 5, name: "section-footer" },
    ];
    return {
      data,
    };
  },
  mounted() {
    // this.loopSection();
  },
  methods: {},
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
