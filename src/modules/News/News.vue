<template>
  <div class="container">
    <Header @sort="handleSort" />
    <Main :news="news" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import news from "../../JSON/news.json";

export default {
  data: () => ({
    news,
    sort: "desc",
  }),
  methods: {
    handleSort() {
      if (this.sort === "desc") {
        this.news.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.sort = "asc";
      } else {
        this.news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.sort = "desc";
      }
    },
  },
  components: {
    Header,
    Main,
    Footer,
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
  padding: 1rem;

  @media (min-width: 560px) {
    padding: 1.5rem 2rem;
  }

  @media (min-width: 960px) {
    padding: 3rem 5rem;
  }
}
</style>
