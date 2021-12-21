<template>
  <div class="arrow-navigation">
    <div class="forward-back-navigation">
      <span class="nav-button" @click="previousPage" v-if="currentPage > 1">
        <fa icon="angle-left" />
      </span>
      <span class="nav-button" @click="nextPage" v-if="currentPage !== lastPage">
        <fa icon="angle-right" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrowNavigation',
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    perPage: {
      type: Number,
      default: 3,
    },
    itemList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    lastPage() {
      return this.itemList.length > 0 ? Math.ceil(this.itemList.length / this.perPage) : 1;
    },
  },

  watch: {
    itemList() {
      this.currentPage = 1;
      this.filterDisplayData(this.currentPage);
    },
  },
  created() {
    this.filterDisplayData(this.currentPage);
  },
  methods: {
    filterDisplayData(currentPage) {
      const startIndex = (currentPage - 1) * this.perPage;
      const endIndex = currentPage * this.perPage;
      const displayData = this.itemList.filter((item, index) => {
        if (index >= startIndex && index < endIndex) { return item; }
        return false;
      });
      this.$emit('display-data', displayData);
    },

    nextPage() {
      this.currentPage += 1;
      this.filterDisplayData(this.currentPage);
    },

    previousPage() {
      this.currentPage -= 1;
      this.filterDisplayData(this.currentPage);
    },
  },
};
</script>

<style scoped>
.arrow-navigation{
  height: 35px;
}
.forward-back-navigation{
  width:80px;
  display:flex;
  justify-content: space-between;
}
.nav-button{
  width:32px;
  height: 35px;
  font-size: 20px;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mono-dark-green);
}
.nav-button:hover{
  cursor:pointer;
}
.active{
  background-color: var(--mono-dark-green);
}
.disabled{
  background-color: rgba(200,200,200,0.7);
}
</style>
