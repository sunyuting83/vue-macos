<template>
  <div id="app">
    <div class="main" @click="closeCalender">
      <TopBar :sh-calender="shcalender" />
      <Dock :open-fun="openFun" />
      <InterActive />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar/TopBar.vue'
import Dock from '@/components/Dock.vue'
import InterActive from '@/components/InterActive'
import Config from '@/assets/config.json'

export default {
  name: 'App',
  components: {
    TopBar,
    Dock,
    InterActive
  },
  created(){
  },
  data(){
    return {
      shcalender: false,
      topbar: {},
      interactive: {}
    }
  },
  methods: {
    closeCalender(){
      this.shcalender = !this.shcalender
    },
    openFun(name = ""){
      switch(name) {
        case 'markdown':
          this.topbar = Config.topbar.markdown
          this.interactive = Config.interActive.markdown
          break;
        default:
          break;
      }
    }
  }
}
</script>
