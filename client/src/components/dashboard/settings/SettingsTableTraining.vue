<template>
  <div class="mt-4">
    <div id="add-button">
      <a class="btn btn-success btn-sm float-end" @click.prevent="showModal">
        Add Training Program
      </a>
    </div>
    <div class="modal-overlay" v-if="modalVisible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Training Program</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"/>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="submitTrainingObject">
              <div class="mb-3 form-group">
                <label>Training Program title</label>
                <input type="text" class="form-control" name="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label>Describe the training program in brief</label>
                <input type="text" class="form-control" name="description" v-model="description">
              </div>
              <div class="mb-2 form-group ">
                <label class="form-check-label" >Is the training program priced?</label><br>
                <input type="radio" class="form-check-input"
                name="priced" value="Yes" v-model="priced"> Yes
                <input type="radio" class="form-check-input" name="priced" value="No"
                 checked v-model="priced"> No
              </div>
              <div class="mb-2 form-group">
                <span class="mb-2" v-if="priced=='Yes'">
                  <label>Currency</label>
                  <select name="currency" class="form-select" v-model="currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span><br>
                <span class="mb-3"  v-if="priced=='Yes'">
                  <label>Cost of training</label>
                  <input type="text" class="form-control" name="cost" v-model="cost">
                </span>
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
    <Table :itemList="allTrainings" @delete-item="confirmDelete"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TrainingService from '@/services/training-service';
import Swal from 'sweetalert2';
import Table from './Table.vue';

export default {
  name: 'TrainingModal',
  created() {
    this.$store.dispatch('fetchAllTrainings');
  },
  components: {
    Table,
  },
  data() {
    return {
      modalVisible: false,
      title: '',
      description: '',
      priced: 'No',
      currency: '$',
      cost: '0.00',
      file: '',
    };
  },
  computed: {
    ...mapState({
      allTrainings: (state) => state.trainings.trainings,
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
    createTrainingObject() {
      const inputData = {
        title: this.title,
        description: this.description,
        priced: this.priced,
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
    resetTrainingObject() {
      this.title = '';
      this.description = '';
      this.priced = 'No';
      this.currency = '$';
      this.cost = '0.00';
      this.file = '';
    },
    submitTrainingObject() {
      const training = this.createTrainingObject();
      TrainingService.postTraining(training)
        .then((response) => {
          this.closeModal();
          Swal.fire('Saved', 'Training has been added', 'success');
          this.$store.dispatch('addTraining', response.data);
        });
      this.resetTrainingObject();
    },
    deleteTrainingItem(id) {
      TrainingService.deleteTraining(id)
        .then((response) => {
          Swal.fire('Deleted', 'Training has been Permanently deleted', 'success');
          this.$store.dispatch('deleteTraining', response.data);
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
          this.deleteTrainingItem(id);
        } else {
          Swal.fire('Cancelled', 'Training is still available', 'info');
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
