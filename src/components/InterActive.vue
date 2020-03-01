<template>
<div>
  <div 
    class="interactive" 
    :v-if="list.length > 0"
    v-for="(site, index) in list" 
    :key="index"
    :style="[{'top':index*40+40 + 'px'},{'left':index*40+40 + 'px'}]"
    @click="setActive(index)"
    >
    <div 
      class="draggable" 
      :class="{'active':site.active?true:false}" 
      @mousedown="move($event, index)"
      >
      <div class="dragFun">
        <div class="dragClose" @click.stop="funClose(index)">
          <span>
            <i class="fa fa-times"></i>
          </span>
        </div>
        <div class="dragMini">
          <span>
            <i class="fa fa-minus"></i>
          </span>
        </div>
        <div class="dragMax">
          <span>
            <i class="fa fa-plus"></i>
          </span>
        </div>
      </div>
      <div class="other"></div>
    </div>
    <div class="content">
      <Markedown />
    </div>
  </div>
</div>
</template>
<script>
import Markedown from './Markedown';
export default {
  name: 'InterActive',
  props: ['newActive'],
  components: {
    Markedown
  },
  data(){
    return {
      list: [{name:'拖动我',active:false},{name:'拖动我',active:false},{name:'拖动我',active:false}]
    }
  },
  methods: {
    move(e, i){
      this.setActive(i)
      // let odiv = e.target        //获取目标元素
      let id = e.currentTarget.parentElement
      //算出鼠标相对元素的位置
      let disX = e.clientX - id.offsetLeft
      let disY = e.clientY - id.offsetTop
      document.onmousemove = (e)=>{       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX  
          let top = (e.clientY - 1) - disY
          
          //移动当前元素
          id.style.left = left + 'px'
          id.style.top = top + 'px'
          id.style.opacity = 0.85
      }
      document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
          id.style.opacity = 1
      }
    },
    setActive(i) {
      let list = this.list
      this.list = list.map((element,x) =>{
          if(x == i) {
            element.active = true
          }else {
            element.active = false
          }
          return element
      })
    },
    funClose(i){
      let list = this.list
      this.list = list.filter((x,a)=> i !== a)
    }
  },
  watch: {
    newActive(val) {
      this.list = this.list.concat(val)
    }
  }
}
</script>
<style scoped>
.interactive {
  position: absolute;
  width: 650px;
  height: 305px;
  background: #FFF;
}
.interactive > .content {
  position: absolute;
  top: 35px;
  left: 0;
  padding-top: 35px;
  width: 100%;
  height: 100%;
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