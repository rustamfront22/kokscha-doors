
<template>
  <section class="about-page">
    <div class="container">
      <!-- твой контент -->
<main class="aboutPage" @mousemove="onMouseMove">
    <!-- Background decor -->
    <div class="bg">
      <div class="blob blob--a" :style="blobStyleA" />
      <div class="blob blob--b" :style="blobStyleB" />
      <div class="grain" />
    </div>

    <!-- HERO -->
    <section class="section section--hero">
      <div class="container">
        <div class="heroGrid">
          <div class="heroLeft">
            <div class="kicker reveal">О компании</div>
            <h1 class="title heroTitle reveal">
              Ko'kcha Eshiklar —
              <span class="gold">премиальные двери</span>
              под ваш интерьер
            </h1>

            <p class="lead reveal">
              Производим и устанавливаем входные и межкомнатные двери в
              Ташкенте. Индивидуальные размеры, отделка, фурнитура и монтаж —
              под ключ.
            </p>

            <div class="heroActions reveal">
              <RouterLink class="btn btn-primary" :to="{ name: 'products' }"
                >Каталог</RouterLink
              >
              <RouterLink
                class="btn btn-outline"
                :to="{ name: 'about', hash: '#cooperate' }"
              >
                Сотрудничество
              </RouterLink>
              <RouterLink
                class="btn btn-ghost"
                :to="{ name: 'about', hash: '#contacts' }"
              >
                Контакты
              </RouterLink>
            </div>

            <div class="chips reveal">
              <span class="chip">Индивидуальное изготовление</span>
              <span class="chip">Монтаж под ключ</span>
              <span class="chip">Гарантия качества</span>
            </div>
          </div>

          <!-- Right hero card -->
          <div class="heroRight card reveal">
            <div class="stats">
              <div class="stat">
                <div class="statNum gold">{{ display.year }}</div>
                <div class="statLabel">на рынке</div>
              </div>
              <div class="stat">
                <div class="statNum gold">{{ display.projects }}+</div>
                <div class="statLabel">проектов</div>
              </div>
              <div class="stat">
                <div class="statNum gold">{{ display.cities }}</div>
                <div class="statLabel">города/страны</div>
              </div>
              <div class="stat">
                <div class="statNum gold">{{ display.support }}</div>
                <div class="statLabel">связь</div>
              </div>
            </div>

            <div class="note">
              <div class="noteTitle">Шоурум</div>
              <div class="noteText">
                Ташкент, Шайхантахурский район, Себзар-7
              </div>
            </div>

            <div class="note">
              <div class="noteTitle">География</div>
              <div class="noteText">Ташкент • Бишкек • Душанбе</div>
            </div>
          </div>
        </div>

        <!-- Scroll hint -->
        <div class="scrollHint">
          <span class="dot" />
          <span>Листай вниз</span>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY / QUALITY -->
    <section class="section">
      <div class="container">
        <div class="split">
          <div class="splitLeft reveal">
            <h2 class="title h2">Качество как философия</h2>
            <p class="text">
              Мы держим фокус на материале, точной сборке и чистом монтаже.
              Дверь должна выглядеть дорого в деталях — и так же работать каждый
              день.
            </p>

            <div class="bullets">
              <div class="bullet reveal">
                <div class="bulletDot" />
                <div>
                  <div class="bulletTitle">Контроль на каждом этапе</div>
                  <div class="bulletText">
                    От замера до установки и финальной проверки.
                  </div>
                </div>
              </div>
              <div class="bullet reveal">
                <div class="bulletDot" />
                <div>
                  <div class="bulletTitle">Индивидуальные решения</div>
                  <div class="bulletText">
                    Размеры, отделки, фурнитура — под ваш проект.
                  </div>
                </div>
              </div>
              <div class="bullet reveal">
                <div class="bulletDot" />
                <div>
                  <div class="bulletTitle">Современный дизайн</div>
                  <div class="bulletText">
                    От классики до минимализма — аккуратно и актуально.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="splitRight reveal">
            <div class="showcase card">
              <div class="showTop">
                <div class="tag">Premium</div>
                <div class="tag tag--soft">Производство</div>
              </div>
              <div class="showTitle title">Детали решают всё</div>
              <div class="showText">
                Мы собираем продукт так, чтобы его хотелось трогать, а не просто
                “поставить и забыть”.
              </div>

              <div class="miniCards">
                <div class="mini card">
                  <div class="miniTitle">Замер</div>
                  <div class="miniText">точно и быстро</div>
                </div>
                <div class="mini card">
                  <div class="miniTitle">Изготовление</div>
                  <div class="miniText">под проект</div>
                </div>
                <div class="mini card">
                  <div class="miniTitle">Монтаж</div>
                  <div class="miniText">чисто и аккуратно</div>
                </div>
              </div>

              <div class="sparkles">
                <span class="spark s1" />
                <span class="spark s2" />
                <span class="spark s3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COOPERATION -->
    <section id="cooperate" class="section section--tint">
      <div class="container">
        <div class="head reveal">
          <h2 class="title h2">Сотрудничество</h2>
          <p class="text">
            Дизайнеры, архитекторы, строительные компании и корпоративные
            заказчики — даём условия, сроки и поддержку на всех этапах.
          </p>
        </div>

        <div class="grid4">
          <div class="tile card reveal">
            <div class="tileTitle">Для дизайнеров</div>
            <div class="tileText">
              Подбор отделок, текстур, фурнитуры. Консультации и спецусловия.
            </div>
          </div>
          <div class="tile card reveal">
            <div class="tileTitle">Для строителей</div>
            <div class="tileText">
              Оптовые условия, стабильные поставки и контроль качества.
            </div>
          </div>
          <div class="tile card reveal">
            <div class="tileTitle">Для бизнеса</div>
            <div class="tileText">
              Единый стиль на объекте, долговечность и сопровождение.
            </div>
          </div>
          <div class="tile card reveal">
            <div class="tileTitle">Для бригад</div>
            <div class="tileText">
              Быстрая коммуникация, гибкие условия, поддержка.
            </div>
          </div>
        </div>

        <div class="cta card reveal">
          <div>
            <div class="ctaTitle title">Хочешь условия под проект?</div>
            <div class="ctaText">
              Оставь заявку — ответим и предложим лучший вариант под задачу.
            </div>
          </div>
          <a class="btn btn-primary" href="#lead-form">Оставить заявку</a>
        </div>
      </div>
    </section>

    <!-- CONTACTS -->
    <section id="contacts" class="section">
      <div class="container">
        <div class="head reveal">
          <h2 class="title h2">Контакты</h2>
          <p class="text">
            Свяжитесь с нами — подскажем по моделям, срокам и стоимости.
          </p>
        </div>

        <div class="contactsGrid">
          <div class="card reveal contactCard">
            <div class="contactTitle">Телефон</div>
            <a class="contactLink" href="tel:+998900000000"
              >+998 (90) 000-00-00</a
            >
            <div class="contactHint">Ежедневно 09:00–20:00</div>
          </div>
          <div class="card reveal contactCard">
            <div class="contactTitle">Адрес</div>
            <div class="contactText">
              Ташкент, Шайхантахурский район, Себзар-7
            </div>
            <div class="contactHint">Шоурум</div>
          </div>
          <div class="card reveal contactCard">
            <div class="contactTitle">География</div>
            <div class="contactText">Ташкент • Бишкек • Душанбе</div>
            <div class="contactHint">Доставка по регионам</div>
          </div>
        </div>
      </div>
    </section>
  </main>
      <AboutMap />
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import AboutMap from "@/components/partials/AboutMap.vue";

const mx = ref(0);
const my = ref(0);

const blobStyleA = reactive({ transform: "translate3d(0px,0px,0)" });
const blobStyleB = reactive({ transform: "translate3d(0px,0px,0)" });

const onMouseMove = (e) => {
  // легкий parallax — красиво и не мешает
  mx.value = (e.clientX / window.innerWidth - 0.5) * 22;
  my.value = (e.clientY / window.innerHeight - 0.5) * 22;

  blobStyleA.transform = `translate3d(${mx.value}px, ${my.value}px, 0)`;
  blobStyleB.transform = `translate3d(${-mx.value}px, ${-my.value}px, 0)`;
};

// Count-up (дорого выглядит)
const display = reactive({
  year: 0,
  projects: 0,
  cities: 0,
  support: "0/0",
});

let io;
let rafId;

const animateCounters = () => {
  const target = { year: 2022, projects: 1740, cities: 3 };
  const start = performance.now();
  const duration = 900;

  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - Math.pow(1 - t, 3);

    display.year = Math.round(target.year * ease);
    display.projects = Math.round(target.projects * ease);
    display.cities = Math.max(1, Math.round(target.cities * ease));
    display.support = t < 0.65 ? "12/7" : "24/7";

    if (t < 1) rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  els.forEach((el) => el.classList.add("reveal--init"));

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal--show");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));

  // Counters when heroRight appears
  const counterEl = document.querySelector(".heroRight");
  if (counterEl) {
    const cio = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animateCounters();
          cio.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    cio.observe(counterEl);
  }
});

onUnmounted(() => {
  if (io) io.disconnect();
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
#cooperate,
#contacts{
  scroll-margin-top: 110px; /* отступ сверху при переходе по якорю */
}

@media (max-width: 768px){
  #cooperate,
  #contacts{
    scroll-margin-top: 90px;
  }
}
/* page */
.aboutPage {
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  overflow: hidden;
}

/* background */
.bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.blob {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 999px;
  filter: blur(40px);
  opacity: 0.45;
  transform: translate3d(0, 0, 0);
  transition: transform 0.18s ease;
}
.blob--a {
  top: -160px;
  left: -180px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(200, 161, 101, 0.55),
    rgba(200, 161, 101, 0)
  );
}
.blob--b {
  bottom: -220px;
  right: -200px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(17, 17, 17, 0.26),
    rgba(17, 17, 17, 0)
  );
}
.grain {
  position: absolute;
  inset: -40px;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
}

/* sections */
.section {
  position: relative;
  z-index: 1;
  padding: 96px 0;
}
.section--hero {
  padding: 120px 0 86px;
}
.section--tint {
  background: rgba(17, 17, 17, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* grid hero */
.heroGrid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: start;
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-weight: 800;
  font-size: 12px;
  color: rgba(17, 17, 17, 0.62);
  margin-bottom: 10px;
}

.heroTitle {
  font-size: clamp(40px, 5vw, 72px);
  line-height: 1.04;
  margin-bottom: 14px;
}
.gold {
  color: var(--gold);
}

.lead {
  max-width: 62ch;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(17, 17, 17, 0.7);
  margin-bottom: 22px;
}

.heroActions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(200, 161, 101, 0.12);
  border: 1px solid rgba(200, 161, 101, 0.3);
  font-size: 13px;
  font-weight: 800;
  color: #1b120d;
}

.heroRight {
  padding: 22px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}
.stat {
  padding: 14px 14px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
}
.statNum {
  font-weight: 900;
  font-size: 28px;
  line-height: 1.05;
}
.statLabel {
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.55);
}

.note {
  padding: 14px 14px;
  border-radius: var(--radius);
  background: rgba(17, 17, 17, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
}
.noteTitle {
  font-weight: 900;
  margin-bottom: 6px;
}
.noteText {
  color: rgba(17, 17, 17, 0.7);
  line-height: 1.6;
}

.scrollHint {
  margin-top: 34px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(17, 17, 17, 0.55);
  font-weight: 700;
  font-size: 13px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--gold);
  box-shadow: 0 10px 30px rgba(200, 161, 101, 0.35);
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.75;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
}

/* split section */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  align-items: start;
}
.h2 {
  font-size: clamp(28px, 3.2vw, 42px);
  line-height: 1.12;
  margin-bottom: 12px;
}
.text {
  font-size: 16px;
  line-height: 1.75;
  color: rgba(17, 17, 17, 0.7);
}

.bullets {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.bullet {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.bulletDot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--gold);
  margin-top: 6px;
  flex: 0 0 auto;
}
.bulletTitle {
  font-weight: 900;
}
.bulletText {
  color: rgba(17, 17, 17, 0.68);
  margin-top: 4px;
  line-height: 1.6;
}

.showcase {
  padding: 22px;
  position: relative;
  overflow: hidden;
}
.showTop {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}
.tag {
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(200, 161, 101, 0.14);
  border: 1px solid rgba(200, 161, 101, 0.3);
  font-weight: 900;
  font-size: 12px;
}
.tag--soft {
  background: rgba(17, 17, 17, 0.04);
  border-color: rgba(0, 0, 0, 0.06);
  color: rgba(17, 17, 17, 0.75);
}
.showTitle {
  font-size: 30px;
  margin-bottom: 10px;
}
.showText {
  color: rgba(17, 17, 17, 0.7);
  line-height: 1.7;
}

.miniCards {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.mini {
  padding: 14px;
}
.miniTitle {
  font-weight: 900;
}
.miniText {
  margin-top: 6px;
  color: rgba(17, 17, 17, 0.62);
}

.sparkles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.spark {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(200, 161, 101, 0.85);
  filter: blur(0.2px);
  opacity: 0.8;
  animation: floaty 3.2s ease-in-out infinite;
}
.s1 {
  top: 16%;
  left: 78%;
  animation-delay: 0.1s;
}
.s2 {
  top: 66%;
  left: 88%;
  animation-delay: 0.6s;
}
.s3 {
  top: 46%;
  left: 12%;
  animation-delay: 1.1s;
}
@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.65;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

/* coop */
.head {
  max-width: 70ch;
  margin-bottom: 18px;
}
.grid4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}
.tile {
  padding: 18px;
}
.tileTitle {
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 8px;
}
.tileText {
  color: rgba(17, 17, 17, 0.68);
  line-height: 1.65;
}

.cta {
  margin-top: 18px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}
.ctaTitle {
  font-size: 26px;
  margin-bottom: 6px;
}
.ctaText {
  color: rgba(17, 17, 17, 0.68);
}

/* contacts */
.contactsGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.contactCard {
  padding: 18px;
}
.contactTitle {
  font-weight: 900;
  margin-bottom: 8px;
}
.contactLink {
  font-weight: 900;
  color: #111;
  text-decoration: none;
}
.contactLink:hover {
  text-decoration: underline;
}
.contactText {
  color: rgba(17, 17, 17, 0.7);
  line-height: 1.65;
}
.contactHint {
  margin-top: 8px;
  color: rgba(17, 17, 17, 0.55);
  font-size: 13px;
  font-weight: 700;
}

/* reveal animations */
.reveal--init {
  opacity: 0;
  transform: translateY(18px);
  filter: blur(6px);
}
.reveal--show {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 0.65s ease, transform 0.65s ease, filter 0.65s ease;
}
.reveal--show:nth-child(2) {
  transition-delay: 0.04s;
}
.reveal--show:nth-child(3) {
  transition-delay: 0.08s;
}

/* responsive */
@media (max-width: 1024px) {
  .section {
    padding: 80px 0;
  }
  .section--hero {
    padding: 104px 0 70px;
  }
  .heroGrid {
    grid-template-columns: 1fr;
  }
  .split {
    grid-template-columns: 1fr;
  }
  .grid4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .contactsGrid {
    grid-template-columns: 1fr;
  }
  .miniCards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 64px 0;
  }
  .heroActions {
    gap: 10px;
  }
  .stats {
    grid-template-columns: 1fr;
  }
  .cta {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* NOTE: uses your global .btn / .card / .title variables */
</style>
