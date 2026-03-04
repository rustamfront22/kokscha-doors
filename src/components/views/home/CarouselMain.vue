<template>
  <section class="hero">
    <!-- VIDEO BACKGROUND -->
    <div class="hero__media">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div class="hero__overlay"></div>
    </div>

    <!-- CONTENT -->
    <div class="hero__inner">
      <div class="hero__content">
        <div class="hero__kicker">kokscha doors</div>
        <div class="hero__subkicker">Официальный сайт фабрики</div>

        <h1 class="hero__title">Двери <span>&</span> Интерьер</h1>

        <p class="hero__facts">
          4+ лет на рынке · 200+ моделей · 500+ вариантов отделки · Подбор,
          доставка, установка под ключ
        </p>

        <div class="hero__actions">
          <a class="hero__phone" href="tel:+998900000000">+998 90 130 10 10</a>

          <RouterLink :to="{ name: 'products' }" class="btn btn-primary">
            Каталог
          </RouterLink>

          <a href="#lead-form" class="btn btn-outline">Оставить заявку</a>
        </div>

        <!-- STATS -->
        <div class="hero__stats">
          <div class="stat">
            <div class="stat__num">7</div>
            <div class="stat__label">лет гарантии</div>
          </div>

          <div class="stat">
            <div class="stat__num">200+</div>
            <div class="stat__label">моделей</div>
          </div>

          <div class="stat">
            <div class="stat__num">500+</div>
            <div class="stat__label">цветов/отделок</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* FULLSCREEN HERO */
.hero {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* OPTIONAL: компенсируем левый сайдбар (84px / 72px) чтобы видео было реально "во весь экран" */
.hero {
  margin-left: -84px;
}
@media (max-width: 1024px) {
  .hero {
    margin-left: -72px;
  }
}
@media (max-width: 768px) {
  .hero {
    margin-left: 0;
  }
}

/* VIDEO LAYER */
.hero__media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* чуть "премиум" эффект */
  transform: scale(1.02);
}

/* OVERLAY */
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.75) 22%,
    rgba(255, 255, 255, 0.22) 55%,
    rgba(255, 255, 255, 0) 75%
  );
}

/* CONTENT LAYER */
.hero__inner {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8%;
}

@media (max-width: 1024px) {
  .hero__inner {
    padding: 0 6%;
  }
}
@media (max-width: 768px) {
  .hero__inner {
    padding: 0 18px;
  }
}

.hero__content {
  max-width: 720px;
}

/* TYPO */
.hero__kicker {
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-weight: 700;
  font-size: 12px;
  color: #111;
  opacity: 0.72;
  margin-bottom: 8px;
}

.hero__subkicker {
  font-size: 14px;
  color: #111;
  opacity: 0.75;
  margin-bottom: 14px;
}

.hero__title {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: clamp(38px, 5vw, 74px);
  line-height: 1.05;
  margin-bottom: 14px;
  color: #111;
}
.hero__title span {
  opacity: 0.8;
}

.hero__facts {
  max-width: 680px;
  font-size: 16px;
  line-height: 1.65;
  color: rgba(17, 17, 17, 0.68);
  margin-bottom: 22px;
}

/* ACTIONS */
.hero__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.hero__phone {
  font-weight: 800;
  color: #111;
  text-decoration: none;
  padding: 10px 0;
}
.hero__phone:hover {
  text-decoration: underline;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 14px;
  font-weight: 900;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background 0.2s ease, border-color 0.2s ease;
  user-select: none;
}
.btn:active {
  transform: translateY(1px);
}

.btn-primary {
  color: #111;
  background: rgba(200, 161, 101, 0.92);
  border: 1px solid rgba(200, 161, 101, 0.6);
  box-shadow: 0 18px 50px rgba(200, 161, 101, 0.18);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 70px rgba(200, 161, 101, 0.26);
}

.btn-outline {
  color: rgba(17, 17, 17, 0.88);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(17, 17, 17, 0.12);
  backdrop-filter: blur(8px);
}
.btn-outline:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.82);
}

/* STATS */
.hero__stats {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.stat {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #e7e5e4;
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  min-width: 160px;
}

@media (max-width: 480px) {
  .stat {
    min-width: 140px;
    padding: 12px 14px;
  }
}

.stat__num {
  font-size: 28px;
  font-weight: 900;
  color: #111;
}
.stat__label {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.55);
}

/* чтобы по видео нельзя было кликать */
.hero__media,
.hero__video,
.hero__overlay {
  pointer-events: none;
}
</style>