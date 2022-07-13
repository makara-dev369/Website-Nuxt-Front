<template>
  <div>
    <div v-for="dt of data" :key="dt.id">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border-2 mb-5 h-3xl">
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
      { id: 2, name: "section-article" },
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

<style></style>
