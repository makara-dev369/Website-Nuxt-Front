<template>
  <div>
    <!-- <h1>Hello: {{ title }}</h1> -->
    <!-- <div v-for="dt of pageData" :key="dt.id"> -->

    <div class="" v-for="d of pageData.section" :key="d.id">
      <component :is="d.name" />
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    const data = [
      {
        id: 1,
        page: "about",
        section: [
          { id: 1, name: "section-hero" },
          { id: 2, name: "section-code" },
          { id: 3, name: "section-tiger" },
          { id: 4, name: "section-article" },
          { id: 5, name: "section-footer" },
        ],
        meta: "data[]",
      },
      {
        id: 2,
        page: "contact",
        section: [{ id: 1, name: "section-code" }],
        meta: "data[]",
      },
    ];
    return {
      title: "",
      data,
      pageData: [],
    };
  },
  mounted() {
    this.title = this.$route.params.slug;
    for (var dt of this.data) {
      if (this.title == dt.page) {
        this.pageData = dt;
        console.log(dt.page, this.title, this.pageData.section);
      }
    }
  },
};
</script>

<style></style>
