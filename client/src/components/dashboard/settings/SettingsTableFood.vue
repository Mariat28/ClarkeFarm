<template>
  <div class="mt-3">
    <div id="add-button">
      <a class="btn btn-success btn-sm float-end" @click.prevent="showModal">
        Add Food
      </a>
    </div>
    <div class="modal-overlay" v-if="modalVisible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Food</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"/>
          </div>
          <div class="modal-body">
              <form class="form-group" @submit.prevent="submitFoodObject">
              <div class="mb-3 form-group">
                <label>Dish title</label>
                <input type="text" class="form-control" name="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label>Describe the dish in brief</label>
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
                  <label>Cost of food</label>
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
    <Table :itemList="allFoods" @delete-item="confirmDelete"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FoodService from '@/services/food-service';
import Swal from 'sweetalert2';
import Table from './Table.vue';

export default {
  name: 'FoodModal',
  created() {
    this.$store.dispatch('fetchAllFoods');
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
      allFoods: (state) => state.foods.foods,
    }),
  },
  methods: {
    createImagePath(filename) {
      return `/images/${filename}`;
    },
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    createFoodObject() {
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
    resetFoodObject() {
      this.title = '';
      this.description = '';
      this.currency = '$';
      this.cost = '0.00';
      this.file = '';
    },
    submitFoodObject() {
      const food = this.createFoodObject();
      FoodService.postFood(food)
        .then((response) => {
          this.closeModal();
          Swal.fire('Saved', 'Food has been added', 'success');
          this.$store.dispatch('addFood', response.data);
        });
      this.resetFoodObject();
    },
    deleteFoodItem(id) {
      FoodService.deleteFood(id)
        .then((response) => {
          Swal.fire('Deleted', 'Food has been Permanently deleted', 'success');
          this.$store.dispatch('deleteFood', response.data);
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
          this.deleteFoodItem(id);
        } else {
          Swal.fire('Cancelled', 'Food is still available', 'info');
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
