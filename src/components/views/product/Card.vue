<template>
  <RouterLink
    :to="{ name: 'product', params: { id: data.id } }"
    class="product__card"
  >
    <div class="product__card-img">
      <img :src="data.thumbnail" alt="" />
      <div class="sale">-{{ Number(data.discountPercentage).toFixed(0) }}%</div>
    </div>

    <div class="product__card-category">
      {{ String(data.category).replaceAll("-", " ") }}
    </div>

    <div class="product__card-name">
      {{ data.title }}
    </div>

    <!-- ✅ Цена (оставил твою логику скидки, но без корзины) -->
    <div class="product__card-price">
      {{
        (
          data.price -
          (data.price * data.discountPercentage) / 100
        ).toFixed(0)
      }}$ -
      <div class="product__card-discount">
        <s>{{ data.price }}$</s>
      </div>
    </div>

    <!-- ✅ Вместо stock можно оставить, или убрать позже -->
    <div class="product__card-stock">
      In stock: {{ data.stock }}
    </div>

    <!-- ✅ Кнопка заявки вместо корзины -->
    <div class="product__card-btn">
      <button
        class="btn btn-primary"
        type="button"
        @click.prevent.stop="onLeadClick"
      >
        Оставить заявку
      </button>
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["data"]);

const onLeadClick = () => {
  // Пока просто заглушка.
  // Потом подключим модалку/форму или отправку в админку.
  console.log("Lead click for product:", props.data?.id);
};
</script>
