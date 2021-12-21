<template>
  <div class="dashboard-container">
    <SideNav id="sidebar"/>
    <Content id="maincontent"/>
  </div>
</template>

<script>
import Content from '@/components/dashboard/reviews/ReviewContent.vue';
import SideNav from '@/components/shared/SideNavigation.vue';

export default {
  name: 'UserReviews',
  components: {
    SideNav,
    Content,
  },
};
</script>
