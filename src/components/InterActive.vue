<template>
<div>
  <div 
    class="interactive animated bounceIn" 
    v-for="(site, index) in list" 
    :v-if="list.length > 0 || site.name"
    :key="index"
    :style="[
      {'top':site.top + 'px'},
      {'left':site.left + 'px'},
      {'width':site.width + 'px'},
      {'height':site.height + 'px'},
      {'opacity': site.opacity},
      {'z-index': site.zIndex}
    ]"
    @click="setActive(index)"
    >
    <div 
      class="draggable" 
      :class="{'active':site.active?true:false}" 
      @dblclick.stop="funFull(index)"
      @mousedown="move($event, index)"
      >
      <div class="dragFun">
        <div class="dragClose" @click.stop="funClose(site.name),closeFun(site.name)">
          <span>
            <i class="fa fa-times"></i>
          </span>
        </div>
        <div class="dragMini">
          <span>
            <i class="fa fa-minus"></i>
          </span>
        </div>
        <div class="dragMax" @click.stop="funFull(index)">
          <span>
            <i class="fa fa-plus"></i>
          </span>
        </div>
      </div>
      <div class="other">{{site.name}}</div>
    </div>
    <div class="content">
      <Markedown v-if="activeName !== '' && activeName == 'markdown'" />
    </div>
  </div>
</div>
</template>
<script>
import Markedown from './Markedown';
export default {
  name: 'InterActive',
  props: ['newActive', 'closeFun'],
  components: {
    Markedown
  },
  data(){
    return {
      list: [],
      activeName: ''
    }
  },
  methods: {
    move(e, i){
      this.setActive(i)
      let _this = this
      let windowW = document.body.clientWidth //浏览器宽度
      let windowH = document.body.clientHeight //浏览器高度
      // let odiv = e.target        //获取目标元素
      let id = e.currentTarget.parentElement //获取父元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - id.offsetLeft
      let disY = e.clientY - id.offsetTop
      let disW = id.offsetWidth //窗口宽度
      let maxW = windowW - disW
      let maxH = windowH - 150
      document.onmousemove = (e)=>{       //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX  
        let top = (e.clientY - 1) - disY

        if (top <= 30) top = 30 //不容许超过topbar
        if (top >= maxH) top = maxH
        if (left <= 0) left = 0 //不容许超过左边界
        if(left >= maxW) left = maxW
        
        //移动当前元素
        _this.list[i].left = left
        _this.list[i].oldleft = left
        _this.list[i].top = top
        _this.list[i].oldtop = top
        _this.list[i].opacity = 0.85
        // id.style.left = left + 'px'
        // id.style.top = top + 'px'
        // id.style.opacity = 0.85
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        _this.list[i].opacity = 1
      }
    },
    setActive(i) {
      let list = this.list
      this.list = list.map((element,x) =>{
        if(x == i) {
          element.active = true
          element.zIndex = 999
        }else {
          element.active = false
          element.zIndex = 'inherit'
        }
        return element
      })
    },
    funClose(name){
      let list = this.list
      this.list = list.filter((s)=>{
        if(s.name === name){
          return false;
        }else{
          return s;
        }
      })
    },
    funFull(i) {
      const full = this.list[i].full
      const _this = this.list[i]
      if(full) {
        _this.width = _this.oldwidth
        _this.height = _this.oldheight
        _this.top = _this.oldtop
        _this.left = _this.oldleft
        _this.full = false
      }else{
        let windowW = document.body.clientWidth //浏览器宽度
        let windowH = document.body.clientHeight //浏览器高度
        this.list[i].width = windowW
        this.list[i].height = windowH - 90
        _this.full = true
        _this.top = 30
        _this.left = 0
      }
    },
    checkObject(obj) {
      if (Object.keys(obj).length === 0) {
        return false
      }
      return true
    }
  },
  watch: {
    newActive(val) {
      this.activeName = val.name
      if(this.checkObject(val)) this.list = this.list.concat(val)
    }
  }
}
</script>
<style scoped>
.interactive {
  position: absolute;
  background: #FFF;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
  border-radius: 5px;
  overflow: hidden;
}
.interactive > .content {
  position: absolute;
  top: 35px;
  left: 0;
  padding-top: 35px;
  width: 100%;
  bottom: 0;
  margin:0 auto;
  padding: 10px;
  background:#fff;
  box-sizing: border-box
}
.interactive > .draggable {
  width: 100%;
  height: 35px;
  cursor: move;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
}
.interactive > .draggable .dragFun {
  float: 1;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
}
.interactive > .draggable .other {
  flex: 1 1 auto;
}
.interactive > .draggable .dragClose,
.interactive > .draggable .dragMini,
.interactive > .draggable .dragMax {
  flex: 1;
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
}
.interactive > .draggable span {
  width: 16px;
  height: 16px;
  border-radius: 10px;
  display: block;
  line-height: 16px;
  cursor: pointer;
}
.interactive > .draggable .dragClose span,
.interactive > .draggable .dragMini span,
.interactive > .draggable .dragMax span {
  background:#ddd;
  color:#ddd
}
.interactive > .draggable .dragClose:hover span,
.interactive > .draggable.active .dragClose span {
  background:#fb4d49;
  color:#333
}
.interactive > .draggable .dragMini:hover span,
.interactive > .draggable.active .dragMini span {
  background:#f9b83b;
  color:#333
}
.interactive > .draggable .dragMax:hover span,
.interactive > .draggable.active .dragMax span {
  background:#4fcd35;
  color:#333
}
</style>