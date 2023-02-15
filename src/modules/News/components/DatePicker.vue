<template>
  <v-date-picker @input="handleChange" class="picker" :value="range" is-range>
    <template v-slot="{ togglePopover }">
      <div class="wrapper">
        <button @click="togglePopover()">
          <img src="../../../assets/icons/calendar.svg" alt="" />
        </button>
        <input :value="output" readonly />
      </div>
    </template>
  </v-date-picker>
</template>

<script>
import { formattDate } from "../../../utils";
import { eventBus } from "../../../main";

export default {
  data: () => ({
    range: null,
  }),
  computed: {
    output() {
      if (this.range) {
        return `${formattDate(this.range.start)} - ${formattDate(this.range.end)}`;
      } else {
        return "All";
      }
    },
  },
  methods: {
    handleChange(event) {
      if (event.start.getTime() === event.end.getTime()) {
        this.range = null;
        eventBus.$emit("dateChange", null);
      } else {
        this.range = event;
        eventBus.$emit("dateChange", event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/variables";

.picker {
  display: inline-block;
}

.wrapper {
  display: flex;

  input {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background: $accent;
    cursor: pointer;

    img {
      pointer-events: none;
      width: 22px;
      height: 22px;
      color: white;
    }
  }

  @media (min-width: 768px) {
    button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    input {
      display: block;
      width: 200px;
      border: 1px solid $dark-border-color;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      padding: 8px 12px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
