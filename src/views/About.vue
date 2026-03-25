<template>
  <main class="aboutPage">
    <section class="section section--hero">
      <div class="container">
        <div class="heroGrid">
          <div class="heroLeft">
            <div class="kicker reveal">О компании</div>

            <h1 class="title heroTitle reveal">
              Ko'kcha Eshiklar —
              <span class="accent">современные двери</span>
              для интерьера и входных решений
            </h1>

            <p class="lead reveal">
              Производим и устанавливаем входные и межкомнатные двери в Ташкенте.
              Индивидуальные размеры, отделка, фурнитура и монтаж — под ключ.
            </p>

            <div class="heroActions reveal">
              <RouterLink class="btn btn-primary" :to="{ name: 'products' }">
                Каталог
              </RouterLink>

              <RouterLink class="btn btn-outline" :to="{ name: 'builders' }">
                Для строителей
              </RouterLink>

              <RouterLink class="btn btn-ghost" :to="{ name: 'designers' }">
                Для дизайнеров
              </RouterLink>
            </div>

            <div class="chips reveal">
              <span class="chip">Индивидуальное изготовление</span>
              <span class="chip">Монтаж под ключ</span>
              <span class="chip">Гарантия качества</span>
            </div>
          </div>

          <div class="heroRight card reveal">
            <div class="stats">
              <div class="stat">
                <div class="statNum">{{ display.year }}</div>
                <div class="statLabel">на рынке</div>
              </div>

              <div class="stat">
                <div class="statNum">{{ display.projects }}+</div>
                <div class="statLabel">проектов</div>
              </div>

              <div class="stat">
                <div class="statNum">{{ display.cities }}</div>
                <div class="statLabel">города/страны</div>
              </div>

              <div class="stat">
                <div class="statNum">{{ display.support }}</div>
                <div class="statLabel">поддержка</div>
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
      </div>
    </section>

    <section class="section section--tint">
      <div class="container">
        <div class="split">
          <div class="splitLeft reveal">
            <h2 class="title h2">Качество как философия</h2>

            <p class="text">
              Мы держим фокус на материале, точной сборке и чистом монтаже.
              Дверь должна выглядеть аккуратно, современно и служить долго.
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
                <div class="tag">Сервис</div>
                <div class="tag tag--soft">Производство</div>
              </div>

              <div class="showTitle title">Детали решают всё</div>

              <div class="showText">
                Мы собираем продукт так, чтобы он хорошо выглядел, точно встал
                в проект и не создавал проблем после монтажа.
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="head reveal">
          <h2 class="title h2">Работаем с партнёрами</h2>
          <p class="text">
            Отдельные условия и удобный формат работы для дизайнеров,
            строителей и проектных клиентов.
          </p>
        </div>

        <div class="partnerGrid">
          <RouterLink class="partnerCard card reveal" :to="{ name: 'designers' }">
            <div class="partnerTitle">Для дизайнеров</div>
            <div class="partnerText">
              Подбор отделок, текстур, фурнитуры и решений под интерьер.
            </div>
            <span class="partnerLink">Перейти</span>
          </RouterLink>

          <RouterLink class="partnerCard card reveal" :to="{ name: 'builders' }">
            <div class="partnerTitle">Для строителей</div>
            <div class="partnerText">
              Оптовые условия, стабильные поставки и сопровождение по объектам.
            </div>
            <span class="partnerLink">Перейти</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section id="contacts" class="section section--tint">
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
            <a class="contactLink" href="tel:+998901301010">
              +998 (90) 130-10-10
            </a>
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

    <section class="mapSection">
      <AboutMap />
    </section>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import AboutMap from "@/components/partials/AboutMap.vue";

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

    if (t < 1) {
      rafId = requestAnimationFrame(tick);
    }
  };

  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  const els = document.querySelectorAll(".reveal");
  els.forEach((el) => el.classList.add("reveal--init"));

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--show");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));

  const counterEl = document.querySelector(".heroRight");
  if (counterEl) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animateCounters();
          counterObserver.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    counterObserver.observe(counterEl);
  }
});

onUnmounted(() => {
  if (io) io.disconnect();
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
#contacts {
  scroll-margin-top: 110px;
}

.aboutPage {
  min-height: 100vh;
  background: #ffffff;
  color: #111827;
}

.section {
  padding: 88px 0;
}

.section--hero {
  padding: 72px 0 56px;
}

.section--tint {
  background: #f8f8f8;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.container {
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
}

.heroGrid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: start;
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-weight: 800;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 12px;
}

.heroTitle {
  font-size: clamp(38px, 5vw, 70px);
  line-height: 1.04;
  margin-bottom: 16px;
}

.accent {
  color: #f08a3c;
}

.lead {
  max-width: 62ch;
  font-size: 16px;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 24px;
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
  background: #fff7f1;
  border: 1px solid #f7d9bf;
  font-size: 13px;
  font-weight: 700;
  color: #9a5a24;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.05);
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
  padding: 16px;
  border-radius: 18px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}

.statNum {
  font-weight: 900;
  font-size: 28px;
  line-height: 1.05;
  color: #f08a3c;
}

.statLabel {
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b7280;
}

.note {
  padding: 14px;
  border-radius: 18px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  margin-bottom: 12px;
}

.note:last-child {
  margin-bottom: 0;
}

.noteTitle {
  font-weight: 800;
  margin-bottom: 6px;
}

.noteText {
  color: #6b7280;
  line-height: 1.65;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

.h2 {
  font-size: clamp(28px, 3.2vw, 42px);
  line-height: 1.12;
  margin-bottom: 12px;
}

.text {
  font-size: 16px;
  line-height: 1.8;
  color: #6b7280;
}

.bullets {
  margin-top: 20px;
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
  background: #f08a3c;
  margin-top: 7px;
  flex: 0 0 auto;
}

.bulletTitle {
  font-weight: 800;
}

.bulletText {
  color: #6b7280;
  margin-top: 4px;
  line-height: 1.65;
}

.showcase {
  padding: 22px;
}

.showTop {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.tag {
  padding: 8px 10px;
  border-radius: 999px;
  background: #fff7f1;
  border: 1px solid #f7d9bf;
  font-weight: 800;
  font-size: 12px;
  color: #9a5a24;
}

.tag--soft {
  background: #f3f4f6;
  border-color: #e5e7eb;
  color: #6b7280;
}

.showTitle {
  font-size: 30px;
  margin-bottom: 10px;
}

.showText {
  color: #6b7280;
  line-height: 1.75;
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
  font-weight: 800;
}

.miniText {
  margin-top: 6px;
  color: #6b7280;
}

.head {
  max-width: 70ch;
  margin-bottom: 20px;
}

.partnerGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.partnerCard {
  padding: 22px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.partnerCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(17, 24, 39, 0.08);
}

.partnerTitle {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 8px;
}

.partnerText {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 14px;
}

.partnerLink {
  font-weight: 700;
  color: #f08a3c;
}

.contactsGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.contactCard {
  padding: 18px;
}

.contactTitle {
  font-weight: 800;
  margin-bottom: 8px;
}

.contactLink {
  font-weight: 800;
  color: #111827;
  text-decoration: none;
}

.contactLink:hover {
  text-decoration: underline;
}

.contactText {
  color: #6b7280;
  line-height: 1.65;
}

.contactHint {
  margin-top: 8px;
  color: #9ca3af;
  font-size: 13px;
  font-weight: 700;
}

.mapSection {
  padding-top: 0;
}

.reveal--init {
  opacity: 0;
  transform: translateY(18px);
}

.reveal--show {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

@media (max-width: 1024px) {
  .section {
    padding: 72px 0;
  }

  .heroGrid,
  .split {
    grid-template-columns: 1fr;
  }

  .partnerGrid {
    grid-template-columns: 1fr;
  }

  .contactsGrid {
    grid-template-columns: 1fr;
  }

  .miniCards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  #contacts {
    scroll-margin-top: 90px;
  }

  .container {
    width: calc(100% - 24px);
  }

  .section--hero {
    padding: 48px 0 40px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 56px 0;
  }

  .heroActions {
    gap: 10px;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>