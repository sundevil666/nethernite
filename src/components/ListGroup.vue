<template>
  <div>
    <ul
        v-for="(pack, index) in packages"
        :key="index"
        class="list-group"
    >
      <li class="list-group-item">
        <div>Name: <strong>{{ pack.name }}</strong></div>
        Type: <span class="badge bg-success mx-3"> {{ pack.type }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListGroup',
  props: {
    packages: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>
