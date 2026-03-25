<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import HeroSimple from "@/components/sections/HeroSimple.vue";

const mounted = ref(false);

let io;
const revealEls = [];

onMounted(() => {
  requestAnimationFrame(() => (mounted.value = true));

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
  if (io) io.disconnect();
});
</script>

<template>
  <div class="partners" :class="{ 'is-mounted': mounted }">
    <HeroSimple
      title="Сотрудничество"
      subtitle="Стабильные поставки, сопровождение объектов и выгодные условия для строительных компаний, подрядчиков и комплектаторов."
    />

    <section class="section">
      <div class="container">
        <div class="kpis" data-reveal>
          <div class="kpi">
            <div class="kpi__num">4+</div>
            <div class="kpi__text">года на рынке</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">10 лет</div>
            <div class="kpi__text">гарантия на двери</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">ГОСТ / ISO</div>
            <div class="kpi__text">стандарты качества</div>
          </div>
          <div class="kpi">
            <div class="kpi__num">min / max</div>
            <div class="kpi__text">изготовление под размер</div>
          </div>
        </div>

        <div class="heroCard" data-reveal>
          <div class="heroCard__badge">Партнёрская программа</div>
          <h2 class="heroCard__title">
            Сотрудничество, которое удобно для строительных проектов
          </h2>
          <p class="heroCard__text">
            Мы поставляем межкомнатные двери для объектов и частных заказов,
            сопровождаем партнёров на всех этапах и помогаем подобрать решения
            под бюджет, формат проекта и сроки.
          </p>

          <div class="heroCard__actions">
            <a class="btn btn--primary">Оставить заявку</a>
            <a class="btn btn--ghost" href="tel:+998901301010">Позвонить</a>
          </div>
        </div>

        <div class="grid" data-reveal>
          <article class="card">
            <div class="card__top">
              <div class="icon">🤝</div>
              <h3 class="card__title">Что мы предлагаем</h3>
            </div>

            <ul class="list">
              <li>Стабильные поставки и понятные сроки</li>
              <li>Подбор моделей под объект</li>
              <li>Скидки на объём и специальные условия</li>
              <li>Консультации по ассортименту и комплектации</li>
              <li>Поддержка на этапе согласования</li>
              <li>Материалы для презентации клиентам</li>
            </ul>
          </article>

          <article class="card">
            <div class="card__top">
              <div class="icon">🛠️</div>
              <h3 class="card__title">Преимущества продукции</h3>
            </div>

            <ul class="list">
              <li>Изготовление под нестандартные размеры</li>
              <li>Большой выбор моделей и покрытий</li>
              <li>ПВХ-шпон, эмаль, патина</li>
              <li>Комплексные интерьерные решения</li>
              <li>Надёжная конструкция и современное производство</li>
              <li>Короткие сроки изготовления</li>
            </ul>
          </article>

          <article class="card card--wide">
            <div class="card__top">
              <div class="icon">🏗️</div>
              <h3 class="card__title">Кому подходит</h3>
            </div>

            <p class="muted">
              Мы работаем со строителями, подрядчиками, салонами и компаниями,
              которые комплектуют объекты дверями. Поставляем решения для
              квартир, домов, коммерческих помещений и девелоперских проектов.
            </p>

            <div class="chips">
              <span class="chip">Комплектация объектов</span>
              <span class="chip">Оптовые поставки</span>
              <span class="chip">Салоны и секции</span>
              <span class="chip">Подрядные организации</span>
            </div>
          </article>
        </div>

        <div class="steps" data-reveal>
          <div class="steps__head">
            <h2 class="steps__title">Как начать сотрудничество</h2>
            <p class="steps__sub">
              Быстрый и понятный процесс — от заявки до запуска поставок.
            </p>
          </div>

          <div class="steps__grid">
            <div class="step">
              <div class="step__n">01</div>
              <div class="step__t">Оставьте заявку</div>
              <div class="step__d">
                Напишите, какой у вас проект, объём и что именно требуется.
              </div>
            </div>

            <div class="step">
              <div class="step__n">02</div>
              <div class="step__t">Согласуем условия</div>
              <div class="step__d">
                Подберём ассортимент, отделки, сроки и удобный формат работы.
              </div>
            </div>

            <div class="step">
              <div class="step__n">03</div>
              <div class="step__t">Запускаем поставки</div>
              <div class="step__d">
                Сопровождаем проект и обеспечиваем стабильную комплектацию.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.partners {
  min-height: 100vh;
  background: #ffffff;
  color: #111827;
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.section {
  padding: 24px 0 88px;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.is-mounted [data-reveal].is-in {
  opacity: 1;
  transform: translateY(0);
}

.kpis {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 12px;
  margin-bottom: 16px;
}

.kpi {
  border-radius: 18px;
  padding: 18px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}

.kpi__num {
  color: #f08a3c;
  font-weight: 900;
  letter-spacing: 0.02em;
  font-size: clamp(18px, 2.2vw, 26px);
}

.kpi__text {
  margin-top: 6px;
  color: #6b7280;
  font-size: 13px;
}

.heroCard {
  border-radius: 22px;
  padding: clamp(20px, 2.8vw, 28px);
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.05);
}

.heroCard__badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  color: #9a5a24;
  background: #fff7f1;
  border: 1px solid #f7d9bf;
}

.heroCard__title {
  margin-top: 12px;
  color: #111827;
  font-weight: 900;
  line-height: 1.14;
  font-size: clamp(22px, 3vw, 36px);
}

.heroCard__text {
  margin-top: 10px;
  color: #6b7280;
  line-height: 1.75;
  font-size: 15px;
  max-width: 82ch;
}

.heroCard__actions {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: 0.2s ease;
}

.btn--primary {
  color: #ffffff;
  background: #111827;
  border: 1px solid #111827;
}

.btn--primary:hover {
  background: #000000;
  transform: translateY(-1px);
}

.btn--ghost {
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
}

.btn--ghost:hover {
  background: #f9fafb;
  transform: translateY(-1px);
}

.grid {
  margin-top: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
}

.card {
  border-radius: 22px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(17, 24, 39, 0.08);
}

.card__top {
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
  background: #fff7f1;
  border: 1px solid #f7d9bf;
}

.card__title {
  color: #111827;
  font-size: 18px;
  font-weight: 900;
}

.list {
  margin-top: 12px;
  padding-left: 18px;
  color: #6b7280;
  line-height: 1.85;
  font-size: 14px;
}

.muted {
  margin-top: 12px;
  color: #6b7280;
  line-height: 1.75;
  font-size: 14px;
}

.card--wide {
  grid-column: span 2;
}

.chips {
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
  color: #9a5a24;
  background: #fff7f1;
  border: 1px solid #f7d9bf;
}

.steps {
  margin-top: 18px;
  border-radius: 22px;
  padding: clamp(20px, 2.8vw, 26px);
  background: #f8f8f8;
  border: 1px solid #e5e7eb;
}

.steps__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.steps__title {
  color: #111827;
  font-weight: 900;
  font-size: clamp(20px, 2.5vw, 30px);
}

.steps__sub {
  color: #6b7280;
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

.step {
  border-radius: 20px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(17, 24, 39, 0.06);
}

.step__n {
  font-weight: 1000;
  letter-spacing: 0.06em;
  color: #f08a3c;
}

.step__t {
  margin-top: 6px;
  font-weight: 900;
  color: #111827;
}

.step__d {
  margin-top: 6px;
  color: #6b7280;
  line-height: 1.65;
  font-size: 13.5px;
}

@media (max-width: 980px) {
  .kpis {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .card--wide {
    grid-column: auto;
  }

  .steps__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 28px);
  }

  .section {
    padding: 18px 0 64px;
  }
}

@media (max-width: 420px) {
  .container {
    width: calc(100% - 20px);
  }

  .kpis {
    grid-template-columns: 1fr;
  }
}
</style>