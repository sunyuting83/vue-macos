<template>
  <div id="container">
    <div id="dock">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <span>{{item.title}}</span>
          <img :src="item.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const menu = [
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/1.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/2.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/3.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/4.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/5.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/6.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/7.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/8.png',
    fun: 'openFile'
  },
  {
    title: '文件',
    icon: 'https://www.17sucai.com/preview/847335/2018-01-30/dock/images/9.png',
    fun: 'openFile'
  }
]
export default {
  name: 'Dock',
  props: ['msg'],
  data() {
    return {
      list: menu
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
  border-radius: 6px 6px 0 0;
}
#container ul {
  padding: 0;
  margin-top: 0;
  margin-bottom: 0.625rem;
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
  width: 50px;
  height: 50px;
  transition: all 0.3s;
  transform-origin: 40% 70%;
}

#container li:hover img {
  transform: scale(2);
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
  bottom: 100px;
  left: 0;
  width: 100%;
  background-color: #222;
  padding: 4px 0;
  border-radius: 7px;
}

#container li:hover span {
  display: block;
  color: #fff;
}
</style>
