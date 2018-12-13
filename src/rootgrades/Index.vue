<template>
  <div>

    <!-- 头部 -->
    <div class="index-title">

      <wv-flex :gutter="10">
        <wv-flex-item>
          <div class="placeholder"> <i class="uk-icon-large uk-icon-bars"></i> </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> 我的 </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> 推荐 </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> 发现 </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> <i class="uk-icon-large uk-icon-search"></i> </div>
        </wv-flex-item>
      </wv-flex>

    </div>
    <!-- 首页 - 导航 -->
    <div class="nav">
      <wv-flex :gutter="10">
        <wv-flex-item v-for="(k,v) of index_nav" :key="v" >
          <div :class="['placeholder',{'border':$route.name == k.name}]" @click="nav_name(v)">{{ k.nav_name }}</div>
        </wv-flex-item>
      </wv-flex>
    </div> 
    <router-view/>

    <!-- <Indexdiv></Indexdiv> -->

    <!-- 底部 -->
    <div class="index-bottom">
      <!-- 歌曲 -->
      <audio ref="player" :src="current.url" @loadedmetadata="load"></audio>

        <div @click="progress($event)">
          <wv-progress :percent="pro" :show-clear="false" />
        </div>
        
        <wv-flex :gutter="10">
          <wv-flex-item flex="2"> 
          <router-link to="/musicMsg"> 
            <div class="placeholder">
              <img src="@/assets/music_rmd_07.jpg" alt="">
              <div class="music-msg">
                <span>{{ current.music }}</span>
                <span>{{ current.author }}</span>
              </div>
            </div>
          </router-link>
          </wv-flex-item>
          <wv-flex-item offset="25%">
            <div class="placeholder">
              <i :class="status ? 'uk-icon-play': 'uk-icon-pause'" @click="changeStatus"></i>
              <!-- <i class="uk-icon-play"></i> -> 暂停 -->
              <i class="uk-icon-step-forward" title="下一首" @click="nextOne" ></i>
            </div>
          </wv-flex-item>
        </wv-flex>
      
    </div>
    
  </div>
</template>

<script>
import {Tabs, TabItem, Swipe, SwipeItem, Progress } from 'we-vue';
import Indexdiv from '../components/Index-rs';

export default {
  components: {
    Tabs, 
    TabItem,
    Swipe, 
    SwipeItem,
    Progress,
    Indexdiv
  },
  data() {
    return {
      current: {
        music: '陪我长大',
        author: '段奥娟',
        url: '../../static/mp3/AMGU.mp3',
        rk: 0 // 音频关键数
      },
      music:[
        {
          name: '陪我长大',
          url: '../../static/mp3/AMGU.mp3',
          author: '段奥娟'
        },
        {
          name: '我为你歌唱',
          url: '../../static/mp3/ISingForYou.mp3',
          author: '瞿'
        },
        {
          name: '文爱',
          url: '../../static/mp3/WenAi.mp3',
          author: '网络歌手'
        }
      ],
      pro: 0, // 进度条
      status: true, // 音频播放状态
      h: null,
      index_nav: [
        {
          nav_name: '首页',
          name: 'first'
        },
        {
          nav_name: '精选版',
          name: 'selected'
        },
        {
          nav_name: '排行版',
          name: 'ranking'
        },
        {
          nav_name: '电台',
          name: 'rs'
        },
        {
          nav_name: 'MV',
          name: 'mv'
        },
      ]
    }
  },
  methods: {
    progress(event) {
      // 更改歌曲进度条
      var w = document.body.clientWidth;
      this.pro = Math.floor((event.clientX / w) * 100);
      // 40 -> 40%  用音频总长 * 40% 
      this.$refs.player.currentTime = this.$refs.player.duration * ( this.pro / 100);
    },
    changeStatus() {
      // 更改 歌曲播放状态
      this.status = !this.status;
      
      if(!this.status) {
        // 播放
        this.$refs.player.play();
        // 定时器 S = mp3总长 / 100
        this.s = (this.$refs.player.duration / 100) * 1000;
        console.log(this.s)
        this.proInterval(this.s)
      }else {
        // 暂停
        this.$refs.player.pause();
        clearInterval(this.interVal) // 关闭定时器
      }
      
    },
    nextOne() {
      // 下一首  Math.floor(Math.random()*2)
      this.random(); // 随机音频
      let nextData = this.current.rk; // 下一首音频的数据

      this.pro = 0; // 进度条归零
      this.$refs.player.src = this.music[nextData].url; // 更换 音频url
      this.current.music = this.music[nextData].name; // 更换 音频名称
      this.current.author = this.music[nextData].author; // 更换 音频作者
      
      setTimeout(() =>{
        this.$refs.player.play(); // 立即播放
        this.status = false;
      },500)
      
      this.proInterval(this.s)
    },
    nav_name(v) {
      // 获取路由
      location.href = '/#/' + this.index_nav[v].name;
    },
    // 随机音频
    random() {
      var n = Math.floor(Math.random()*this.music.length)*1;
      if(n != this.current.rk) {
        // 将新得出的 音频关键数放入 当前播放的音频关键数
        this.current.rk = n;
        return true;
      }
      
      this.random();
    },
    // 进度条 定时器
    proInterval(s) {
      this.interVal = setInterval(() => {
        this.pro++
        // this.pro = 100 
        if(this.pro == 100){
          this.status = !this.status; // 改变按钮的状态
          clearInterval(this.interVal) // 关闭定时器

          // 下一首
          this.status = true;
          this.nextOne();
          // this.status = !this.status; // 改变按钮的状态
        }
      }, s)
    },
    // 加载歌曲
    load() {
      console.log(`${this.current.music}:`+this.$refs.player.duration)
    }
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style deep>

@import '../../static/css/uikit.min.css';

.index-title {
  padding-top: 30px; 
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  background-size: 100% 100%;
  background-image: url('../assets/bgi.png');
}

.index-title .placeholder {
  font-weight: 100;
  color: #fff;
  line-height: 28px;
}

.index-title .placeholder > i {
  font-size: 150%;
}

.nav {
  height: 45px;
  line-height: 42px;
}

.nav .border {
  width: 100%;
  color: #f83;
  border-bottom: 3px solid #f83;
  box-sizing: border-box;
}

.index-bottom {
  position: fixed;
  width: 100%;
  height: 49px;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -1px 0 0 #b7aeae;
  padding: 5px 14px;
  box-sizing: border-box;
}

.index-bottom .placeholder {
  text-align: left;
  display: flex;
  align-items: center;
}

.index-bottom .placeholder > img {
  width: 39px;
  height: 39px;
  vertical-align: middle;
  margin-right: 10px;
}

.index-bottom .placeholder .music-msg {
  display: inline-block;
  height: 29px;
}

.index-bottom .placeholder .music-msg > span {
  display: block;
  font-size: 10px;
  line-height: 1.4;
  color: #4b4b4b;
}

.index-bottom .placeholder .music-msg > span:last-child {
  color: #a0a0a0;
}

.index-bottom .weui-flex > div:nth-child(2) {
  display: flex;
  justify-content: flex-end;
}

.index-bottom .weui-flex > div:nth-child(2) i {
  color: #f83;
  font-size: 20px;
}

.index-bottom .weui-flex > div:nth-child(2) i:first-child {
  letter-spacing: 20px;
}

/* 进度条 */
.weui-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.weui-progress__bar {
  height: 1px;
}

.weui-progress__inner-bar {
  background-image: url('../assets/bgi.png');
  background-size: 100% 100%;
  position: absolute;
}

.weui-progress__inner-bar:after {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 15px;
  background-color: #f83;
  position: absolute;
  right: 0;
  top: -3px;
}
</style>
