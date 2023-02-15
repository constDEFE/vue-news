<template>
  <li>
    <img src="https://source.unsplash.com/200x200" alt="" />
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
  gap: 12px;
  border-top: 1px solid $border-color;
  padding: 40px 0;

  img {
    width: 200px;
    height: 200px;
  }

  .content {
    text-align: center;
    max-width: 90%;

    .date {
      display: inline-block;
      background: $accent;
      padding: 8px 20px;
      color: white;
      font-size: 14px;
    }

    .title {
      font-size: 24px;
      padding: 4px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > p {
      font-size: 15px;
      line-height: 26px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 7;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;

    img {
      width: 150px;
      height: 150px;
    }

    .content {
      text-align: left;
      max-width: none;
      max-width: 75%;

      .date {
        font-size: 16px;
      }

      .title {
        font-size: 28px;
        line-height: 36px;
        -webkit-line-clamp: 1;
      }

      > p {
        line-height: 22px;
        -webkit-line-clamp: 3;
      }
    }
  }

  @media (min-width: 960px) {
    img {
      width: 180px;
      height: 180px;
    }

    .content {
      .title {
        font-size: 32px;
        line-height: 54px;
      }

      > p {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }

  @media (min-width: 1280px) {
    gap: 40px;

    img {
      width: 200px;
      height: 200px;
    }

    .content {
      .title {
        font-size: 38px;
        line-height: 74px;
      }

      > p {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }
}
</style>
