<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  ctaText: { type: String, default: "" },
  ctaTo: { type: [String, Object], default: "" }, // route or hash
});
</script>

<template>
  <section class="py-12 md:py-16">
    <div class="container">
      <div class="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12">
        <h1 class="text-3xl md:text-5xl font-bold">{{ title }}</h1>
        <p v-if="subtitle" class="opacity-80 mt-3 max-w-2xl">{{ subtitle }}</p>

        <div v-if="ctaText" class="mt-6">
          <RouterLink
            v-if="typeof ctaTo === 'object'"
            :to="ctaTo"
            class="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-black font-semibold"
          >
            {{ ctaText }}
          </RouterLink>

          <a
            v-else
            :href="ctaTo"
            class="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-black font-semibold"
          >
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>