<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <!-- Логотип -->
        <RouterLink to="/" class="logo">
          <img
            src="../../assets/img/kokscha_icon.svg"
            alt=""
            width="50"
            height="50"
          />
          <!-- потом сюда логотип Ko'kcha -->
        </RouterLink>

        <!-- Меню -->
        <nav class="header__navbar">
          <ul>
            <li>
              <RouterLink :to="{ name: 'index' }">Главная</RouterLink>
            </li>

            <li>
              <RouterLink :to="{ name: 'products' }">Каталог</RouterLink>
            </li>

            <!-- новые страницы позже -->
            <li>
              <RouterLink :to="{ name: 'about' }">О нас</RouterLink>
            </li>

            <li>
              <RouterLink :to="{ name: 'partners' }">Партнёры</RouterLink>
            </li>
          </ul>
        </nav>

        <!-- вместо блока header__contact -->
        <div class="header__contact">
          <RouterLink
            :to="{ name: 'index', hash: '#lead-form' }"
            class="call-btn"
          >
            Оставить заявку
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref } from "vue";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
