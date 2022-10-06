<template>
  <section
    class="w-full px-6 pb-12 antialiased bg-white"
    data-tails-scripts="//unpkg.com/alpinejs"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Main Hero Content -->
      <div
        class="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center"
      >
        <h1
          class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
        >
          <span class="inline md:block">{{ title }}</span>
          <span
            class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"
            >{{ subTitle }}</span
          >
        </h1>
        <div
          class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
        >
          {{ description }}
        </div>
        <div class="flex flex-col items-center mt-12 text-center">
          <span class="relative inline-flex w-full md:w-auto">
            <a
              href="#_"
              type="button"
              class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              {{ otherTitle }}
            </a>
            <span
              class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full"
              >only $15/mo</span
            >
          </span>
          <NuxtLink :to="`${otherTitle1}`" class="mt-3 text-sm text-indigo-500"
            >Learn More</NuxtLink
          >
        </div>
      </div>
      <!-- End Main Hero Content -->
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      subTitle: "",
      description: "",
      otherTitle: "",
    };
  },
  props: {
    dataObj: Object,
  },
  mounted() {
    this.title = this.$props.dataObj.customField1;
    this.subTitle = this.$props.dataObj.customField2;
    this.otherTitle = this.$props.dataObj.customField3;
    this.otherTitle1 = this.$props.dataObj.customField4;
    this.description = this.$props.dataObj.description;
  },
};
</script>

<style></style>
