<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { companyContent } from "@/components/content/companyContent";
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
    (entries) =>
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (io) io.disconnect();
});

const c = companyContent;

// доп. блоки чтобы страница была “богаче”
const whatYouGet = [
  { icon: "🧱", title: "Готовый блок", text: "Полотно + короб + заводская подготовка — меньше ошибок на объекте." },
  { icon: "⏱️", title: "Экономия времени", text: "Установка быстрее, меньше “подгонов” и грязных работ." },
  { icon: "🛠️", title: "Чистый монтаж", text: "Аккуратная сборка и подготовка на производстве — качество стабильнее." },
  { icon: "📦", title: "Стабильные поставки", text: "Партии и сроки согласуем под ваш график строительства." },
];

const pipeline = [
  { n: "01", t: "Заявка", d: "Пишите объем, типы дверей, сроки." },
  { n: "02", t: "Спецификация", d: "Подбираем модели/покрытия/комплектацию под объект." },
  { n: "03", t: "Производство", d: "Контроль качества на каждом этапе." },
  { n: "04", t: "Отгрузка", d: "Доставка и сопровождение по документам." },
];

const goLead = () => {
  document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <div class="builders" :class="{ 'is-mounted': mounted }">
    <!-- BACKGROUND FX -->
    <div class="bg">
      <div class="bg__grid" />
      <div class="bg__glow bg__glow--a" :style="{ transform: `translateY(${parallaxY}px)` }" />
      <div class="bg__glow bg__glow--b" :style="{ transform: `translateY(${parallaxY * 0.7}px)` }" />
      <div class="bg__noise" />
    </div>

    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero__card" data-reveal>
          <div class="hero__badge">Для строителей и прорабов</div>
          <h1 class="hero__title">{{ c.builders.heroTitle }}</h1>
          <p class="hero__sub">{{ c.builders.heroText }}</p>

          <div class="hero__actions">
            <button class="btn btn--primary" type="button" @click="goLead">Запросить условия</button>
            <a class="btn btn--ghost" href="tel:+998900000000">Позвонить</a>
          </div>

          <div class="hero__mini">
            <div class="mini">
              <div class="mini__t">Монтаж быстрее</div>
              <div class="mini__d">меньше подгонов</div>
            </div>
            <div class="mini">
              <div class="mini__t">Заводская подготовка</div>
              <div class="mini__d">качество стабильнее</div>
            </div>
            <div class="mini">
              <div class="mini__t">Оптовые объемы</div>
              <div class="mini__d">под ваш график</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- KPI -->
        <div class="kpis" data-reveal>
          <div class="kpi">
            <div class="kpi__num">×7</div>
            <div class="kpi__text">быстрее установка</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">ГОСТ</div>
            <div class="kpi__text">качество</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">Опт</div>
            <div class="kpi__text">под проекты</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">Сроки</div>
            <div class="kpi__text">под график</div>
          </div>
        </div>

        <!-- PERKS (твои) -->
        <div class="grid" data-reveal>
          <article class="card" v-for="(p, i) in c.builders.perks" :key="i">
            <div class="card__top">
              <div class="icon">⚡</div>
              <h3 class="card__title">{{ p.title }}</h3>
            </div>
            <p class="muted">{{ p.text }}</p>
          </article>
        </div>

        <!-- EXTRA -->
        <div class="perks" data-reveal>
          <div class="head">
            <h2 class="h2">Что вы получаете на объекте</h2>
            <p class="sub">Меньше нервов, быстрее сдача, стабильное качество партии.</p>
          </div>

          <div class="perks__grid">
            <div class="perk" v-for="(x, idx) in whatYouGet" :key="idx">
              <div class="perk__top">
                <div class="perk__icon">{{ x.icon }}</div>
                <div class="perk__t">{{ x.title }}</div>
              </div>
              <div class="perk__d">{{ x.text }}</div>
            </div>
          </div>
        </div>

        <!-- FLOW -->
        <div class="steps" data-reveal>
          <div class="head">
            <h2 class="h2">Как идет работа</h2>
            <p class="sub">Понятный процесс, чтобы вы не теряли сроки.</p>
          </div>

          <div class="steps__grid">
            <div class="step" v-for="(s, idx) in pipeline" :key="idx">
              <div class="step__n">{{ s.n }}</div>
              <div class="step__t">{{ s.t }}</div>
              <div class="step__d">{{ s.d }}</div>
            </div>
          </div>

          <div class="cta" data-reveal>
            <div>
              <div class="cta__title">Нужны двери на объект?</div>
              <div class="cta__sub">Оставьте заявку — подготовим условия по объему и срокам.</div>
            </div>
            <button class="btn btn--primary" type="button" @click="goLead">Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>

    <LeadForm />
  </div>
</template>

<style scoped>
/* base */
.builders{
  min-height:100vh;
  position:relative;
  overflow:clip;
  color: rgba(255,255,255,.88);
}
.container{ width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
@media (max-width: 768px){ .container{ width: calc(100% - 28px); } }
@media (max-width: 420px){ .container{ width: calc(100% - 20px); } }

/* background */
.bg{
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events:none;
  background:
    radial-gradient(900px 520px at 12% 12%, rgba(200,161,101,.20), transparent 60%),
    radial-gradient(760px 480px at 88% 18%, rgba(200,161,101,.14), transparent 62%),
    radial-gradient(900px 600px at 50% 92%, rgba(255,255,255,.10), transparent 60%),
    #0b0b0c;
}
.bg__grid{
  position:absolute; inset:0; opacity:.22;
  background-image:
    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at 50% 35%, black 45%, transparent 75%);
}
.bg__glow{ position:absolute; width:520px; height:520px; filter: blur(30px); opacity:.35; }
.bg__glow--a{ left:-140px; top:140px; background: radial-gradient(circle, rgba(200,161,101,.72), transparent 65%); }
.bg__glow--b{ right:-140px; top:220px; background: radial-gradient(circle, rgba(200,161,101,.52), transparent 65%); }
.bg__noise{
  position:absolute; inset:0; opacity:.06;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
}

/* reveal */
[data-reveal]{ opacity:0; transform: translateY(14px); filter: blur(6px); transition: .6s ease; }
.is-mounted [data-reveal].is-in{ opacity:1; transform: translateY(0); filter: blur(0); }

/* hero */
.hero{ padding: 24px 0 8px; }
.hero__card{
  border-radius: 22px;
  padding: clamp(18px, 2.8vw, 26px);
  background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.06));
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 80px rgba(0,0,0,.30);
}
.hero__badge{
  display:inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(200,161,101,.22);
}
.hero__title{
  margin-top: 10px;
  font-weight: 1000;
  line-height: 1.1;
  font-size: clamp(22px, 3vw, 36px);
  color:  rgba(255,255,255,.68);
}
.hero__sub{
  margin-top: 10px;
  color: rgba(255,255,255,.68);
  line-height: 1.7;
  max-width: 90ch;
}
.hero__actions{ margin-top: 14px; display:flex; gap:12px; flex-wrap: wrap; }

.hero__mini{
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 900px){
  .hero__mini{ grid-template-columns: 1fr; }
}
.mini{
  border-radius: 18px;
  padding: 12px 14px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
}
.mini__t{ font-weight: 950; }
.mini__d{ margin-top: 4px; color: rgba(255,255,255,.62); font-size: 13px; }

/* section */
.section{ padding: 16px 0 80px; }

/* buttons */
.btn{
  height:44px; padding: 0 16px;
  border-radius:14px;
  font-weight: 900;
  display:inline-flex; align-items:center; justify-content:center;
  transition:.2s ease;
  text-decoration:none;
  border:1px solid transparent;
}
.btn:active{ transform: translateY(1px); }
.btn--primary{
  color:#111;
  background: rgba(200,161,101,.92);
  border-color: rgba(200,161,101,.55);
  box-shadow: 0 18px 50px rgba(200,161,101,.18);
}
.btn--primary:hover{ transform: translateY(-1px); }
.btn--ghost{
  color: rgba(255,255,255,.88);
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.14);
}
.btn--ghost:hover{ background: rgba(255,255,255,.10); transform: translateY(-1px); }

/* KPI */
.kpis{ display:grid; grid-template-columns: repeat(4, 1fr); gap:14px; margin: 14px 0 16px; }
@media (max-width: 980px){ .kpis{ grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 420px){ .kpis{ grid-template-columns: 1fr; } }
.kpi{
  border-radius:18px; padding:16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 60px rgba(0,0,0,.25);
}
.kpi__num{ font-weight: 1000; letter-spacing:.05em; }
.kpi__text{ margin-top:6px; color: rgba(255,255,255,.62); font-size: 13px; }

/* main cards */
.grid{ display:grid; gap:16px; grid-template-columns: 1fr 1fr; }
@media (max-width: 980px){ .grid{ grid-template-columns: 1fr; } }
.card{
  border-radius:22px; padding:18px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 70px rgba(0,0,0,.28);
  transition: .25s ease;
}
.card:hover{ transform: translateY(-2px); border-color: rgba(200,161,101,.32); }
.card__top{ display:flex; align-items:center; gap:10px; }
.icon{
  width:42px; height:42px; border-radius:14px;
  display:grid; place-items:center;
  background: rgba(200,161,101,.16);
  border: 1px solid rgba(200,161,101,.22);
}
.card__title{ font-weight: 1000; }
.muted{ margin-top:10px; color: rgba(255,255,255,.68); line-height:1.75; }

/* panels */
.perks, .steps{
  margin-top: 18px;
  border-radius: 22px;
  padding: clamp(18px, 2.8vw, 24px);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 70px rgba(0,0,0,.28);
}
.head{
  display:flex;
  align-items:end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.h2{ font-weight: 1000; font-size: clamp(18px, 2.5vw, 28px); margin:0; }
.sub{ margin:0; color: rgba(255,255,255,.62); max-width: 62ch; line-height:1.6; }

.perks__grid{
  margin-top:14px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:14px;
}
@media (max-width: 980px){ .perks__grid{ grid-template-columns: 1fr; } }
.perk{
  border-radius:20px; padding:16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  transition:.25s ease;
}
.perk:hover{ transform: translateY(-2px); border-color: rgba(200,161,101,.30); }
.perk__top{ display:flex; align-items:center; gap:10px; }
.perk__icon{
  width:40px; height:40px; border-radius:14px;
  display:grid; place-items:center;
  background: rgba(200,161,101,.16);
  border: 1px solid rgba(200,161,101,.22);
}
.perk__t{ font-weight: 950; }
.perk__d{ margin-top:8px; color: rgba(255,255,255,.64); line-height:1.65; font-size: 13.5px; }

/* steps */
.steps__grid{
  margin-top: 14px;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:14px;
}
@media (max-width: 980px){ .steps__grid{ grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px){ .steps__grid{ grid-template-columns: 1fr; } }

.step{
  border-radius:20px; padding:16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  transition:.25s ease;
}
.step:hover{ transform: translateY(-2px); border-color: rgba(200,161,101,.30); }
.step__n{ font-weight: 1000; letter-spacing:.06em; color: rgba(200,161,101,.92); }
.step__t{ margin-top:6px; font-weight: 950; }
.step__d{ margin-top:6px; color: rgba(255,255,255,.64); line-height:1.65; font-size: 13.5px; }

/* CTA */
.cta{
  margin-top:16px;
  border-radius:20px; padding:16px;
  background: linear-gradient(180deg, rgba(200,161,101,.18), rgba(255,255,255,.06));
  border: 1px solid rgba(200,161,101,.22);
  display:flex; align-items:center; justify-content: space-between;
  gap:14px; flex-wrap:wrap;
}
.cta__title{ font-weight: 1000; }
.cta__sub{ margin-top:4px; color: rgba(255,255,255,.62); font-size: 13.5px; line-height:1.6; }
</style>