<template>
  <div class="wrapper">
    <label class="input">
      <img src="../../../assets/icons/search.svg" alt="" />
      <input @input="handleChange" type="text" placeholder="Search here" />
    </label>
  </div>
</template>

<script>
import { eventBus } from "../../../main";

export default {
  methods: {
    handleChange(event) {
      eventBus.$emit("searchChange", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";

.wrapper {
  display: grid;
  place-items: center;
  margin-bottom: 40px;

  .input {
    width: 90%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border: 1px solid $dark-border-color;
    border-radius: 6px;

    img {
      width: 24px;
      height: 24px;
    }

    input {
      padding: 8px 0;
      width: 100%;
      border: none;
      font-size: 1rem;

      &:focus {
        outline: none;
      }
    }

    @media (min-width: 768px) {
      width: 600px;
    }
  }
}
</style>
