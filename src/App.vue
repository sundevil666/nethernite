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
          <ListGroup :packages="items" />
        </div>
<!--        Pagination-->
        <div class="col-12">
          <div>
            <nav
                v-if="items.length > pageSize"
                class="pt-4"
            >
              <Paginate
                  v-model="page"
                  :page-count="pageCount"
                  :prev-text="'Назад'"
                  :next-text="'Вперед'"
                  :container-class="'pagination'"
                  :page-class="'page-item'"
                  :page-link-class="'page-link'"
                  :prev-class="'page-item'"
                  :prev-link-class="'page-link'"
                  :next-class="'page-item'"
                  :next-link-class="'page-link'"
                  :click-handler="pageChangeHandler"
              />
            </nav>
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
import paginationMixin from './mixins/pagination.mixin'

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  mixins: [paginationMixin],
  data: () => {
    return {
      packages: []
    }
  },
  components: {
    Search,
    Modal,
    ListGroup,
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
      this.packages = this.setupPagination(this.PACKAGES.filter(item => item.name.includes(val.toLowerCase())))
    },
  },
  async mounted () {
    await this.GET_PACKAGES_FROM_API()
    this.packages = await this.setupPagination(this.PACKAGES)
  },
}
</script>
