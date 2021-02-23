<template>
  <div id="app">
    <div class="wrap">
      <header class="container">
        <div class="row">
          <!--Search-->
          <div class="col-12">
            <div class="pt-4">
              <Search />
            </div>
          </div>
        </div>
      </header>
      <main class="container">
        <div class="row">
          <!--ListGroup-->
          <div class="col-12">
            <ListGroup :packages="PACKAGES" />
          </div>
        </div>
      </main>
      <div class="container">
        <div class="row">
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
      <footer class="container">
        <div class="row">
          <div class="col-12">
            <!--Footer-->
            <Footer />
          </div>
        </div>
      </footer>
    </div>
    <div class="container">
      <div class="row">
        <!--Modal-->
        <div class="col-12">
          <Modal v-if="SELECTED_ITEM" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ListGroup from '@/components/ListGroup';
import Modal from '@/components/Modal';
import Footer from '@/components/footer'

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  data: () => {
    return {
      page: 1
    };
  },
  components: {
    Search,
    Modal,
    ListGroup,
    Footer,
  },
  computed: {
    ...mapGetters([
      'SEARCH_VAL',
      'PACKAGES',
      'NBPAGES',
      'SELECTED_ITEM',
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
