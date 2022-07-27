<template>
  <div class="modal-overlay z-50" @click="$emit('close-modal')">
    <div class="modal bg-gray-100 rounded-md px-10 top-36 relative" @click.stop>
      <form
        class="flex flex flex-col justify-between h-full relative overflow-hidden py-4"
        action="#"
        method="POST"
      >
        <div>
          <h1 class="text-left font-bold text-2xl py-5">Add Section</h1>
          <div
            class="flex justify-between overflow-auto space-x-5 overflow-y-scroll h-96"
          >
            <div class="w-1/2 overflow-y-scroll pr-5">
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
                    v-model="page"
                    readonly
                    class="appearance-none rounded-none relative block w-full font-bold px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>

                <div class="text-left py-1">
                  <label
                    for="page name"
                    class="text-gray-600 mb-2 text-sm font-bold"
                    >Section name</label
                  >
                  <input
                    name="Section name"
                    v-model="sectionName"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  />
                </div>
                <div class="text-left py-1">
                  <label for="link" class="text-gray-600 mb-2 text-sm font-bold"
                    >Custom field 1</label
                  >
                  <input
                    name="Custom field 1"
                    v-model="customField1"
                    type="text"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div class="text-left py-1">
                  <label for="link" class="text-gray-600 mb-2 text-sm font-bold"
                    >Custom field 2</label
                  >
                  <input
                    name="Custom field 1"
                    v-model="customField2"
                    type="text"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div class="text-left py-1">
                  <label for="link" class="text-gray-600 mb-2 text-sm font-bold"
                    >Custom field 3</label
                  >
                  <input
                    name="Custom field 1"
                    v-model="customField3"
                    type="text"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div class="text-left py-1">
                  <label for="link" class="text-gray-600 mb-2 text-sm font-bold"
                    >Custom field 4</label
                  >
                  <input
                    name="Custom field 1"
                    v-model="customField4"
                    type="text"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div class="text-left py-1">
                  <label for="link" class="text-gray-600 mb-2 text-sm font-bold"
                    >Custom field 5</label
                  >
                  <input
                    name="Custom field 1"
                    v-model="customField5"
                    type="text"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                    id=""
                    cols="20"
                    rows="10"
                    v-model="description"
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
            class="mx-2 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Section
          </button>
        </div>
      </form>
    </div>
    <div class="close" @click="$emit('close-modal')"></div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    dataObj: Object,
  },
  data() {
    return {
      page: "",
      sectionId: "",
      sectionName: "",
      meta: "",
      description: "",
      customField1: "",
      customField2: "",
      customField3: "",
      customField4: "",
      customField5: "",
      customField6: "",
      customField7: "",
      customField8: "",
      customField9: "",
      customField10: "",
    };
  },
  mounted() {
    this.page = Number(this.$props.dataObj.pageId);
    this.sectionId = Number(this.$props.dataObj.id);
    // this.sectionName = this.$props.dataObj.sectionName;
    // this.meta = this.$props.dataObj.meta;
    // this.description = this.$props.dataObj.description;
    // this.customField1 = this.$props.dataObj.customField1;
    // this.customField2 = this.$props.dataObj.customField2;
    // this.customField3 = this.$props.dataObj.customField3;
    // this.customField4 = this.$props.dataObj.customField4;
    // this.customField5 = this.$props.dataObj.customField5;
    // this.customField6 = this.$props.dataObj.customField6;
    // this.customField7 = this.$props.dataObj.customField7;
    // this.customField8 = this.$props.dataObj.customField8;
    // this.customField9 = this.$props.dataObj.customField9;
    // this.customField10 = this.$props.dataObj.customField10;
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
        id: this.sectionId,
        pageId: this.page,
        sectionName: this.sectionName,
        meta: this.meta,
        description: this.description,
        customField1: this.customField1,
        customField2: this.customField2,
        customField3: this.customField3,
        customField4: this.customField4,
        customField5: this.customField5,
        customField6: this.customField6,
        customField7: this.customField7,
        customField8: this.customField8,
        customField9: this.customField9,
        customField10: this.customField10,
      };
      await this.$axios.post(`/section/create`, data, auth).then((rep) => {
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
  width: 70vw;
  height: 60vh;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}
</style>
