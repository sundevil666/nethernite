<template>
  <div>
    <ul
        v-for="(pack, index) in packages"
        :key="index"
        class="list-group"
    >
      <li class="list-group-item">
        <div>
          Name:
          <strong
              class="pointer"
              data-toggle="modal"
              data-target="#modal"
              @click="selectedItem(pack)"
          >
            {{ pack.name }}
          </strong>
        </div>
        <div class="d-flex">
          <span>description:</span>
          <span class="badge bg-success mx-3"> {{ pack.description }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'ListGroup',
  props: {
    packages: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapMutations([
       'SET_SELECTED_ITEM'
    ]),
    selectedItem (val) {
      this.SET_SELECTED_ITEM(val)
    }
  }
};
</script>
