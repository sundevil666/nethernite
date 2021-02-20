<template>
  <div id="app" class="pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <Search />
          </div>
        </div>
        <div class="col-12">
          <div>
            <ListGroup />
          </div>
        </div>
        <div class="col-12">
          <div>
            <Modal />
          </div>
        </div>
        <div class="col-12">
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ListGroup from '@/components/ListGroup';
import Modal from '@/components/Modal';
import Pagination from '@/components/Pagination';

export default {
  name: 'App',
  components: {
    Search,
    Modal,
    ListGroup,
    Pagination,
  }
}
</script>

<style lang="scss">

</style>
