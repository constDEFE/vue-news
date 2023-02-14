<template>
  <main>
    <ul v-for="item in news">
      <NewsItem
        :date="new Date(item.date)"
        :title="item.title"
        :desc="item.desc"
        :key="item.date"
      />
    </ul>
  </main>
</template>

<script>
import NewsItem from "./NewsItem.vue";

export default {
  props: ["news"],
  components: {
    NewsItem,
  },
};
</script>
