<template>
  <div class="kpi">
    <h5 class="kpi__title">{{ title }}</h5>
    <h4 class="kpi__data">{{ value | numberFmt }}</h4>
  </div>
</template>

<script>
import { formatNumber } from '~/utils/format-number';

export default {
  props: [ 'title', 'value' ],
  filters: {
    numberFmt: formatNumber
  }
};
</script>

<style lang="scss">
  .kpi {
    text-align: center;
    flex: 1 1 auto;

    & &__title {
      text-transform: uppercase;
      white-space: nowrap;
      font-weight: 400;
    }

    & &__data {
      font-weight: 700;
    }
  }
</style>
