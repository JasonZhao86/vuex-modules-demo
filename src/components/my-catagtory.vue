<template>
  <ul class="catagtory">
    <li
      :class="{ select: item.id === currentCatagtory }"
      v-for="item in catagtory"
      :key="item.id"
      @click="changeCurrentCatagtory(item.id)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catagtory', 'currentCatagtory']),
  },
  created() {
    this.$store.dispatch('catagtory/getCatagtory')
  },
  methods: {
    changeCurrentCatagtory(id) {
      this.$store.commit('catagtory/updateCurrentCatagtory', id)
    },
  },
}
</script>

<style></style>
