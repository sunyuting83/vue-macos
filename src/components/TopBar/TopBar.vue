<template>
  <div class="topbar">
    <div class="bar-item">
      <div><i class="fa fa-apple apple"></i></div>
      <div>{{setMenu.name}}</div>
      <div v-for="(item,i) in setMenu.toolbar" :key="i" class="menu">
        {{item.title}}
        <div v-if="item.child.length > 0" class="menus">
          <div v-for="(it,i) in item.child" :key="i" @click.stop="menuFun(it.fun, it.param)">{{it.title}}</div>
        </div>
      </div>
    </div>
    <div class="bar-item">
      <div><i class="fa fa-wifi"></i></div>
      <div><i class="fa fa-bluetooth"></i></div>
      <div><i class="fa fa-battery-4"></i></div>
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
  props: ['shCalender', 'setMenu', 'menuFun'],
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
  height: 30px;
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
  font-size: 1.1rem
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
.menu {
  position: relative;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
.menu:hover {
  background:#0e6de1;
  color:#fff
}
.menu:hover .menus {
  display: block;
}
.menus {
  position: absolute;
  top: 30px;
  left: 0;
  width: 150px;
  text-align: left;
  background: rgba(255,255,255,.85);
  border-radius: 0 0 0.275rem 0.275rem;
  display: none;
  color:#000
}
.menus > div {
  padding: 5px;
  padding-left: 10px;
}
.menus > div:hover {
  background:#0e6de1;
  color:#fff
}
</style>
