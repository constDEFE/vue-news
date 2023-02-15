<template>
  <header>
    <Search />
    <div class="row">
      <h2>Latest News</h2>
      <DatePicker />
    </div>
  </header>
</template>

<script>
import DatePicker from "./DatePicker.vue";
import Search from "./Search.vue";

export default {
  components: {
    DatePicker,
    Search,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  button {
    background: $accent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      opacity: 0.8;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 560px) {
    h2 {
      font-size: 28px;
    }

    button {
      padding: 10px 20px;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 32px;
    }

    button {
      padding: 12px 24px;
    }
  }
  @media (min-width: 960px) {
    h2 {
      font-size: 40px;
    }

    padding: 32px 0;
  }

  @media (min-width: 1280px) {
    h2 {
      font-size: 56px;
    }

    button {
      padding: 16px 28px;
      font-size: 16px;
    }
  }
}
</style>
