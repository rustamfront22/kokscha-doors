<template>
  <div class="layout">
    <Header />
    <main class="main">
      <RouterView />
    </main>
    <Footer />
    <CallbackWidget />
  </div>
</template>

<script setup>
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
import CallbackWidget from "./components/partials/CallbackWidget.vue";
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>