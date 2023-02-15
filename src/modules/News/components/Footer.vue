<template>
  <footer>
    <ul class="pagination">
      <li>
        <input type="radio" name="page" id="prev" />
        <label for="prev">&#8249;</label>
      </li>
      <li>
        <input checked type="radio" name="page" id="1" />
        <label for="1">1</label>
      </li>
      <li>
        <input type="radio" name="page" id="2" />
        <label for="2">2</label>
      </li>
      <li>
        <input type="radio" name="page" id="3" />
        <label for="3">3</label>
      </li>
      <li>
        <input type="radio" name="page" id="4" />
        <label for="4">4</label>
      </li>
      <li>
        <input type="radio" name="page" id="5" />
        <label for="5">5</label>
      </li>
      <li>
        <input type="radio" name="page" id="next" />
        <label for="next">&#8250;</label>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../../assets/variables";

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 70px 0;

  label {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $dark-border-color;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  input {
    display: none;
  }

  input:checked + label {
    border-color: $accent;
    color: $accent;
  }
}
</style>
