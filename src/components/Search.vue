<template>
  <label class="form-group d-block w-100">
    <input
        v-model="searchVal"
        class="form-control"
        placeholder="Search..."
        @input="search(searchVal)"
    />
  </label>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: "Search",
  computed: {
    ...mapGetters([
        'SEARCH_VAL',
    ]),
    searchVal: {
      get() {
        return this.SEARCH_VAL
      },
      set(value) {
        this.SET_SEARCH_VAL(value)
      }
    }
  },
  methods: {
    ...mapMutations([
       'SET_SEARCH_VAL'
    ]),
    search(val) {
      this.SET_SEARCH_VAL(val)
    }
  }
}
</script>
