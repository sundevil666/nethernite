<template>
  <div id="app" class="pt-4">
    <div class="container">
      <div class="row">
<!--        Search-->
        <div class="col-12">
          <div>
            <Search />
          </div>
        </div>
<!--        Modal-->
        <div class="col-12">
          <Modal />
        </div>
<!--        ListGroup-->
        <div class="col-12">
          <ListGroup :packages="packages" />
        </div>
<!--        Pagination-->
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

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  data: () => {
    return {
      packages: []
    }
  },
  components: {
    Search,
    Modal,
    ListGroup,
    Pagination,
  },
  computed: {
    ...mapGetters([
        'SEARCH_VAL',
        'PACKAGES',
    ])
  },
  watch: {
    SEARCH_VAL() {
      this.sortPackagesBySearchVal(this.SEARCH_VAL)
    },
  },
  methods: {
    ...mapActions([
        'GET_PACKAGES_FROM_API'
    ]),
    sortPackagesBySearchVal (val) {
      this.packages = this.PACKAGES.filter(item => item.name.includes(val.toLowerCase()))
    }
  },
  async mounted () {
    await this.GET_PACKAGES_FROM_API()
    this.packages = this.PACKAGES
  },
}
</script>
