<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import CarouselMain from "@/components/views/home/CarouselMain.vue";
import NewProducts from "@/components/views/home/NewProducts.vue";
import AllProducts from "@/components/views/home/AllProducts.vue";
import CarouselFooter from "@/components/views/home/CarouselFooter.vue";
import LeadForm from "@/components/views/home/LeadForm.vue";

// плавные появления блоков
const mounted = ref(false);

let io;
onMounted(() => {
  requestAnimationFrame(() => (mounted.value = true));

  io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
});

onUnmounted(() => {
  if (io) io.disconnect();
});
</script>

<template>
  <!-- ✅ page нужен чтобы работал padding-left под SideHeader (base.scss) -->
  <div class="page home" :class="{ 'is-mounted': mounted }">
    <!-- BACKGROUND FX -->
    <div class="bg">
      <div class="bg__grid" />
      <div class="bg__glow bg__glow--a" />
      <div class="bg__glow bg__glow--b" />
      <div class="bg__noise" />
    </div>

    <section class="section">
      <div data-reveal>
          <CarouselMain />
        </div>
      <div class="container">
        <!-- HERO / CAROUSEL -->
        

        <!-- Quick badges -->
        <div class="badges" data-reveal>
          <div class="badge">Премиум двери</div>
          <div class="badge">ГОСТ / ISO</div>
          <div class="badge">Гарантия до 10 лет</div>
          <div class="badge">Под размер (min/max)</div>
        </div>

        <!-- New Products -->
        <div class="block" data-reveal>
          <div class="block__head">
            <h2 class="h2">Новые модели</h2>
            <p class="sub">Свежие позиции из каталога — под любой интерьер.</p>
          </div>
          <div class="block__body">
            <NewProducts />
          </div>
        </div>

        <!-- All Products -->
        <div class="block" data-reveal>
          <div class="block__head">
            <h2 class="h2">Каталог</h2>
            <p class="sub">Выберите модель и оставьте заявку — подберём комплектацию.</p>
          </div>
          <div class="block__body">
            <AllProducts />
          </div>
        </div>

        <!-- Optional footer-carousel -->
        <div class="block" data-reveal>
          <CarouselFooter />
        </div>

        <!-- Lead Form -->
        <div class="block" data-reveal>
          <div class="block__head">
            <h2 class="h2">Оставить заявку</h2>
            <p class="sub">
              Заполните форму — мы свяжемся с вами и предложим лучшие варианты.
            </p>
          </div>
          <div class="block__body">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* =========================
   LAYOUT
========================= */
.home {
  position: relative;
  min-height: 100vh;
  overflow: clip;
}

/* общий контейнер */
.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}
@media (max-width: 768px) {
  .container {
    width: calc(100% - 28px);
  }
}
@media (max-width: 420px) {
  .container {
    width: calc(100% - 20px);
  }
}

.section {
  padding: clamp(16px, 2.4vw, 24px) 0 clamp(60px, 6vw, 96px);
}

/* =========================
   BACKGROUND FX
========================= */
.bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(900px 520px at 12% 12%, rgba(200,161,101,.20), transparent 60%),
    radial-gradient(760px 480px at 88% 18%, rgba(200,161,101,.14), transparent 62%),
    radial-gradient(900px 600px at 50% 92%, rgba(255,255,255,.10), transparent 60%),
    #0b0b0c;
}

.bg__grid {
  position: absolute;
  inset: 0;
  opacity: .22;
  background-image:
    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at 50% 35%, black 45%, transparent 75%);
}

.bg__glow {
  position: absolute;
  width: 520px;
  height: 520px;
  filter: blur(30px);
  opacity: .35;
}
.bg__glow--a {
  left: -140px;
  top: 140px;
  background: radial-gradient(circle, rgba(200,161,101,.72), transparent 65%);
}
.bg__glow--b {
  right: -140px;
  top: 220px;
  background: radial-gradient(circle, rgba(200,161,101,.52), transparent 65%);
}

.bg__noise {
  position: absolute;
  inset: 0;
  opacity: .06;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
}

/* =========================
   REVEAL (smooth)
========================= */
[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  filter: blur(6px);
  transition: opacity .6s ease, transform .6s ease, filter .6s ease;
}
.is-mounted [data-reveal].is-in {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* =========================
   BADGES
========================= */
.badges {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.badge {
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 12px;
  color: rgba(255,255,255,.84);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(14px);
}
@media (max-width: 420px) {
  .badge {
    width: 100%;
    text-align: center;
  }
}

/* =========================
   BLOCKS
========================= */
.block {
  margin-top: 18px;
  border-radius: 22px;
  padding: clamp(14px, 2vw, 18px);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 70px rgba(0,0,0,.28);
}

.block__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.h2 {
  margin: 0;
  color: rgba(255,255,255,.92);
  font-weight: 1000;
  font-size: clamp(18px, 2.5vw, 28px);
}
.sub {
  margin: 0;
  color: rgba(255,255,255,.62);
  line-height: 1.6;
  max-width: 64ch;
  font-size: 14px;
}

.block__body {
  border-radius: 18px;
  overflow: hidden;
}
</style>