<template>
  <div
    class="w-full md:w-2-division lg:w-3-division xl:w-4-division text-left m-2"
  >
    <router-link :to="`/blog/${id}`">
      <img class="w-full" :src="thumbnail" :alt="title" />
      <div class="p-2">
        <h2 class="font-medium text-xl text-black mb-1 clamp-1">{{ title }}</h2>
        <p class="clamp-3">
          {{ content }}
        </p>
        <span class="text-sm text-gray-500">{{ date }}</span>
        <span class="px-1 text-sm text-gray-500">·</span>
        <span class="text-sm text-gray-500">{{ userName }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "https://dummyimage.com/600x400/000/fff",
    },
  },
  // setup(props) {
  //   return {};
  // },
});
</script>

<style scoped></style>
