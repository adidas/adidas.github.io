<template>
  <div class="kpi">
    <div class="kpi__title">{{ title }}</div>
    <div class="kpi__data">
      {{ value | numberFmt }}
    </div>
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
    flex: 1;

    .kpi__title {
      font-size: 1.2em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .kpi__data {
      font-size: 2em;
      font-weight: bold;
    }
  }
</style>
