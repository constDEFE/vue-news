<template>
  <li>
    <img
      width="200"
      height="200"
      src="https://source.unsplash.com/200x200"
      alt=""
    />
    <div class="content">
      <span class="date">{{ dateString }}</span>
      <h4 class="title">{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
  </li>
</template>

<script>
import { formattDate } from "../../../utils";

export default {
  props: ["date", "title", "desc"],
  computed: {
    dateString() {
      return formattDate(this.date);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid $border-color;
  padding: 2.5rem 0;

  .content {
    text-align: center;
    max-width: 600px;

    .date {
      display: inline-block;
      background: $accent;
      padding: 0.5rem 1.25rem;
      color: white;
      font-size: 0.8rem;
    }

    .title {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
    .content {
      text-align: left;
      max-width: none;

      .date {
        font-size: 1rem;
      }

      .title {
        font-size: 1.6rem;
        padding: 0.5rem 0;
      }
    }
  }

  @media (min-width: 960px) {
    .content {
      .title {
        font-size: 1.9rem;
      }
    }
  }

  @media (min-width: 1280px) {
    gap: 2.5rem;

    .content {
      .title {
        font-size: 2.5rem;
      }
    }

    p {
      padding-right: 10rem;
      font-size: 1.25rem;
    }
  }
}
</style>
