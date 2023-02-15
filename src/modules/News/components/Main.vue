<template>
  <main>
    <ul>
      <NewsItem
        v-for="item in news"
        :date="new Date(item.date)"
        :title="item.title"
        :desc="item.desc"
        :key="item.date"
      />
      <p v-if="!news.length">There's no posts</p>
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

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
