<template>
  <div class="w-11/12 lg:w-1024">
    <div class="">
      <FeedCard />
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import FeedCard from "@/components/FeedCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    FeedCard,
  },
});
// import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// @Options({
//   components: {
//     HelloWorld
//   }
// })
// export default class Home extends Vue {}
</script>
