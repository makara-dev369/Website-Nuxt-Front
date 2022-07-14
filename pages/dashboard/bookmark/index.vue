<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col">
      <div class="overflow-x-auto shadow-sm">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table
              class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
            >
              <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    class="font-bold text-md py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="font-bold text-md py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="font-bold text-md py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    User email
                  </th>
                  <th scope="col" class="p-4">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <client-only>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                  v-for="data in dataUser"
                  :key="data.id"
                >
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-1" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ data.title }}
                    </td>
                    <td
                      class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                    >
                      {{ data.description }}
                    </td>
                    <td
                      class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ data.user.email }}
                    </td>
                    <td
                      class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                    >
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </client-only>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  layout: "master",
  middleware: "anti-protect",
  data() {
    return {
      dataUser: [],
    };
  },
  mounted() {
    this.getData();
  },
  computed: { ...mapGetters(["getUser", "getLogin"]) },

  methods: {
    async getData() {
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      };
      await this.$axios.get(`/bookmark/all`, auth).then((rep) => {
        if (rep.data) {
          this.dataUser = rep.data;
        }
      });
    },
  },
};
</script>

<style></style>
