<template>
  <div>
    <div v-for="dataPage of pageData" :key="dataPage.id">
      <div v-for="dataComponnet of dataPage" :key="dataComponnet.id">
        <component :is="dataComponnet.sectionName" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      pageData: [],
    };
  },
  mounted() {
    this.title = `/${this.$route.params.slug}`;
    this.getPage();
  },
  methods: {
    getPage() {
      this.$axios.get(`/page/all`).then((rep) => {
        if (rep.data) {
          var data = rep.data;
          // console.log(data);
          for (var dt of data) {
            if (this.title == dt.link) {
              this.pageData = dt;
            }
          }
        }
      });
    },
  },
};
</script>

<style></style>
