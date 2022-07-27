<template>
  <div class="h-screen w-screen">
    <Header />
    <div class="bg-gray-100 overflow-auto">
      <main
        class="container mx-auto px-4 py-5"
        style="height: calc(100vh - 4rem)"
      >
        <Nuxt />
      </main>
    </div>
  </div>
</template>
