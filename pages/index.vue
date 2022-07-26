<template>
  <!-- <h1
    class="text-6xl font-bold text-center flex justify-center items-center h-screen"
  >
    Home Page
  </h1> -->

  <div>
    <div class="pg-gray-300" v-for="d of pageData.section" :key="d.id">
      <component :is="d.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    const data = [
      {
        id: 1,
        page: "index",
        section: [
          { id: 1, name: "hreo-pusrches" },
          { id: 2, name: "section-title" },
          { id: 3, name: "section-sponser" },
          { id: 4, name: "section-feature" },
          { id: 5, name: "section-contact" },
          { id: 6, name: "section-footer" },
        ],
        meta: "data[]",
      },
      {
        id: 3,
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
        section: [
          { id: 1, name: "section-code" },
          { id: 2, name: "section-hero" },
        ],
        meta: "data[]",
      },
      {
        id: 4,
        page: "features",
        section: [
          { id: 1, name: "section-code" },
          { id: 2, name: "section-hero" },
        ],
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
    this.title = this.$route.name;
    console.log(this.title);
    for (var dt of this.data) {
      if (this.title == dt.page) {
        this.pageData = dt;
        console.log(dt.page, this.title, this.pageData.section);
      }
    }
  },
};
</script>
