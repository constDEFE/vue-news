<template>
  <div class="container">
    <Header />
    <Main :news="filteredNews" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import news from "../../JSON/news.json";
import { eventBus } from "../../main";

export default {
  data: () => ({
    news,
    date: null,
    searchQuery: "",
  }),
  computed: {
    filteredNews() {
      if (this.date && this.searchQuery) {
        return this.news.filter((item) => {
          const itemDate = new Date(item.date);

          return (
            itemDate < this.date.end &&
            itemDate > this.date.start &&
            item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        });
      } else if (this.date) {
        return this.news.filter((item) => {
          const itemDate = new Date(item.date);

          return itemDate < this.date.end && itemDate > this.date.start;
        });
      } else if (this.searchQuery) {
        return this.news.filter((item) =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.news;
      }
    },
  },
  components: {
    Header,
    Main,
    Footer,
  },
  created() {
    eventBus.$on("dateChange", (event) => (this.date = event));
    eventBus.$on("searchChange", (event) => (this.searchQuery = event));
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";

.container {
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  background: #fff;
  padding: 16px;

  @media (min-width: 560px) {
    padding: 24px 32px;
  }

  @media (min-width: 960px) {
    padding: 48px 80px;
  }
}
</style>
