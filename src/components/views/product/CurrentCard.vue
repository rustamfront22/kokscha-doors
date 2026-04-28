<template>
  <div class="current">
    <div class="container">
      <div class="card-content">

        <!-- 🔥 КАРТИНКА -->
        <div class="card-content_carousel">
          <div class="carousel__item">
            <img
              :src="data.thumbnail"
              class="product-image"
              @error="onImgError"
              alt="door"
            />
          </div>
        </div>

        <!-- 🔥 ИНФА -->
        <div class="card-content_info">
          <div class="product__card-name">
            <h2>{{ data.title }}</h2>
          </div>

          <!-- характеристики -->
          <div class="specs">
            <p><b>Тип:</b> {{ data.type }}</p>
            <p><b>Стиль:</b> {{ data.style }}</p>
            <p><b>Цвет:</b> {{ data.color }}</p>
            <p><b>Размер:</b> {{ data.size }}</p>
            <p><b>Наполнение:</b> {{ data.fill }}</p>
          </div>

          <!-- описание -->
          <div class="description">
            <h3>Описание</h3>
            <p>{{ data.description }}</p>
          </div>

          <!-- кнопка -->
          <div class="product__card-btn">
            <button class="btn btn-primary" @click="onLeadClick">
              Оставить заявку
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- 🔥 похожие товары -->
    <NewProducts />
  </div>
</template>

<script setup>
import NewProducts from "../home/NewProducts.vue";

const props = defineProps(["data"]);

// fallback картинка
const onImgError = (e) => {
  e.target.src = "/no-image.png";
};

// заявка (пока заглушка)
const onLeadClick = () => {
  console.log("Lead for:", props.data?.id);
   window.openCallback();
};
</script>

<style scoped>
.card-content {
  display: flex;
  gap: 40px;
  margin-top: 30px;
}


.specs {
  margin-top: 20px;
}

.specs p {
  margin: 6px 0;
  font-size: 14px;
}

.description {
  margin-top: 20px;
}

.product__card-btn {
  margin-top: 20px;
}
.product-image-wrapper {
  width: 100%;
  max-width: 500px;
  height: 500px;
  background: #fff;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  overflow: hidden;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}
.product-image:hover {
  transform: scale(1.05);
}
</style>