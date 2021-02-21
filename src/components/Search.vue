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
import {mapActions} from 'vuex'

export default {
  name: "Search",
  data: () => {
    return {
      searchVal: '',
    }
  },
  methods: {
    ...mapActions([
       'GET_SEARCH_VAL'
    ]),
    search(val) {
      this.GET_SEARCH_VAL(val)
    }
  }
}
</script>
