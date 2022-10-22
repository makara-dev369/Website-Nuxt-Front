<template>
  <!-- Section 5 -->
  <section class="w-full px-8 py-16 pt-[100px] bg-gray-100 xl:px-8">
    <div class="max-w-5xl mx-auto ">
      <div class="flex flex-col items-center md:flex-row space-y-2 space-x-5">
        <div class="w-full mt-16 md:mt-0 md:w-2/5">
          <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow px-7">
            <h3 class="mb-6 text-2xl font-medium text-center font-btb font-bold">
              ចូលគណនីរបស់អ្នក
            </h3>
            <input type="text" v-model="email" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="សារអេឡិចត្រូនិច" />
            <input type="password" v-model="password" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="ពាក្យសំងាត់**" />
            <div class="block">
              <button class="w-full px-3 py-4 font-medium text-white bg-gray-600 rounded-lg" @click="submit">
                Log Me In
              </button>
            </div>
            <p class="w-full mt-4 text-sm text-center text-gray-500 font-btb">
              មិនទាន់មានគណនី?
              <nuxt-link to="/auth/signup" class="text-blue-500 underline">បង្កើតនៅទីនេះ</nuxt-link>
            </p>
          </div>
        </div>
        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
          <h2 class="text-2xl font-extrabold leading-7 text-black sm:text-3xl md:text-5xl font-bayon " style="    line-height: 4.75rem;">
            ការចូលរួមជាមួយក្រុម​អ្នកអភិវឌ្ឍ <span class="text-orange-600">ក្ដាមខ្យង</span> ។
          </h2>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: mapState(["user"]),
  methods: {
    async submit() {
      const options = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      };
      const dataFrom = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("login", dataFrom).then((rep) => { });
      await this.$router.push({ path: "/dashboard" });
    },
  },
}
</script>
<style>

</style>
