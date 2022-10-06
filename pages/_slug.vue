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

  async asyncData({ $axios, route }) {
    const link = route.path
    const pageData = await $axios.get(`/page/all`).then((rep) => {
      if (rep.data) {
        var data = rep.data;
        for (var dt of data) {
          if (link == dt.link) {
            return dt;
          }
        }
      }
    });
    return { pageData }
  },
  methods: {
  },
};
</script>

<style>

</style>
