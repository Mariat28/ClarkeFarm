<template>
  <div class="mt-4">
    <div id="add-button">
      <a  class="btn btn-success btn-sm float-end" @click.prevent="showModal">
        Add Accommodation
      </a>
    </div>
    <div class="modal-overlay" v-if="modalVisible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Accommodation</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"/>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="submitAccomodationObject">
              <div class="mb-3 form-group">
                <label>Accommodation title</label>
                <input type="text" class="form-control" name="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label>Describe the accommodation in brief</label>
                <input type="text" class="form-control" name="description" v-model="description">
              </div>
              <div class="mb-3 form-group">
                  <label>Currency</label>
                  <select name="currency" class="form-select" v-model="currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                   </div>
                 <div class="mb-3 form-group">
                  <label>Cost of accommodation</label>
                  <input type="text" class="form-control" name="cost" v-model="cost">
              </div>
              <div class="mb-4 form-group">
                 <label class="form-label">Upload image</label>
                <input type="file"  class="form-control form-control-md" name="image" ref="file" @change="onFileChange">
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-success">Submit Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
   <Table :itemList="allAccomodations" @delete-item="confirmDelete"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AccommodationService from '@/services/accomodation-service';
import Swal from 'sweetalert2';
import Table from './Table.vue';

export default {
  name: 'AccomodationModal',
  created() {
    this.$store.dispatch('fetchAllAccomodations');
  },
  components: {
    Table,
  },
  data() {
    return {
      modalVisible: false,
      title: '',
      description: '',
      currency: '$',
      cost: '0.00',
      file: '',
    };
  },
  computed: {
    ...mapState({
      allAccomodations: (state) => state.accomodations.accomodations,
    }),
  },
  methods: {
    createImagePath(filename) {
      return `/images/${filename}`;
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    createAccomodationObject() {
      const inputData = {
        title: this.title,
        description: this.description,
        currency: this.currency,
        cost: this.cost,
        file: this.file,
      };
      const formData = new FormData();
      for (const [key, value] of Object.entries(inputData)) {
        formData.append(key, value);
      }
      return formData;
    },
    resetAccomodationObject() {
      this.title = '';
      this.description = '';
      this.currency = '$';
      this.cost = '0.00';
      this.file = '';
    },
    submitAccomodationObject() {
      const accomodation = this.createAccomodationObject();
      AccommodationService.postAccomodation(accomodation)
        .then((response) => {
          this.closeModal();
          Swal.fire('Saved', 'Accomodation has been added', 'success');
          this.$store.dispatch('addAccomodation', response.data);
        });
      this.resetAccomodationObject();
    },
    deleteAccomodationItem(id) {
      AccommodationService.deleteAccomodation(id)
        .then((response) => {
          Swal.fire('Deleted', 'Accomodation has been Permanently deleted', 'success');
          this.$store.dispatch('deleteAccomodation', response.data);
        });
    },
    confirmDelete(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can\'t revert this action',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteAccomodationItem(id);
        } else {
          Swal.fire('Cancelled', 'Accomodation is still available', 'info');
        }
      });
    },
  },
};
</script>

<style scoped>
.modal-overlay{
  background-color: rgba(0, 0, 0, 0.4);
  width:100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.content-header{
  background-color: #ececec;
  height:50px;
  display: flex;
  align-items: center;
  position: relative;
}
</style>
