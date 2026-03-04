<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import HeroSimple from "@/components/sections/HeroSimple.vue";
import LeadForm from "@/components/views/home/LeadForm.vue";

const mounted = ref(false);
const parallaxY = ref(0);

let io;
const revealEls = [];

const onScroll = () => {
  // лёгкий параллакс для фона
  parallaxY.value = Math.min(80, window.scrollY * 0.08);
};

onMounted(() => {
  requestAnimationFrame(() => (mounted.value = true));
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // reveal on scroll
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-in");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    revealEls.push(el);
    io.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (io) io.disconnect();
});
</script>

<template>
  <div class="partners" :class="{ 'is-mounted': mounted }">
    <!-- фон -->
    <div class="bg">
      <div class="bg__grid" />
      <div class="bg__glow bg__glow--a" :style="{ transform: `translateY(${parallaxY}px)` }" />
      <div class="bg__glow bg__glow--b" :style="{ transform: `translateY(${parallaxY * 0.7}px)` }" />
      <div class="bg__noise" />
    </div>

    <!-- HERO -->
    <HeroSimple
      title="Партнёрам"
      subtitle="Стабильные поставки, поддержка и выгодные условия по всему Узбекистану. Откройте бренд-секцию или фирменный салон вместе с Ko'kcha Eshiklar Premium."
      ctaText="Оставить заявку"
      ctaTo="#lead-form"
    />

    <!-- CONTENT -->
    <section class="section">
      <div class="container">
        <!-- KPI -->
        <div class="kpis" data-reveal>
          <div class="kpi">
            <div class="kpi__num">+4</div>
            <div class="kpi__text">года на рынке</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">10 лет</div>
            <div class="kpi__text">гарантия на двери</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">ГОСТ/ISO</div>
            <div class="kpi__text">стандарты качества</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">min/max</div>
            <div class="kpi__text">под размер</div>
          </div>
        </div>

        <!-- intro -->
        <div class="heroCard" data-reveal>
          <div class="heroCard__badge">Партнёрская программа</div>
          <h2 class="heroCard__title">Кокча-двери premium — сотрудничество, которое приносит прибыль</h2>
          <p class="heroCard__text">
            Мы производим межкомнатные двери европейского уровня и обеспечиваем партнёрам комплексную поддержку:
            от подбора витрины и образцов до консультаций и стабильных поставок.
          </p>

          <div class="heroCard__actions">
            <a class="btn btn--primary" href="#lead-form">Оставить заявку</a>
            <a class="btn btn--ghost" href="tel:+998900000000">Позвонить</a>
          </div>
        </div>

        <!-- cards grid -->
        <div class="grid" data-reveal>
          <article class="card">
            <div class="card__top">
              <div class="icon">🤝</div>
              <h3 class="card__title">Что мы предлагаем</h3>
            </div>
            <ul class="list">
              <li>Стабильность партнёрства и поставок</li>
              <li>Скидки на выставочные образцы</li>
              <li>Индивидуальный подбор витрины</li>
              <li>Консультационное сопровождение</li>
              <li>Лучшее соотношение цена/качество</li>
              <li>Бесплатные образцы материалов, декора и печатной продукции</li>
            </ul>
          </article>

          <article class="card">
            <div class="card__top">
              <div class="icon">🛠️</div>
              <h3 class="card__title">Преимущества продукции</h3>
            </div>
            <ul class="list">
              <li>Изготовление под размер (min/max)</li>
              <li>Большой модельный ряд и палитра</li>
              <li>ПВХ-Шпон, Эмаль, Патина</li>
              <li>Комплексное решение для интерьера</li>
              <li>Европейские технологии, цельномассивное наполнение</li>
              <li>Короткие сроки изготовления</li>
            </ul>
          </article>

          <article class="card card--wide">
            <div class="card__top">
              <div class="icon">🏗️</div>
              <h3 class="card__title">Кому это подходит</h3>
            </div>
            <p class="muted">
              Сотрудничаем со строителями, подрядчиками и организациями, которые комплектуют объекты межкомнатными
              дверьми. Поставляем дверные блоки в сборе, готовые к установке.
            </p>

            <div class="chips">
              <span class="chip">Монобренд салон</span>
              <span class="chip">Бренд-секция</span>
              <span class="chip">Комплектация объектов</span>
              <span class="chip">Опт и розница</span>
            </div>
          </article>
        </div>

        <!-- steps -->
        <div class="steps" data-reveal>
          <div class="steps__head">
            <h2 class="steps__title">Как начать сотрудничество</h2>
            <p class="steps__sub">3 простых шага — и мы подберём условия под ваш город и формат.</p>
          </div>

          <div class="steps__grid">
            <div class="step">
              <div class="step__n">01</div>
              <div class="step__t">Оставьте заявку</div>
              <div class="step__d">Укажите телефон и комментарий — что именно вам нужно.</div>
            </div>
            <div class="step">
              <div class="step__n">02</div>
              <div class="step__t">Подберём витрину</div>
              <div class="step__d">Поможем с ассортиментом, декором и выставочными образцами.</div>
            </div>
            <div class="step">
              <div class="step__n">03</div>
              <div class="step__t">Запускаем продажи</div>
              <div class="step__d">Стабильные поставки и сопровождение по стандартам бренда.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LeadForm -->
    <LeadForm />
  </div>
</template>

<style scoped>
/* =========================
   BASE + RESPONSIVE LAYOUT
========================= */
.partners {
  position: relative;
  min-height: 100vh;
  overflow: clip;
  color:  rgba(255,255,255,.68);
}

/* контейнер — сразу адаптивный */
.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}
@media (max-width: 768px) {
  .container { width: calc(100% - 28px); }
}
@media (max-width: 420px) {
  .container { width: calc(100% - 20px); }
}

.section {
  position: relative;
  padding: clamp(18px, 3vw, 30px) 0 clamp(60px, 6vw, 90px);
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
    radial-gradient(900px 500px at 15% 10%, rgba(200,161,101,.22), transparent 60%),
    radial-gradient(700px 420px at 85% 20%, rgba(200,161,101,.16), transparent 62%),
    radial-gradient(900px 600px at 50% 90%, rgba(255,255,255,.12), transparent 60%),
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
  left: -120px;
  top: 140px;
  background: radial-gradient(circle, rgba(200,161,101,.75), transparent 65%);
}
.bg__glow--b {
  right: -140px;
  top: 220px;
  background: radial-gradient(circle, rgba(200,161,101,.55), transparent 65%);
}

.bg__noise {
  position: absolute;
  inset: 0;
  opacity: .06;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
}

/* =========================
   REVEAL ANIMATION
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
   KPI ROW
========================= */
.kpis {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 10px;
  margin-bottom: 16px;
}
@media (max-width: 980px) {
  .kpis { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 420px) {
  .kpis { grid-template-columns: 1fr; }
}

.kpi {
  border-radius: 18px;
  padding: 16px 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 60px rgba(0,0,0,.25);
}
.kpi__num {
  color: rgba(255,255,255,.92);
  font-weight: 900;
  letter-spacing: .02em;
  font-size: clamp(18px, 2.2vw, 26px);
}
.kpi__text {
  margin-top: 6px;
  color: rgba(255,255,255,.62);
  font-size: 13px;
}

/* =========================
   HERO CARD
========================= */
.heroCard {
  border-radius: 22px;
  padding: clamp(18px, 2.8vw, 26px);
  background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.06));
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 80px rgba(0,0,0,.30);
  position: relative;
  overflow: hidden;
}
.heroCard::after {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle at 30% 20%, rgba(200,161,101,.25), transparent 55%);
  transform: rotate(12deg);
}

.heroCard__badge {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  color: rgba(255,255,255,.82);
  background: rgba(200,161,101,.16);
  border: 1px solid rgba(200,161,101,.22);
}
.heroCard__title {
  position: relative;
  margin-top: 12px;
  color: rgba(255,255,255,.92);
  font-weight: 900;
  line-height: 1.14;
  font-size: clamp(20px, 3vw, 36px);
}
.heroCard__text {
  position: relative;
  margin-top: 10px;
  color: rgba(255,255,255,.68);
  line-height: 1.7;
  font-size: 14.5px;
  max-width: 86ch;
}

.heroCard__actions {
  position: relative;
  margin-top: 14px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* =========================
   BUTTONS
========================= */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  user-select: none;
}
.btn:active { transform: translateY(1px); }

.btn--primary {
  color: #111;
  background: rgba(200,161,101, .92);
  border: 1px solid rgba(200,161,101, .55);
  box-shadow: 0 18px 50px rgba(200,161,101,.18);
}
.btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 70px rgba(200,161,101,.26);
}

.btn--ghost {
  color: rgba(255,255,255,.88);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.14);
}
.btn--ghost:hover {
  background: rgba(255,255,255,.10);
  transform: translateY(-1px);
}

/* =========================
   GRID CARDS
========================= */
.grid {
  margin-top: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 980px) {
  .grid { grid-template-columns: 1fr; }
}

.card {
  border-radius: 22px;
  padding: 18px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 70px rgba(0,0,0,.28);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
  position: relative;
  overflow: hidden;
  
}
.card::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: radial-gradient(circle at 20% 20%, rgba(200,161,101,.20), transparent 55%);
  opacity: 0;
  transition: opacity .25s ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: rgba(200,161,101,.35);
  box-shadow: 0 26px 90px rgba(0,0,0,.35);
}
.card:hover::before { opacity: 1; }

.card__top {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(200,161,101,.16);
  border: 1px solid rgba(200,161,101,.22);
}
.card__title {
  position: relative;
  color: rgba(255,255,255,.92);
  font-size: 18px;
  font-weight: 900;
}

.list {
  position: relative;
  margin-top: 12px;
  padding-left: 18px;
  color: rgba(255,255,255,.70);
  line-height: 1.85;
  font-size: 14px;
}

.muted {
  position: relative;
  margin-top: 12px;
  color: rgba(255,255,255,.68);
  line-height: 1.75;
  font-size: 14px;
}
.card--wide {
  grid-column: span 2;
}
@media (max-width: 980px) {
  .card--wide { grid-column: auto; }
}

.chips {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}
.chip {
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 12px;
  color: rgba(255,255,255,.82);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
}

/* =========================
   STEPS
========================= */
.steps {
  margin-top: 18px;
  border-radius: 22px;
  padding: clamp(18px, 2.8vw, 24px);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 70px rgba(0,0,0,.28);
}
.steps__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.steps__title {
  color: rgba(255,255,255,.92);
  font-weight: 900;
  font-size: clamp(18px, 2.5vw, 28px);
}
.steps__sub {
  color: rgba(255,255,255,.62);
  line-height: 1.6;
  max-width: 62ch;
  font-size: 14px;
}

.steps__grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
@media (max-width: 980px) {
  .steps__grid { grid-template-columns: 1fr; }
}
.step {
  border-radius: 20px;
  padding: 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  transition: transform .25s ease, border-color .25s ease;
}
.step:hover {
  transform: translateY(-2px);
  border-color: rgba(200,161,101,.32);
}
.step__n {
  font-weight: 1000;
  letter-spacing: .06em;
  color: rgba(200,161,101,.92);
}
.step__t {
  margin-top: 6px;
  font-weight: 900;
  color: rgba(255,255,255,.92);
}
.step__d {
  margin-top: 6px;
  color: rgba(255,255,255,.64);
  line-height: 1.65;
  font-size: 13.5px;
}
</style>