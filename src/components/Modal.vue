<template>
  <div>
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Полное описание
              <strong></strong>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>name: <strong>{{ SELECTED_ITEM.name }}</strong></div>
            <div>
              description: <strong>{{ SELECTED_ITEM.description }}</strong>
            </div>
            <div>
              repository: <strong>{{ SELECTED_ITEM.repository.url }}</strong>
            </div>
            <div>
              user: <strong>{{ SELECTED_ITEM.repository.user }}</strong>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Modal",
  computed: {
    ...mapGetters([
        'SELECTED_ITEM'
    ])
  }
}
</script>
