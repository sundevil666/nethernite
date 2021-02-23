<template>
  <div id="app" class="pt-4">
    <div class="container">
      <div class="row">
        <!--Search-->
        <div class="col-12">
          <div>
            <Search />
          </div>
        </div>
        <!--Modal-->
        <div class="col-12">
          <Modal />
        </div>
        <!--ListGroup-->
        <div class="col-12">
          <ListGroup :packages="PACKAGES" />
        </div>
        <!--Pagination-->
        <div class="col-12">
          <div>
            <nav class="pt-4">
              <Paginate
                  v-model="page"
                  :page-count="NBPAGES"
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

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  data: () => {
    return {
      page: 0
    };
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
      'NBPAGES',
    ]),
  },
  watch: {
    async SEARCH_VAL () {
      await this.FETCH_PACKAGES_FROM_API()
      this.PACKAGES.filter(item => item.name.includes(this.SEARCH_VAL.toLowerCase()));
    },
  },
  methods: {
    ...mapActions([
      'FETCH_PACKAGES_FROM_API'
    ]),
    ...mapMutations([
        'SET_SEARCH_VAL',
    ]),
    pageChangeHandler(currentPage = 1){
      this.FETCH_PACKAGES_FROM_API(currentPage)
    }
  },
  async mounted () {
    await this.FETCH_PACKAGES_FROM_API();
  },
};
</script>
