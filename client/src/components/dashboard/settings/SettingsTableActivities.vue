<template>
  <div class="mt-3">
    <div id="add-button">
      <a  class="btn btn-success btn-sm float-end" @click.prevent="showModal">
        Add Activity
      </a>
    </div>
    <div class="modal-overlay" v-if="modalVisible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Activity</h5>
            <button type="button" class="btn-close"  aria-label="Close" @click="closeModal"/>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="submitActivityObject">
              <div class="mb-3 form-group">
                <label>Activity title</label>
                <input type="text" name="title" v-model="title" class="form-control">
              </div>
              <div class="mb-3 form-group">
                <label>Describe the activity in brief</label>
                <input type="text" name="description" v-model="description" class="form-control">
              </div>
              <div class="mb-2 form-group">
                <label class="form-check-label">Is the activity priced?</label><br>
                <input type="radio" name="priced" value="Yes" v-model="priced" class="form-check-input"> Yes
                <input type="radio" name="priced" value="No" checked v-model="priced" class="form-check-input"> No
              </div>
              <div class="mb-2 form-group">
                <span v-if="priced=='Yes'">
                  <label>Currency</label>
                  <select name="currency" v-model="currency" class="form-select">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span><br>
                <span v-if="priced=='Yes'">
                  <label>Cost of activity</label>
                  <input type="text" name="cost" v-model="cost" class="form-control">
                </span>
              </div>
              <div class="mb-4 form-group">
                <label class="form-label">Upload image</label>
                <input type="file"  name="image" ref="file" @change="onFileChange" class="form-control form-control-md">
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
    <Table :itemList="allActivities" @delete-item="confirmDelete"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ActivityService from '@/services/activity-service';
import Swal from 'sweetalert2';
import Table from './Table.vue';

export default {
  name: 'ActivityModal',
  created() {
    this.$store.dispatch('fetchAllActivities');
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
      allActivities: (state) => state.activities.activities,
    }),
  },
  methods: {
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    createActivityObject() {
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
    resetActivityObject() {
      this.title = '';
      this.description = '';
      this.priced = 'No';
      this.currency = '$';
      this.cost = '0.00';
      this.file = '';
    },
    submitActivityObject() {
      const activity = this.createActivityObject();
      ActivityService.postActivity(activity)
        .then((response) => {
          this.closeModal();
          Swal.fire('Saved', 'Activity has been added', 'success');
          this.$store.dispatch('addActivity', response.data);
        });
      this.resetActivityObject();
    },
    deleteActivityItem(id) {
      ActivityService.deleteActivity(id)
        .then((response) => {
          Swal.fire('Deleted', 'Activity has been Permanently deleted', 'success');
          this.$store.dispatch('deleteActivity', response.data);
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
          this.deleteActivityItem(id);
        } else {
          Swal.fire('Cancelled', 'Activity is still available', 'info');
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
