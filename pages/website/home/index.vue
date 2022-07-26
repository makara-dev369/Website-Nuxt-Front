<template>
  <div>
    <div v-for="dt of data" :key="dt.id">
<<<<<<< HEAD
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border-2 mb-5 h-3xl">
=======
      <div class="">
>>>>>>> 729a49ef6a3961de934206c243b882b4d05b6f9a
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
<<<<<<< HEAD
      { id: 2, name: "section-article" },
=======
      { id: 2, name: "section-code" },
      { id: 3, name: "section-tiger" },
      { id: 4, name: "section-article" },
      { id: 5, name: "section-footer" },
>>>>>>> 729a49ef6a3961de934206c243b882b4d05b6f9a
    ];
    return {
      data,
    };
  },
  mounted() {
    // this.loopSection();
  },
<<<<<<< HEAD

=======
>>>>>>> 729a49ef6a3961de934206c243b882b4d05b6f9a
  methods: {},
};
</script>

<<<<<<< HEAD
<style></style>
=======
<style>
html {
  scroll-behavior: smooth;
}
</style>
>>>>>>> 729a49ef6a3961de934206c243b882b4d05b6f9a
