<template>
  <header class="header">
    <div class="header__top">
      <div class="container header__top-inner">
        <div class="header__meta">
          <span class="header__city">📍 Ташкент</span>
        </div>

        <nav class="header__mini-nav">
          <button class="header__lang" type="button">RU</button>
        </nav>
      </div>
    </div>

    <div class="header__main">
      <div class="container header__main-inner">
        <RouterLink to="/" class="header__logo">
          <img
            src="@/assets/img/kokscha_logo_transparent.svg"
            alt="Ko'kcha"
          />
        </RouterLink>

        <nav class="header__nav">
          <RouterLink :to="{ name: 'about' }">Компания</RouterLink>
          <RouterLink :to="{ name: 'products' }">Каталог</RouterLink>
          <RouterLink :to="{ name: 'partners' }">Сотрудничество</RouterLink>
           <RouterLink :to="{ name: 'builders' }">Для строителей</RouterLink>
           <RouterLink :to="{ name: 'designers' }">Для дизайнеров</RouterLink>
          
        </nav>

        <button class="header__burger" type="button" @click="mobileOpen = !mobileOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <transition name="fade">
      <div v-if="mobileOpen" class="mobile-menu">
        <div class="container mobile-menu__inner">
          <RouterLink @click="mobileOpen = false" :to="{ name: 'about' }">Компания</RouterLink>
          <RouterLink @click="mobileOpen = false" :to="{ name: 'products' }">Каталог</RouterLink>
          <RouterLink @click="mobileOpen = false" :to="{ name: 'partners' }">Сотрудничество</RouterLink>
          <RouterLink  @click="mobileOpen = false" :to="{ name: 'builders' }">Для строителей</RouterLink>
          <RouterLink  @click="mobileOpen = false" :to="{ name: 'designers' }">Для дизайнеров</RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileOpen = ref(false);
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.container {
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
}

.header__top {
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}

.header__top-inner {
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header__meta,
.header__mini-nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.header__city,
.header__mini-nav a,
.header__lang {
  font-size: 14px;
  color: #6b7280;
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
}

.header__main-inner {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.header__logo img {
  height: 56px;
  width: auto;
  object-fit: contain;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
}

.header__nav a {
  position: relative;
  text-decoration: none;
  color: #111827;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 6px;
}

.header__nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #111827;
  transform: scaleX(1);
  transform-origin: left;
}

.header__burger {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 0 10px;
}

.header__burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #111827;
}

.mobile-menu {
  border-top: 1px solid #e5e7eb;
  background: #fff;
}

.mobile-menu__inner {
  display: flex;
  flex-direction: column;
  padding: 16px 0 20px;
}

.mobile-menu__inner a {
  color: #111827;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1100px) {
  .header__nav {
    display: none;
  }

  .header__burger {
    display: flex;
  }
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 24px);
  }

  .header__top {
    display: none;
  }

  .header__main-inner {
    min-height: 72px;
  }

  .header__logo img {
    height: 46px;
  }
}
</style>