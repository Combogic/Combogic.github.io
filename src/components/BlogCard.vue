<template>
  <div class="com-card
    blog-card"
    >
    <div class="blog-card-container">
      <div class="blog-card-head">
        <img class="blog-card-img"
          :src=" image "
          :alt=" title "
          width="443"
          height="249"
          >
      </div>
      <div class="blog-card-body">
        <h3 class="blog-card-title">
          <a :href=" localePath( href ) ">
            {{ title }}
          </a>
        </h3>
        <p class="blog-card-desc">
          {{ description.slice( 0 , 100 ) }}......
        </p>
      </div>
    </div>
    <a class="com-btn-square"
      :href=" localePath( href ) "
      >
      {{ $t( 'blog.read' ) }}
    </a>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BlogCard',
  inheritAttrs: false,
})

const localePath = useLocalePath()

export interface BlogCardType {
  title: string
  description: string
  image: string
  href: string
}

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.blog-card {
  @apply flex flex-col items-end justify-between h-full;
}
.blog-card-container {
  @apply w-full;
}
.blog-card-head {
  @apply w-full aspect-video rounded-2xl overflow-hidden;
}
.blog-card-body {
  @apply p-4 flex flex-col gap-4;
}

/* 圖片 */
.blog-card-img {
  @apply h-full w-full object-cover object-center;
}

/* 文字 */
.blog-card-title {
  @apply w-full text-primary-500 font-semibold text-2xl;
}
.blog-card-desc {
  @apply w-full text-secondary-500 leading-loose;
}

.com-btn-square {
  @apply mr-4 mb-8;
}
</style>