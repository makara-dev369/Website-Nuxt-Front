<template>
  <nav class="z-50 h-24 select-none fixed top-0 w-screen  bg-white border-b-2">
    <div class="max-w-screen-lg mx-auto relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
      <div class="flex items-center justify-start w-1/4 h-full pr-4">
        <a href="#_" class="inline-block py-4 md:py-0">
          <span class="p-1 text-xl font-black leading-none text-gray-600">DevOP.</span>
        </a>
      </div>
      <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
        <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
          <a href="#_" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span class="text-indigo-600">.</span></a>
          <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
            <div v-for="data in menu" :key="data.id">
              <NuxtLink class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-gray-700 hover:text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center" :to="data.link">{{ data.pageName }}</NuxtLink>
            </div>

            <a href="#_" class="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
              <svg class="inline w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </a>
          </div>
          <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0 font-bayon ">
            <NuxtLink to="/auth/login" class="w-full px-3 py-2 mr-0 text-gray-700 md:mr-2 lg:mr-3 md:w-auto">ចូលគណនី</NuxtLink>
            <NuxtLink to="/auth/signup" class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-gray-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">បង្កើតថ្មី</NuxtLink>
          </div>
        </div>
      </div>
      <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
        <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menu: [],
    };
  },
  mounted() {
    const auth = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    this.$axios.get(`/page/all`, auth).then((rep) => {
      if (rep.data) {
        this.menu = rep.data;
      }
    });
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-indigo-600 bg-white;
}
</style>
