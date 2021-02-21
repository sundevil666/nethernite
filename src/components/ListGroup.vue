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
        <div>
          Type: <span class="badge bg-success mx-3"> {{ pack.type }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'ListGroup',
  props: {
    packages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
       'GET_SELECTED_ITEM'
    ]),
    selectedItem (val) {
      this.GET_SELECTED_ITEM(val)
    }
  }
};
</script>
