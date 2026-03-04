<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <!-- ЛОГО -->
        <div class="footer__logo">
          <RouterLink to="/">
            <Icon icon="ph:meta-logo-bold" />
            <!-- потом поставим логотип Ko'kcha -->
          </RouterLink>
          <p class="footer__desc">
            Надёжные и качественные двери в Ташкенте. Установка под ключ и
            гарантия.
          </p>
        </div>

        <!-- МЕНЮ -->
        <div class="footer__menu">
          <h3>Меню</h3>
          <ul>
            <li><RouterLink :to="{ name: 'index' }">Главная</RouterLink></li>
            <li>
              <RouterLink :to="{ name: 'products' }">Каталог дверей</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'about' }">О нас</RouterLink>
            </li>

            <li>
              <RouterLink :to="{ name: 'partners' }">Партнёры</RouterLink>
            </li>
          </ul>
        </div>

        <!-- КАТЕГОРИИ (можно оставить) -->
        <div class="footer__categories">
          <Category />
        </div>

        <!-- КОНТАКТЫ -->
        <div class="footer__contacts">
          <h3>Контакты</h3>
          <p>📍 Ташкент</p>
          <p>📞 +998 90 123 45 67</p>
          <p>⏰ 9:00 — 20:00</p>

          <div class="footer__btn">
            <RouterLink
              :to="{ name: 'index', hash: '#lead-form' }"
              class="call-btn"
            >
              Оставить заявку
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        © 2026 Ko'kcha eshiklar. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import Category from "../views/product/Category.vue";
</script>
