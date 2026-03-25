<template>
  <footer class="footer" id="contacts">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <RouterLink to="/" class="footer__logo">
            <img src="@/assets/img/kokscha_logo_transparent.svg" alt="Ko'kcha" />
          </RouterLink>
          <p class="footer__text">
            Современные двери и интерьерные решения. Подбор, доставка и монтаж под ключ.
          </p>
        </div>

        <div class="footer__col">
          <h3>Компания</h3>
          <RouterLink :to="{ name: 'about' }">Компания</RouterLink>
          <RouterLink :to="{ name: 'partners' }">Партнёры</RouterLink>
          <RouterLink :to="{ name: 'products' }">Каталог</RouterLink>
          <RouterLink :to="{ name: 'builders' }">Для строителей</RouterLink>
           <RouterLink :to="{ name: 'designers' }">Для дизайнеров</RouterLink>
        </div>

        <div class="footer__col">
          <h3>Контакты</h3>
          <a href="tel:+998901301010">+998 90 130 10 10</a>
          <a href="mailto:info@kokscha.uz">info@kokscha.uz</a>
          <p>Ташкент, Узбекистан</p>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© 2026 Ko'kcha. Все права защищены.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 80px;
  padding: 56px 0 24px;
  background: #f8f8f8;
  border-top: 1px solid #e5e7eb;
}

.container {
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 28px;
}

.footer__logo img {
  height: 60px;
  width: auto;
}

.footer__text {
  margin-top: 14px;
  max-width: 320px;
  line-height: 1.7;
  color: #6b7280;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col h3 {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
}

.footer__col a,
.footer__col p {
  text-decoration: none;
  color: #6b7280;
  line-height: 1.6;
}

.footer__bottom {
  border-top: 1px solid #e5e7eb;
  padding-top: 18px;
  color: #9ca3af;
  font-size: 14px;
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .container {
    width: calc(100% - 24px);
  }

  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>