<template>
  <div id="container">
    <div id="dock">
      <ul>
        <li v-for="(item,index) in list" :class="{'prev':item.active}" :key="index" @mouseover="change(index)" @mouseout="changed">
          <span>{{item.title}}</span>
          <img :src="item.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dock',
  props: ['msg'],
  data() {
    return {
      list:  [
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/1.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/2.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/3.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/4.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/5.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/6.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/7.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/8.png',
          fun: 'openFile',
          active: false
        },
        {
          title: '文件',
          icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/9.png',
          fun: 'openFile',
          active: false
        }
      ]
    }
  },
  methods:{
    change(i) {
      let list = this.list,
          newi = i - 1
      this.list = list.map((element,x) =>{
        if(i !==0 ) {
          if(x == newi) {
            element.active = true
          }
        }
        return element
      })
    },
    changed(){
      let list = this.list
      this.list = list.map(element =>{
        element.active = false
        return element
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container #dock{
	width: 100%;
	text-align: center;
  margin: 0 auto;
  font-size: 1rem
}
#container {
  position: fixed;
  bottom: 0;
  text-align: center;
  right: 20%;
  left: 10%;
  width: 79%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.375rem 0.375rem 0 0;
}
#container ul {
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}
#container li {
  list-style-type: none;
  display: inline-block;
  position: relative;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  cursor: pointer;
}

#container li img {
  width: 3.125rem;
  height: 3.125rem;
  transition: all 0.3s;
  transform-origin: 40% 70%;
}

#container li:hover img {
  transform: scale(2) translateY(-0.3125rem);
  margin: 0 2em;
}

#container li:hover+li img,
#container li.prev img {
  transform: scale(1.5);
  margin: 0 1.5em;
}

#container li span {
  display: none;
  position: absolute;
  bottom: 110px;
  left: 0;
  width: 100%;
  background-color: #222;
  padding: 0.25rem 0;
  border-radius: 0.4375rem;
}

#container li:hover span {
  display: block;
  color: #fff;
}
</style>
