<template>
  <main class="wall">
    <Header class="panel" />

    <About class="panel" />

    <Tech v-model="activeTech" class="panel" />

    <Projects :active="activeTech" class="panel" />

    <Footer class="panel" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TechItem } from "./types";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Tech from "./components/Tech.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

import "@/assets/scss/global.scss";

const activeTech = ref<TechItem | null>(null);
</script>

<style scoped>
.panel {
    scroll-snap-align: start;
    height: 100vh;
    overflow-y: scroll;
}

.wall {
    max-height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all .7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  display: none;
}
</style>
