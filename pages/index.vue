<template>
  <div>
    <div v-for="dataPage of pageData" :key="dataPage.id">
      <div v-for="dataComponnet of dataPage" :key="dataComponnet.id">
        <component :is="dataComponnet.sectionName" :dataObj="dataComponnet" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      title: "Home",
      pageData: [],
    };
  },
  async asyncData({ $axios }) {
    const pageData = await $axios.get(`/page/all`).then((rep) => {
      if (rep.data) {
        var data = rep.data;
        for (var dt of data) {
          if (dt.pageName == 'Home') {
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
