<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const mounted = ref(false);
let io;

onMounted(() => {
  requestAnimationFrame(() => (mounted.value = true));

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-in");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
});

onUnmounted(() => {
  if (io) io.disconnect();
});

const stats = [
  { num: "9+", text: "Partner brands" },
  { num: "5", text: "Industries" },
  { num: "3", text: "Cities" },
  { num: "100%", text: "Long-term cooperation" },
];

const industries = [
  "Hospitality",
  "Furniture & Interiors",
  "Beverages",
  "Media",
  "Bridal & Events",
];

const partners = [
  {
    logo: "/images/partners/logos/logo-recable.png",
    name: "Recable",
    category: "Electrical & cable solutions",
  },
  {
    logo: "/images/partners/logos/logo-stoffa.png",
    name: "Stoffa",
    category: "Furniture fittings",
  },
  {
    logo: "/images/partners/logos/logo-yoshlar-tv.png",
    name: "Yoshlar telekanali",
    category: "Media",
  },
  {
    logo: "/images/partners/logos/logo-comfort-textile.png",
    name: "Comfort Textile",
    category: "Upholstered furniture",
  },
  {
    logo: "/images/partners/logos/logo-otto.png",
    name: "Otto",
    category: "Interior & furniture",
  },
  {
    logo: "/images/partners/logos/logo-hydrolife.png",
    name: "Hydrolife",
    category: "Mineral water",
  },
  {
    logo: "/images/partners/logos/logo-abi-hotel.png",
    name: "ABI Hotel",
    category: "Hospitality",
  },
  {
    logo: "/images/partners/logos/logo-novias-plaza.png",
    name: "Novias Plaza",
    category: "Bridal salon",
  },
  {
    logo: "/images/partners/logos/logo-al-anvar.png",
    name: "Al Anvar Hotel",
    category: "Hospitality",
  },
];
</script>

<template>
  <div class="ourPartners" :class="{ 'is-mounted': mounted }">
    <section class="hero">
      <div class="container">
        <div class="kicker" data-reveal>{{ $t("Our partners") }}</div>

        <h1 class="heroTitle" data-reveal>
          {{ $t("Companies that trust Ko'kcha doors") }}
        </h1>

        <p class="heroText" data-reveal>
          {{
            $t(
              "From boutique hotels and bridal salons to manufacturing and media brands — these are some of the companies we've worked with across Tashkent."
            )
          }}
        </p>
      </div>
    </section>

    <section class="section section--stats">
      <div class="container">
        <div class="stats" data-reveal>
          <div class="stat" v-for="(s, i) in stats" :key="i">
            <div class="stat__num">{{ s.num }}</div>
            <div class="stat__text">{{ $t(s.text) }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="head" data-reveal>
          <h2 class="sectionTitle">{{ $t("Our partners") }}</h2>
        </div>

        <div class="grid" data-reveal>
          <article class="card" v-for="(p, i) in partners" :key="i">
            <div class="card__logo">
              <img :src="p.logo" :alt="p.name" loading="lazy" />
            </div>
            <div class="card__name">{{ p.name }}</div>
            <div class="card__category">{{ $t(p.category) }}</div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--tint">
      <div class="container">
        <div class="industriesHead" data-reveal>
          <h2 class="sectionTitle">{{ $t("Industries we work with") }}</h2>
        </div>

        <div class="chips" data-reveal>
          <span class="chip" v-for="(item, i) in industries" :key="i">
            {{ $t(item) }}
          </span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta" data-reveal>
          <div class="cta__content">
            <div class="cta__title">
              {{ $t("Want to become our partner too?") }}
            </div>
            <div class="cta__text">
              {{
                $t(
                  "Leave a request and our team will get in touch to discuss cooperation terms."
                )
              }}
            </div>
          </div>

          <div class="cta__actions">
            <RouterLink :to="{ name: 'partners' }" class="btn btn--primary">
              {{ $t("Partner Program") }}
            </RouterLink>
            <a class="btn btn--ghost" href="tel:+998901301010">
              {{ $t("To call") }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ourPartners {
  min-height: 100vh;
  background: #ffffff;
  color: #111827;
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.hero {
  padding: 56px 0 20px;
}

.kicker {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: #fff7f1;
  border: 1px solid #f7d9bf;
  color: #9a5a24;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.heroTitle {
  margin-top: 18px;
  font-size: clamp(34px, 4.4vw, 58px);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.03em;
  max-width: 20ch;
}

.heroText {
  margin-top: 16px;
  max-width: 68ch;
  color: #6b7280;
  font-size: 16px;
  line-height: 1.85;
}

.section {
  padding: 36px 0;
}

.section--stats {
  padding-top: 8px;
}

.section--tint {
  background: #f8f8f8;
  border-top: 1px solid #eef0f3;
  border-bottom: 1px solid #eef0f3;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.stat {
  padding: 18px;
  border-radius: 18px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  text-align: center;
}

.stat__num {
  color: #f08a3c;
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 900;
  letter-spacing: -0.01em;
}

.stat__text {
  margin-top: 6px;
  color: #6b7280;
  font-size: 13px;
}

.head,
.industriesHead {
  max-width: 760px;
  margin-bottom: 20px;
}

.sectionTitle {
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #111827;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 22px;
  padding: 22px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 50px rgba(17, 24, 39, 0.08);
  border-color: #f2b37e;
}

.card__logo {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.card__logo img {
  max-width: 100%;
  max-height: 90px;
  object-fit: contain;
  border-radius: 12px;
}

.card__name {
  font-size: 16px;
  font-weight: 800;
  color: #111827;
}

.card__category {
  margin-top: 6px;
  font-size: 13px;
  color: #9ca3af;
  font-weight: 600;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #111827;
  font-size: 14px;
  font-weight: 700;
}

.cta {
  padding: 32px;
  border-radius: 24px;
  background: #111827;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.cta__content {
  max-width: 640px;
}

.cta__title {
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 900;
  line-height: 1.2;
}

.cta__text {
  margin-top: 10px;
  color: #9ca3af;
  font-size: 15px;
  line-height: 1.75;
}

.cta__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  color: #111827;
  background: #ffffff;
  border-color: #ffffff;
}

.btn--ghost {
  color: #ffffff;
  background: transparent;
  border-color: rgba(255, 255, 255, 0.35);
}

[data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.is-mounted [data-reveal].is-in {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 28px);
  }

  .hero {
    padding: 42px 0 12px;
  }

  .section {
    padding: 24px 0;
  }

  .cta {
    padding: 22px;
  }
}

@media (max-width: 560px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .container {
    width: calc(100% - 20px);
  }
}
</style>
