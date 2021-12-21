<template>
  <div class="reviews-container">
    <h5 class="hero-text-lg">Reviews</h5>
    <div class="location">
      <span class="text-green">Dashboard</span>
      <span>&nbsp;&nbsp;/&nbsp;&nbsp;User reviews</span>
    </div>
    <hr>
    <template v-if="unverifiedReviews.length === 0">
      <div class="no-reviews">
        No new user reviews.
      </div>
    </template>
    <template v-else>
      <div class="review-content-container">
        <div class="review" v-for="review in unverifiedReviews" :key="review._id">
          <div class="review-details">
            <div class="reviewee-details">
              <span class="reviewee-name">
                {{ capitalizeEachWord(review.name) }}
              </span>
              <span :class="['review-type', review.category === 'visitor'? 'type-visitor': 'type-coffee']">
                {{ capitalizeFirstLetter(review.category) }}
              </span>
            </div>
            <div class="review-date">
            {{ getMonth(review) }}, {{ getYear(review) }}
            </div>
            <div class="review-content">
              {{ capitalizeFirstLetter(review.review) }}
            </div>
          </div>
          <div class="review-actions">
            <span class="accept-review action" :id="review._id" :category="review.category" @click="confirmAccept">
              Accept
            </span>
            <span class="reject-review action" :id="review._id" :category="review.category" @click="confirmDelete">
              Delete
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import FormatText from '@/mixins/format-text';
import * as date from '@/plugins/date';
import ReviewService from '@/services/review-service';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
  created() {
    this.$store.dispatch('fetchAllCoffeeReviews');
    this.$store.dispatch('fetchAllVisitorReviews');
  },
  mixins: [FormatText],
  methods: {
    getMonth(review) {
      return date.monthInText(date.extractMonth(review.createdAt));
    },
    getYear(review) {
      return date.extractYear(review.createdAt);
    },
    deleteReview(event) {
      const srcElement = event.target;
      const id = srcElement.id;
      const category = srcElement.getAttribute('category');
      ReviewService.delete(category, id)
        .then(() => {
          Swal.fire('Deleted', 'Review has been Permanently deleted', 'success');
          this.$store.dispatch('fetchAllCoffeeReviews');
          this.$store.dispatch('fetchAllVisitorReviews');
        });
    },
    acceptReview(event) {
      const srcElement = event.target;
      const id = srcElement.id;
      const category = srcElement.getAttribute('category');
      ReviewService.update(category, id)
        .then(() => {
          Swal.fire('Accepted', 'Review has been accepted', 'success');
          this.$store.dispatch('fetchAllCoffeeReviews');
          this.$store.dispatch('fetchAllVisitorReviews');
        });
    },
    confirmDelete(event) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can\'t revert this action',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteReview(event);
        } else {
          Swal.fire('Cancelled', 'Review is still available', 'info');
        }
      });
    },
    confirmAccept(event) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can\'t revert this action',
        showCancelButton: true,
        confirmButtonText: 'Yes Accept it!',
        cancelButtonText: 'No, Hold on!',
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.acceptReview(event);
        } else {
          Swal.fire('Cancelled', 'Review is still available', 'info');
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      unverifiedReviews: 'getAllUnverifiedReviews',
    }),
  },
};
</script>

<style scoped>
.reviews-container{
  margin-top: 12px;
  width: 90%;
}
.hero-text-lg{
  font-size: 20px;
  font-weight: bold;
  margin-bottom:12px;
}
.text-green{
  color: var(--mono-dark-green);
}
.location{
  margin-top: 20px;
}
.review{
  display: flex;
  margin-bottom: 40px;
}
.review-content-container{
  width:100%;
}
.review-details{
  width: 76%;
  padding-right: 10px;
  margin-right: 3%;
}
.review-actions{
  width: 20%;
}
.reviewee-details{
  padding-bottom: 5px;
}
.review-details span{
  display: inline-block;
}
.reviewee-name{
  font-weight: bold;
  font-size: 16px;
  width: 180px;
}
.review-date{
  font-weight: bold;
  color: #a9a9a9;
  padding-bottom: 5px;
}
.review-actions{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.action{
  display: flex;
  width: 40%;
  height: 30px;
  align-items: center;
  justify-content: center;
}
.action:hover{
  cursor: pointer;
  transform: scale(0.9);
}
.accept-review{
  background-color: var(--dark-green);
  color:white;
}
.reject-review{
  border: 1px solid #FC646C;
  color: #FC646C;
}
.reject-review:hover{
  background-color: #FC646C;
  color: white;
  border: none;
}
.no-reviews{
  display: flex;
  justify-content: center;
  height: 100%;
  width:100%;
  padding-top: 50px;
  font-weight: bold;
  font-size: 30px;
  color: #a9a9a9;
}
.review-type{
  font-size: 15px;
  width: 60px;
  text-align: center;
  color: white;
  border-radius: 10px;
}
.type-coffee{
  background-color: rgba(4, 84, 140, 0.8)
}
.type-visitor{
  background-color: rgba(252, 167, 5, 0.8);;
}
</style>
