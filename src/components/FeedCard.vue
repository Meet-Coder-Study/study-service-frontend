<template>
  <div
    class="w-full md:w-2-division lg:w-3-division xl:w-4-division text-left m-2"
  >
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "타이틀 title1 title1 title1 title1 title1",
    },
    content: {
      type: String,
      default:
        "해당 코드는 깃허브에 공개되어 있습니다. 해당 코드는 깃허브에 공개되어 있습니다. 해당 코드는 깃허브에 공개되어 있습니다. 해당 코드는 깃허브에 공개되어 있습니다. 해당 코드는 깃허브에 공개되어 있습니다. 해당 코드는 깃허브에 공개되어 있습니다. 해당 코드는 깃허브에 공개되어 있습니다.",
    },
    date: {
      type: String,
      default: "2020-11-16",
    },
    userName: {
      type: String,
      default: "username",
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
