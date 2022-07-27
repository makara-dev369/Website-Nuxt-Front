<template>
  <div>
    <div class="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <h1 class="font-bold text-2xl py-5">Section Template</h1>

      <!-- <dialog-section v-show="showDialog" @close-modal="reload" /> -->
      <component
        :is="sectionComponet"
        v-show="editDialog"
        :dataObj="objData"
        @close-modal="reload"
      ></component>

      <div class="flex py-2 justify-between">
        <NuxtLink
          to="/dashboard/page"
          class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          Back
        </NuxtLink>

        <button
          type="button"
          @click="clickCreate"
          class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
          Add Section
        </button>
      </div>
      <div class="content">
        <code>{{ content }}</code>
      </div>
      <div class="flex justify-start flex-wrap space-x-5">
        <div v-for="data in section" :key="data.id">
          <div
            class="z-10 overflow-hidden border border-gray-600 shadow-sm rounded-md h-auto w-64 md:w-64 cursor-pointer p-4 bg-indigo-50 transition duration-200 ease-in-out transform hover:translate-y-0.5 hover:shadow-md my-5"
          >
            <div class="w-full block h-full">
              <img
                alt="blog photo"
                src="/pixeltrue-icons-web-design.png"
                class="max-h-60 h-24 w-full object-cover"
              />

              <div class="w-full">
                <p
                  class="text-gray-800 dark:text-white text-2xl font-medium mb-2"
                >
                  {{ data.sectionName }}
                </p>
                <p
                  class="text-gray-600 dark:text-gray-300 font-light text-md overl max-h-48 h-32 overflow-auto whitespace-normal scrollbarl"
                >
                  {{ data.description }}
                </p>
                <div
                  class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-200 rounded-2xl mt-4 w-auto"
                >
                  # {{ data.meta }}
                </div>
                <div
                  class="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5"
                >
                  <button
                    class="rounded-2xl text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-1 mb-2"
                  >
                    clone
                  </button>
                  <button
                    @click="editSection(data.id)"
                    class="rounded-2xl text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-1 mb-2"
                  >
                    Edit
                  </button>
                  <button
                    class="rounded-2xl text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-1 mb-2"
                  >
                    Use
                  </button>
                  <button
                    @click="deleteSection(data.id)"
                    class="rounded-2xl text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-1 mb-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dialogSection from "../../../components/dialog-section.vue";
export default {
  components: { dialogSection },
  layout: "master",
  middleware: "anti-protect",
  data() {
    return {
      showDialog: false,
      section: [],
      editDialog: false,
      objData: {},
      sectionComponet: "",
      content:
        "Noted : Section name must to be the same name of component 👻🤖",
    };
  },
  mounted() {
    this.getDataSection();
  },
  methods: {
    async getDataSection() {
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      };
      const id = this.$route.params.id;
      await this.$axios.get(`/section/${id}`, auth).then((rep) => {
        if (rep.data) {
          this.section = rep.data;
        }
      });
    },
    reload() {
      this.showDialog = false;
      this.editDialog = false;
      this.sectionComponet = "";
      this.getDataSection();
    },
    clickCreate() {
      this.sectionComponet = "dialog-section";
      const pageId = Number(this.$route.params.id);
      this.objData = {
        pageId: pageId,
      };
      this.editDialog = true;
    },

    async editSection(id) {
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      };
      const pageId = Number(this.$route.params.id);
      const sectionId = Number(id);
      const data = {
        id: sectionId,
        pageId: pageId,
      };
      await this.$axios
        .post(`/section/edit-secttion`, data, auth)
        .then((rep) => {
          if (rep.data) {
            this.sectionComponet = "dialog-edit-section";
            this.objData = rep.data[0];
            this.editDialog = true;
            console.log(rep.data);
          }
        });
    },
    async deleteSection(id) {
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      };
      const pageId = Number(this.$route.params.id);
      const sectionId = Number(id);
      const data = {
        id: sectionId,
        pageId: pageId,
      };
      await this.$axios.post(`/section/destroy`, data, auth).then((rep) => {
        if (rep.data) {
          alert("sucess");
        }
      });
    },
  },
};
</script>

<style scoped>
.scrollbarl::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbarl {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.content code {
  display: block;
  white-space: pre-wrap;
  font-size: 0.8rem;
  padding: 0.75rem 1rem;
  background-color: #e9ecef;
  color: #495057;
}
</style>
