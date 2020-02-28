<template>
  <div id="app">
    <div class="main" @click="closeCalender">
      <TopBar :sh-calender="shcalender" />
      <Dock />
      <InterActive />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar/TopBar.vue'
import Dock from '@/components/Dock.vue'
import InterActive from '@/components/InterActive'

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
      shcalender: false
    }
  },
  methods: {
    closeCalender(){
      this.shcalender = !this.shcalender
    }
  }
}
</script>
