<script setup>
import { onBeforeUnmount, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  video: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);

const { t } = useI18n();

const close = () => emit("close");

const onKeydown = (e) => {
  if (e.key === "Escape") close();
};

watch(
  () => props.video,
  (video) => {
    document.body.style.overflow = video ? "hidden" : "";
  }
);

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <teleport to="body">
    <transition name="videoFade">
      <div
        v-if="video"
        class="videoModal"
        @click="close"
      >
        <button
          class="videoModal__close"
          type="button"
          :aria-label="t('Close')"
          @click="close"
        >
          ×
        </button>

        <div class="videoModal__stage" @click.stop>
          <video
            :key="video.src"
            class="videoModal__player"
            :src="video.src"
            :poster="video.poster"
            controls
            autoplay
            playsinline
            controlslist="nodownload noremoteplayback"
          ></video>

          <p class="videoModal__title">{{ t(video.titleKey) }}</p>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.videoModal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 20px 32px;
}

.videoModal__close {
  position: fixed;
  top: 20px;
  right: 24px;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 30px;
  line-height: 1;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.videoModal__close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.videoModal__stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  max-width: 92vw;
  max-height: 100%;
}

.videoModal__player {
  max-width: 92vw;
  max-height: calc(100vh - 140px);
  width: auto;
  height: auto;
  aspect-ratio: 9 / 16;
  border-radius: 16px;
  background: #000;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  outline: none;
}

.videoModal__title {
  max-width: 560px;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  line-height: 1.6;
}

.videoFade-enter-active,
.videoFade-leave-active {
  transition: opacity 0.22s ease;
}

.videoFade-enter-from,
.videoFade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .videoModal {
    padding: 56px 12px 20px;
  }

  .videoModal__close {
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    font-size: 26px;
  }

  .videoModal__player {
    max-height: calc(100vh - 120px);
  }
}
</style>
