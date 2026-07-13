<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

import VideoCard from "@/components/views/video/VideoCard.vue";
import VideoModal from "@/components/views/video/VideoModal.vue";

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

const videos = [
  {
    id: 1,
    src: "/video/video-page/1.mp4",
    poster: "/video/video-page/thumbs/1.jpg",
    date: "2024-04-20",
    titleKey: "Another satisfied customer of “Ko'kcha eshiklari”",
  },
  {
    id: 2,
    src: "/video/video-page/2.mp4",
    poster: "/video/video-page/thumbs/2.jpg",
    date: "2023-08-26",
    titleKey: "Our doors at the Al Anvar hotel",
  },
  {
    id: 3,
    src: "/video/video-page/3.mp4",
    poster: "/video/video-page/thumbs/3.jpg",
    date: "2025-08-29",
    titleKey:
      "For us, every door is more than just wood — it's the beginning of a new story. We recently installed doors for the popular Novias Plaza bridal salon.",
  },
  {
    id: 4,
    src: "/video/video-page/4.mp4",
    poster: "/video/video-page/thumbs/4.jpg",
    date: "2024-09-03",
    titleKey: "The word “delay” is not in our vocabulary",
  },
  {
    id: 5,
    src: "/video/video-page/5.mp4",
    poster: "/video/video-page/thumbs/5.jpg",
    date: "2024-04-24",
    titleKey: "We are always working for your comfort",
  },
];

const sortedVideos = computed(() =>
  [...videos].sort((a, b) => new Date(b.date) - new Date(a.date))
);

const activeVideo = ref(null);

const openVideo = (video) => {
  activeVideo.value = video;
};

const closeVideo = () => {
  activeVideo.value = null;
};
</script>

<template>
  <div class="videoPage" :class="{ 'is-mounted': mounted }">
    <section class="hero">
      <div class="container">
        <div class="kicker" data-reveal>{{ $t("Video") }}</div>

        <h1 class="heroTitle" data-reveal>
          {{ $t("Video reviews from our clients") }}
        </h1>

        <p class="heroText" data-reveal>
          {{
            $t(
              "Watch how Ko'kcha doors look in real interiors — hotels, salons, offices and homes of our clients."
            )
          }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid" data-reveal>
          <VideoCard
            v-for="video in sortedVideos"
            :key="video.id"
            :video="video"
            @play="openVideo"
          />
        </div>
      </div>
    </section>

    <VideoModal :video="activeVideo" @close="closeVideo" />
  </div>
</template>

<style scoped>
.videoPage {
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
  max-width: 16ch;
}

.heroText {
  margin-top: 16px;
  max-width: 62ch;
  color: #6b7280;
  font-size: 16px;
  line-height: 1.85;
}

.section {
  padding: 36px 0 80px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
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
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
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
    padding: 24px 0 56px;
  }
}

@media (max-width: 560px) {
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
