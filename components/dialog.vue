<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal bg-gray-100 rounded-md px-10 top-36 relative" @click.stop>
      <form
        class="flex flex flex-col justify-between h-full relative overflow-hidden py-4"
        action="#"
        method="POST"
      >
        <div>
          <h1 class="text-left font-bold text-2xl py-5">Create Page</h1>
          <div class="flex justify-between overflow-auto space-x-5">
            <div class="w-1/2">
              <input type="hidden" name="remember" value="true" />
              <div class="">
                <div class="text-left py-1">
                  <label
                    for="page name"
                    class="text-gray-600 mb-2 text-sm font-bold"
                    >Page name</label
                  >
                  <input
                    name="Page name"
                    v-model="pageName"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Page name..."
                  />
                </div>
                <div class="text-left py-1">
                  <label for="link" class="text-gray-600 mb-2 text-sm font-bold"
                    >Link</label
                  >
                  <input
                    name="link"
                    v-model="link"
                    type="text"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Link..."
                  />
                </div>
                <div class="text-left py-1">
                  <label for="meta" class="text-gray-600 mb-2 text-sm font-bold"
                    >Meta</label
                  >
                  <input
                    id="meta"
                    name="meta"
                    v-model="meta"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Meta..."
                  />
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <div>
                <div class="text-left py-1">
                  <label
                    for="email-address"
                    class="text-gray-600 mb-2 text-sm font-bold"
                    >Description</label
                  >
                  <textarea
                    name=""
                    v-model="description"
                    id=""
                    cols="20"
                    rows="10"
                    placeholder="Description ...."
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            @click="submit"
            class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Page
          </button>
        </div>
      </form>
    </div>
    <div class="close" @click="$emit('close-modal')">
      <!-- <img class="close-img" src="/close-x.png" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      pageName: "",
      link: "",
      meta: "",
      description: "",
    };
  },
  methods: {
    async submit() {
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      };
      const data = {
        pageName: this.pageName,
        link: this.link,
        meta: this.meta,
        description: this.description,
      };
      await this.$axios.post(`/page/create`, data, auth).then((rep) => {
        if (rep.data) {
          this.$emit("close-modal");
        }
      });
    },
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #595959da;
}

.modal {
  text-align: center;
  width: 40vw;
  height: 50vh;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}
</style>
