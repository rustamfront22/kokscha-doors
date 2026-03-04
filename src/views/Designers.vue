<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { companyContent } from "@/components/content/companyContent";// ✅ проверь путь (у тебя сейчас так в проекте)
import HeroSimple from "@/components/sections/HeroSimple.vue";
import LeadForm from "@/components/views/home/LeadForm.vue";

const mounted = ref(false);
const parallaxY = ref(0);

let io;
const onScroll = () => {
  parallaxY.value = Math.min(90, window.scrollY * 0.08);
};

onMounted(() => {
  requestAnimationFrame(() => (mounted.value = true));
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (io) io.disconnect();
});

const c = companyContent;

// доп. контент, чтобы страница была “полной”
const perks = [
  {
    title: "Каталоги и материалы",
    text: "Дадим каталоги покрытий и рекламные материалы для удобной работы с заказчиком.",
    icon: "📦",
  },
  {
    title: "Подбор под стиль",
    text: "Подберём двери и декор под любую эпоху и интерьер: классика, прованс, хай-тек и другие.",
    icon: "🎨",
  },
  {
    title: "Декоры в одном стиле",
    text: "Наличники, колонны, карнизы, капители и другие элементы — чтобы завершить образ интерьера.",
    icon: "🧩",
  },
  {
    title: "Под размер (min/max)",
    text: "Индивидуальные размеры и комплектация — под проект и требования клиента.",
    icon: "📐",
  },
];

const howWeWork = [
  { n: "01", t: "Запрос", d: "Вы описываете проект, стиль и пожелания клиента." },
  { n: "02", t: "Подбор", d: "Мы предлагаем модели, покрытия, декор и комплектацию." },
  { n: "03", t: "Согласование", d: "Уточняем размеры, сроки и финальные детали." },
  { n: "04", t: "Поставка", d: "Стабильные поставки и сопровождение на всех этапах." },
];
</script>

<template>
  <div class="designers" :class="{ 'is-mounted': mounted }">
    <!-- BACKGROUND FX -->
    <div class="bg">
      <div class="bg__grid" />
      <div class="bg__glow bg__glow--a" :style="{ transform: `translateY(${parallaxY}px)` }" />
      <div class="bg__glow bg__glow--b" :style="{ transform: `translateY(${parallaxY * 0.7}px)` }" />
      <div class="bg__noise" />
    </div>

    <!-- HERO -->
    <HeroSimple
      :title="c.designers.heroTitle"
      :subtitle="c.designers.heroText"
      ctaText="Получить материалы"
      ctaTo="#lead-form"
    />

    <section class="section">
      <div class="container">
        <!-- KPI -->
        <div class="kpis" data-reveal>
          <div class="kpi">
            <div class="kpi__num">НОВИНКИ</div>
            <div class="kpi__text">ежегодно</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">ГОСТ/ISO</div>
            <div class="kpi__text">стандарты качества</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">ДЕКОР</div>
            <div class="kpi__text">в одном стиле</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">min/max</div>
            <div class="kpi__text">под размер</div>
          </div>
        </div>

        <!-- INTRO CARD -->
        <div class="heroCard" data-reveal>
          <div class="heroCard__badge">Для дизайнеров и архитекторов</div>
          <h2 class="heroCard__title">С нами удобно закрывать проект “под ключ”</h2>
          <p class="heroCard__text">
            В ассортименте Ko'kcha Eshiklar Premium — большой выбор моделей, фактур, покрытий и декоров.
            Мы помогаем подобрать решения под стиль интерьера и бюджет клиента.
          </p>

          <div class="heroCard__actions">
            <a class="btn btn--primary" href="#lead-form">Оставить заявку</a>
            <a class="btn btn--ghost" href="tel:+998900000000">Позвонить</a>
          </div>
        </div>

        <!-- MAIN GRID (твои blocks) -->
        <div class="grid" data-reveal>
          <article class="card" v-for="(b, i) in c.designers.blocks" :key="i">
            <div class="card__top">
              <div class="icon">✨</div>
              <h3 class="card__title">{{ b.title }}</h3>
            </div>
            <p class="muted">{{ b.text }}</p>
          </article>
        </div>

        <!-- EXTRA PERKS -->
        <div class="perks" data-reveal>
          <div class="perks__head">
            <h2 class="perks__title">Что вы получите</h2>
            <p class="perks__sub">
              Не просто двери — а поддержку, материалы и удобную работу с заказчиком.
            </p>
          </div>

          <div class="perks__grid">
            <div class="perk" v-for="(p, idx) in perks" :key="idx">
              <div class="perk__top">
                <div class="perk__icon">{{ p.icon }}</div>
                <div class="perk__t">{{ p.title }}</div>
              </div>
              <div class="perk__d">{{ p.text }}</div>
            </div>
          </div>
        </div>

        <!-- HOW WE WORK -->
        <div class="steps" data-reveal>
          <div class="steps__head">
            <h2 class="steps__title">Как мы работаем</h2>
            <p class="steps__sub">Простой процесс — чтобы вы быстро закрывали проекты.</p>
          </div>

          <div class="steps__grid">
            <div class="step" v-for="(s, idx) in howWeWork" :key="idx">
              <div class="step__n">{{ s.n }}</div>
              <div class="step__t">{{ s.t }}</div>
              <div class="step__d">{{ s.d }}</div>
            </div>
          </div>

          <div class="cta" data-reveal>
            <div class="cta__text">
              <div class="cta__title">Хотите каталоги и материалы?</div>
              <div class="cta__sub">Оставьте заявку — отправим и поможем с подбором.</div>
            </div>
            <a class="btn btn--primary" href="#lead-form">Получить материалы</a>
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
   LAYOUT + CONTAINER
========================= */
.designers {
  position: relative;
  min-height: 100vh;
  overflow: clip;
  color:  rgba(255,255,255,.68);
}
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
   REVEAL
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
   KPI
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
  padding: 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 60px rgba(0,0,0,.25);
}
.kpi__num {
  color: rgba(255,255,255,.92);
  font-weight: 1000;
  letter-spacing: .05em;
  font-size: clamp(16px, 2.0vw, 22px);
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
  background: radial-gradient(circle at 30% 20%, rgba(200,161,101,.22), transparent 55%);
  transform: rotate(12deg);
}
.heroCard__badge {
  position: relative;
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 12px;
  color: rgba(255,255,255,.82);
  background: rgba(200,161,101,.16);
  border: 1px solid rgba(200,161,101,.22);
}
.heroCard__title {
  position: relative;
  margin-top: 12px;
  color: rgba(255,255,255,.92);
  font-weight: 1000;
  line-height: 1.14;
  font-size: clamp(20px, 3vw, 34px);
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
  font-weight: 900;
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
   GRID (blocks)
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
  background: radial-gradient(circle at 20% 20%, rgba(200,161,101,.18), transparent 55%);
  opacity: 0;
  transition: opacity .25s ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: rgba(200,161,101,.32);
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
  font-weight: 1000;
}
.muted {
  position: relative;
  margin-top: 10px;
  color: rgba(255,255,255,.68);
  line-height: 1.75;
  font-size: 14px;
}

/* =========================
   PERKS
========================= */
.perks {
  margin-top: 18px;
  border-radius: 22px;
  padding: clamp(18px, 2.8vw, 24px);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 70px rgba(0,0,0,.28);
}
.perks__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.perks__title {
  color: rgba(255,255,255,.92);
  font-weight: 1000;
  font-size: clamp(18px, 2.5vw, 28px);
}
.perks__sub {
  color: rgba(255,255,255,.62);
  line-height: 1.6;
  max-width: 62ch;
  font-size: 14px;
}

.perks__grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (max-width: 980px) {
  .perks__grid { grid-template-columns: 1fr; }
}

.perk {
  border-radius: 20px;
  padding: 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  transition: transform .25s ease, border-color .25s ease;
}
.perk:hover {
  transform: translateY(-2px);
  border-color: rgba(200,161,101,.30);
}
.perk__top {
  display: flex;
  align-items: center;
  gap: 10px;
}
.perk__icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(200,161,101,.16);
  border: 1px solid rgba(200,161,101,.22);
}
.perk__t {
  color: rgba(255,255,255,.92);
  font-weight: 950;
}
.perk__d {
  margin-top: 8px;
  color: rgba(255,255,255,.64);
  line-height: 1.65;
  font-size: 13.5px;
}

/* =========================
   STEPS + CTA
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
  font-weight: 1000;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
@media (max-width: 980px) {
  .steps__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
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
  border-color: rgba(200,161,101,.30);
}
.step__n {
  font-weight: 1000;
  letter-spacing: .06em;
  color: rgba(200,161,101,.92);
}
.step__t {
  margin-top: 6px;
  font-weight: 950;
  color: rgba(255,255,255,.92);
}
.step__d {
  margin-top: 6px;
  color: rgba(255,255,255,.64);
  line-height: 1.65;
  font-size: 13.5px;
}

.cta {
  margin-top: 16px;
  border-radius: 20px;
  padding: 16px;
  background: linear-gradient(180deg, rgba(200,161,101,.18), rgba(255,255,255,.06));
  border: 1px solid rgba(200,161,101,.22);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}
.cta__title {
  font-weight: 1000;
  color: rgba(255,255,255,.92);
}
.cta__sub {
  margin-top: 4px;
  color: rgba(255,255,255,.62);
  font-size: 13.5px;
  line-height: 1.6;
}
</style>