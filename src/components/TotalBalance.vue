<template>
  <div class="total-value">
    <div v-if="totalList == 0">Total balance: {{ totalList }}</div>
    <div v-else-if="totalList > 0" :style="{ color: 'chartreuse' }">
      Total balance: {{ totalList }}
    </div>
    <div v-else-if="totalList" :style="{ color: 'red' }">
      Total balance: {{ totalList }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(["totalList"])
  },
  data: () => ({
    color: "black"
  })
};
</script>

<style scoped>
.total-value {
  font-size: 2em;
  text-transform: uppercase;
  opacity: 1;
  font-stretch: extra-expanded;
  color: black;
}
</style>
