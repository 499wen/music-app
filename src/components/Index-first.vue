<template>
  <div>
        <!-- 幻灯片 -->
    <wv-swipe :height="130" :autoplay="4000">
      <wv-swipe-item > <img src="@/assets/music_01.jpg" alt=""> </wv-swipe-item>
      <wv-swipe-item > <img src="@/assets/music_02.jpg" alt=""> </wv-swipe-item>
      <wv-swipe-item > <img src="@/assets/music_03.jpg" alt=""> </wv-swipe-item>
      <wv-swipe-item > <img src="@/assets/music_04.jpg" alt=""> </wv-swipe-item>
      <wv-swipe-item > <img src="@/assets/music_05.jpg" alt=""> </wv-swipe-item>
    </wv-swipe>

    <!-- 分类 -->
    <div class="index-cat">

      <wv-flex :gutter="10">
        <wv-flex-item>
          <div class="placeholder"> 
            <i class="uk-icon-small uk-icon-heart"></i> <br>
            猜您喜欢
          </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> 
            <i class="uk-icon-small uk-icon-fire"></i> <br>
            最新最热
          </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> 
            <i class="uk-icon-small uk-icon-car"></i> <br>
            晚高峰
          </div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder"> 
            <i class="uk-icon-small uk-icon-music"></i> <br>
            听歌识曲
          </div>
        </wv-flex-item>

      </wv-flex>

    </div>
    <!-- 一个区域 -->
    <hr>
    <!-- 为你推荐 -->
    <div class="index-rmd">
      <!-- text -->
      <div class="index-rmd-text">
        
        <span>为你推荐 </span>
        <span>查看更多 <i class="uk-icon-large uk-icon-angle-right "></i> </span>
      </div>

      <!-- image -->
      <div class="index-rmd-image">
        <wv-flex :gutter="10">
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_01.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>每日推荐30首</span> 
             <span> </span> 
            </div>
          </wv-flex-item> 
          
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_02.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>运动！ 节奏感！</span> 
             <span>caplico</span> 
            </div>
          </wv-flex-item>
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_03.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>舒缓精心的纯音好碟 - 留声机第6期</span> 
             <span>虾米留声机</span> 
            </div>
          </wv-flex-item>
        </wv-flex>
      </div>

      <div class="index-rmd-image">
        <wv-flex :gutter="10">
          <wv-flex-item>
            <div class="placeholder">
              <img src="@/assets/music_rmd_04.jpg" alt="">
            </div>
            
            <div class="index-rmd-image-itd">
              <span>2016第58届格莱美获奖和提名名单</span> 
              <span>音乐跳电台</span> 
            </div> 
          </wv-flex-item> 
          
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_05.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>前奏党都会喜欢</span> 
             <span>icekeigo</span> 
            </div>
          </wv-flex-item>
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_06.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>情迷大提琴，涌动心弦的深沉</span> 
             <span>叁玖素材</span> 
            </div>
          </wv-flex-item>
        </wv-flex>
      </div>

    </div>

    <!-- 一个区域 -->
    <hr>
    <!-- 新歌首发 -->
    <div class="index-rmd">
      <!-- text -->
      <div class="index-rmd-text">
        
        <span>新歌首发 </span>
        <span>查看更多 <i class="uk-icon-large uk-icon-angle-right "></i> </span>
      </div>

      <!-- image -->
      <div class="index-rmd-image">
        <wv-flex :gutter="10">
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_01.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>每日推荐30首</span> 
             <span> </span> 
            </div>
          </wv-flex-item> 
          
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_02.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>运动！ 节奏感！</span> 
             <span>caplico</span> 
            </div>
          </wv-flex-item>
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_03.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>舒缓精心的纯音好碟 - 留声机第6期</span> 
             <span>虾米留声机</span> 
            </div>
          </wv-flex-item>
        </wv-flex>
      </div>

      <div class="index-rmd-image">
        <wv-flex :gutter="10">
          <wv-flex-item>
            <div class="placeholder">
              <img src="@/assets/music_rmd_04.jpg" alt="">
            </div>
            
            <div class="index-rmd-image-itd">
              <span>2016第58届格莱美获奖和提名名单</span> 
              <span>音乐跳电台</span> 
            </div> 
          </wv-flex-item> 
          
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_05.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>前奏党都会喜欢</span> 
             <span>icekeigo</span> 
            </div>
          </wv-flex-item>
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_06.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>情迷大提琴，涌动心弦的深沉</span> 
             <span>叁玖素材</span> 
            </div>
          </wv-flex-item>
        </wv-flex>
      </div>

    </div>

    <!-- 一个区域 -->
    <hr>
    <!-- 小编推荐精选 -->
    <div class="index-rmd">
      <!-- text -->
      <div class="index-rmd-text">
        
        <span>小编推荐精选 </span>
        <span>查看更多 <i class="uk-icon-large uk-icon-angle-right "></i> </span>
      </div>

      <!-- image -->
      <div class="index-rmd-image">
        <wv-flex :gutter="10">
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_01.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>每日推荐30首</span> 
             <span> </span> 
            </div>
          </wv-flex-item> 
          
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_02.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>运动！ 节奏感！</span> 
             <span>caplico</span> 
            </div>
          </wv-flex-item>
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_03.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>舒缓精心的纯音好碟 - 留声机第6期</span> 
             <span>虾米留声机</span> 
            </div>
          </wv-flex-item>
        </wv-flex>
      </div>

      <div class="index-rmd-image">
        <wv-flex :gutter="10">
          <wv-flex-item>
            <div class="placeholder">
              <img src="@/assets/music_rmd_04.jpg" alt="">
            </div>
            
            <div class="index-rmd-image-itd">
              <span>2016第58届格莱美获奖和提名名单</span> 
              <span>音乐跳电台</span> 
            </div> 
          </wv-flex-item> 
          
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_05.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>前奏党都会喜欢</span> 
             <span>icekeigo</span> 
            </div>
          </wv-flex-item>
          <wv-flex-item>
            <div class="placeholder">
              
              <img src="@/assets/music_rmd_06.jpg" alt="">

            </div>
            <div class="index-rmd-image-itd">
             <span>情迷大提琴，涌动心弦的深沉</span> 
             <span>叁玖素材</span> 
            </div>
          </wv-flex-item>
        </wv-flex>
      </div>

    </div>

    <div class="space"></div>
  </div>
</template>

<script>
import {Tabs, TabItem,Swipe, SwipeItem, Progress   } from 'we-vue'
export default {
  components: {
    Tabs, 
    TabItem,
    Swipe, 
    SwipeItem,
    Progress 
  },
  data () {
    return {

    }
  },
  methods: {
    progress(event) {
      // 更改歌曲进度条
      var w = document.body.clientWidth;
      this.pro = Math.floor((event.clientX / w) * 100);
    },
  },
  created() {
    // console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style deep>

@import '../../static/css/uikit.min.css';

.index-cat {
  box-sizing: border-box;
  width: 100%;
  height: 79px;
  padding-top: 15px;
}

.index-cat .placeholder > i {
  color: #a5a4a4;
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 155px;
  border: 1px solid #606060;
  box-sizing: border-box;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 10px;
}

.index-cat .placeholder {
  color: #606060;
}

hr {
    display: inline-block;
    border-top-color: #efefef;
    border-bottom-color: #efefef;
    box-sizing: content-box;
    height: 10px;
    width: 100%;
    background-color: #f8f8f8;
}

.index-rmd {
  width: 100%;
  padding: 15px 14px;
  box-sizing: border-box;
}

.index-rmd .index-rmd-text {
  width: 100%;
  height: 16px;
  line-height: 16px;

} 

.index-rmd .index-rmd-text > span {
  font-size: 19px;
  float: left;
  vertical-align: middle;
    margin-bottom: 5px;
}

.index-rmd .index-rmd-text > span:nth-child(2) {
  float: right;
  font-size: 13px;
  font-weight: 100;
}

.index-rmd .index-rmd-text > span:nth-child(2) > i {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 26px;
    background-color: #ddd;
    color: #f5f5f5;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    margin-left: 5px;
    vertical-align: bottom;
}

.index-rmd .index-rmd-image {
  clear: both;
}

.weui-flex__item {
  margin-bottom: 10px;
}

.index-rmd-image .placeholder img {
  height: 95px;
  width: 110px;
}

.index-rmd .index-rmd-image .index-rmd-image-itd {
  margin-top: 10px;
  height: 48px;
  width: 110px;
  position: relative;
}

.index-rmd-image .index-rmd-image-itd > span {
  width: 100%;
  display: inline;
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #323232;
  line-height: 1.3em;
}

.index-rmd-image .index-rmd-image-itd > span:last-child {
  color: #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
}


.space {
  margin-bottom: 49px;
}
</style>
