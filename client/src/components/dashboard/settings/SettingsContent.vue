<template>
  <div class="settings-container">
    <h5 class="hero-text-lg">Settings</h5>
    <div class="location">
      <span class="text-green">Dashboard</span>
      <span>&nbsp;&nbsp;/&nbsp;&nbsp;Settings</span>
    </div>
    <hr>
    <div class="tab-menu  mt-5 nav-justified">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity"
          type="button" role="tab" aria-controls="home" aria-selected="true">Activities</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="accommodation-tab" data-bs-toggle="tab" data-bs-target="#accommodation"
          type="button" role="tab" aria-controls="profile" aria-selected="false">Accommodation</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="food-tab" data-bs-toggle="tab" data-bs-target="#food" type="button"
          role="tab" aria-controls="contact" aria-selected="false">Food</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="training-tab" data-bs-toggle="tab" data-bs-target="#training" type="button"
          role="tab" aria-controls="contact" aria-selected="false">Training Programs</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="activity" role="tabpanel" aria-labelledby="activity-tab">
          <ActivitiesTbl/>
        </div>
        <div class="tab-pane fade" id="accommodation" role="tabpanel" aria-labelledby="accommodation-tab">
          <AccommadtionTbl/>
        </div>
        <div class="tab-pane fade" id="food" role="tabpanel" aria-labelledby="food-tab">
          <FoodTbl/>
        </div>
        <div class="tab-pane fade" id="training" role="tabpanel" aria-labelledby="training-tab">
          <TrainingTbl/>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import ActivitiesTbl from '@/components/dashboard/settings/SettingsTableActivities.vue';
import AccommadtionTbl from '@/components/dashboard/settings/SettingsTableAccommodation.vue';
import FoodTbl from '@/components/dashboard/settings/SettingsTableFood.vue';
import TrainingTbl from '@/components/dashboard/settings/SettingsTableTraining.vue';

export default {
  components: {
    ActivitiesTbl,
    AccommadtionTbl,
    FoodTbl,
    TrainingTbl,
  },

};
</script>
<style scoped>
.settings-container{
  margin-top: 12px;
  width: 90%;
  padding-right: 10px;
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
.nav-tabs .nav-item .nav-link {
  background-color: #fff;
   color: #068D68;
}

.nav-tabs .nav-item .nav-link.active {
  color: #6c757d;
  border-bottom: 3px solid  #068D68;
}
a{
  text-decoration: none;
  color: #068d68;
}
</style>
