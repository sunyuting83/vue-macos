<template>
  <div class="topbar">
    <div class="bar-item">
      <div><i class="fa fa-apple apple"></i></div>
      <div>软件</div>
    </div>
    <div class="bar-item">
      <div><i class="fa fa-wifi"></i></div>
      <DataTime :sh-calender="shCalender" />
      <div><i class="fa fa-file-text-o"></i></div>
      <div><i class="fa fa-search"></i></div>
      <div><i class="fa fa-list"></i></div>
    </div>
  </div>
</template>

<script>
import DataTime from './DateTime'
export default {
  name: 'TopBar',
  props: ['shCalender'],
  components: {
    DataTime
  },
  watch: {
    shCalender() {
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar {
  height: 35px;
  background:rgba(274,274,274,.85);
  display: flex;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  color:#000;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  font-size:0.8125rem;
  font-weight: bold;
  padding:0 0.625rem;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.3)
}
.apple {
  font-size: 1.3rem
}
.bar-item {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
}
.bar-item > div {
  cursor: pointer;
  margin-left: 1rem
}
</style>
