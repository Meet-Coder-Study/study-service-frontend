<template>
  <FeedCardList />
</template>

<script lang="ts">
import FeedCardList from "@/components/FeedCardList.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    FeedCardList,
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
