<template>
  <header>
    <h2>Latest News</h2>
    <button @click="handleSort">
      <Calendar />
      Sort by date
    </button>
  </header>
</template>

<script>
import Calendar from "../../../ui/icons/Calendar.vue";

export default {
  components: {
    Calendar,
  },
  methods: {
    handleSort() {
      this.$emit("sort");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  button {
    background: $accent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 560px) {
    h2 {
      font-size: 1.75rem;
    }

    button {
      padding: 0.6rem 1.25rem;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    button {
      padding: 0.75rem 1.5rem;
    }
  }
  @media (min-width: 960px) {
    h2 {
      font-size: 2.5rem;
    }

    padding: 2rem 0;
  }

  @media (min-width: 1280px) {
    h2 {
      font-size: 3.5rem;
    }

    button {
      padding: 1rem 1.75rem;
      font-size: 1rem;
    }
  }
}
</style>
