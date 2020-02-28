<template>
  <div class="cuur d">
    <div @click.stop="Calender">
      <span>{{datenow}}</span>
      <span>{{timenow}}</span>
    </div>
    <div class="c" v-if="shcalender" @click.stop="neverShow">
      <ul class="date">
        <div class="long choose">
          <div class="choosemon" @click.stop="changeDate('preMonth')"><i class="fa fa-caret-left"></i></div>
          <div>{{ `${year}年${month}月` }}</div>
          <div class="choosemon" @click.stop="changeDate('nextMonth')"><i class="fa fa-caret-right"></i></div>
        </div>
        <li v-for="(item,index) in week" class="days" :key="index">{{item}}</li>
        <li v-for="(inx,i) in weekDay" class="days" :key="i">
          {{ preMonthSize() - weekDay + inx }}
        </li>
        <li v-for="(index,i) in monthList[month - 1]" :key="i" class="days" :class="{ 'bg-color': index === day }">
          <div class="text-color">{{ index }}</div>
        </li>
        <li v-for="(index,i) in lastWeekDay" class="days" :key="i">{{ index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const date = new Date()
export default {
  name: 'DateTime',
  props: ['shCalender'],
  data () {
    return {
      timenow: '',
      datenow: '',
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      monthList: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      weekDay: 1,
      lastWeekDay: 1,
      shcalender: this.shCalender,
      week: [
        '日',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
      ]
    }
  },
  created(){
    this.refreshTime()
  },
  methods: {
    preMonthSize() {
      return this.month - 1 === 0 ? 31 : this.monthList[this.month - 2]
    },
    checkTime(i){
      if(i<10){
          i='0'+String(i)
      }
      return i
    },
    refreshTime(){
      const date=new Date()
      const Hours=date.getHours()
      const Minutes=date.getMinutes()
      const pushM=this.checkTime(Minutes)
      this.timenow=`${Hours}:${pushM}`
      this.datenow=`${this.year}年${this.month}月${this.day}日 `
      setTimeout(this.refreshTime,1000)
    },
    Calender() {
      this.shcalender = !this.shcalender
      this.initDate()
    },
    neverShow() {
      this.shcalender = true
    },
    // 根据年月日获得为星期几
    getWeekDay(year, month, day) {
      return new Date(`${year}/${month}/${day}`).getDay()
    },
    initDate() {
      if (
        (this.year % 4 === 0 && this.year % 100 !== 0) ||
        this.year % 400 === 0
      ) {
        this.monthList[1] = 29
      } else {
        this.monthList[1] = 28
      }
      // 获得指定年月的1号是星期几
      const firstDay = this.getWeekDay(this.year, this.month, 1)
      // 在1号前面填充多少个上个月的日期
      this.weekDay = firstDay === 7 ? 0 : firstDay
      // 获得最后一天是星期几，往后填充多少个
      const remineDay = this.getWeekDay(
        this.year,
        this.month,
        this.monthList[this.month - 1]
      )
      this.lastWeekDay = remineDay === 7 ? 6 : 6 - remineDay
    },
    changeDate(type) {
      switch (type) {
        case 'preYear':
          this.year -= 1
          break
        case 'preMonth':
          // 当前月份为1月， 上一个月分为12月，年份减1
          if (this.month === 1) {
            this.month = 12
            this.year -= 1
          } else {
            this.month -= 1
          }
          break
        case 'nextYear':
          this.year += 1
          break
        case 'nextMonth':
          // 当前月份为12月， 下个月分为1月，年份加1
          if (this.month === 12) {
            this.month = 1
            this.year += 1
          } else {
            this.month += 1
          }
          break
        default:
          break
      }
      this.initDate()
    }
  },
  watch: {
    shCalender() {
      this.shcalender = false
    }
  }
}
</script>
<style scoped>
div.d {
  position: relative;
}
div.c {
  position: absolute;
  top: 28px;
  right: 0;
  width: 270%;
  height: auto;
  z-index: 99;
}
div.c > .date{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 10px 6px;
  background:rgba(255,255,255,.9);
  margin:0 auto;
  border-radius: 5px;
  border:1px solid #E9E9E9;
}
.days{
  flex-grow: 1;
  min-width: 44px;
  height: 46px;
  border-bottom: 1rpx solid #E9E9E9;
  border-right: 1rpx solid #E9E9E9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #999;
  font-size: 12px;
  list-style: none;
}
.week {
  color: #666
}
.text-color{
  color: #222;
}
.bg-color > div{
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: #0e6de1;
  border-radius: 50%;
}
.bg-color > div.text-color {
  color:#fff
}
.long {
  flex: 0 0 100%;
  height: 31px;
  line-height: 31px;
}
.choose {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  box-sizing: border-box;
}
.choosemon {
  width: 35px;
  height: 35px;
}
</style>
