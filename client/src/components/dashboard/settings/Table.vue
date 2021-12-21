<template>
  <div class="div-table mt-4">
    <table class="table  table-hover table-striped table-nowrap mt-5">
      <thead class="table-secondary font-size-10 ">
        <tr>
          <th class="th-image">Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Priced</th>
          <th>Cost</th>
          <th class="th-actions">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itemList" :key="item._id">
          <td class="td-img-container">
            <img :src="createImagePath(item.filename)" aria-hidden="true">
          </td>
          <td class="td-title-container">{{ item.title }}</td>
          <td class="td-description-container">{{ item.description }}</td>
          <td class="td-priced-container">
            {{ item.priced ? item.priced : 'No' }}
          </td>
          <td class="td-cost-container">
            {{ item.currency }} {{ item.cost }}
          </td>
          <td class="td-actions-container" >
            <div class="actions-container" >
              <span class="delete" :data-id="item._id" @click="deleteItem">
                Delete
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'SettingsTable',
  methods: {
    createImagePath(filename) {
      return `/images/${filename}`;
    },
    deleteItem(event) {
      const srcElement = event.target;
      const id = srcElement.getAttribute('data-id');
      this.$emit('delete-item', id);
    },
  },
  props: {
    itemList: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
img{
  width: 60px;
  height: 60px;
  display: inline-block;
  object-fit: cover;
  border-radius: 50%;
}
.td-img-container{
  width:10%;
}
.td-title-container{
  width: 20%;
  text-align: left;
  vertical-align: middle;
}
.td-description-container{
  width: 40%;
  text-align: left;
  vertical-align: middle;
}
.td-priced-container{
  width: 10%;
  text-align: left;
  vertical-align: middle;
}
.td-cost-container{
  width:10%;
  text-align: left;
  vertical-align: middle;
}
.td-actions-container{
  width: 10%;
  padding:0;
  vertical-align: middle;
}
.th-actions{
  text-align: center;
}
.th-image{
  text-align: center;
}
.td
th,
td {
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
}
td {
  text-align: center;
  color: #2c3e50;
}
table {
  border-collapse: separate;
  border: solid #f5f5f5 1px;
  border-radius: 6px;
  -moz-border-radius: 6px;
}
.actions-container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:70%;
  margin-left: auto;
  margin-right: auto;
}
.delete{
  display: inline-block;
  width: 90%;
}
.delete:hover{
  color:red;
  cursor: pointer;
  border: 1px solid red;
}
</style>
