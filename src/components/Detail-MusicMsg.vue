<template>
    <div>
        
        <div class="cover-msg">
            <!-- 封面图 -->
            <img src="@/assets/detail_musicmsg_01.jpg" alt="">

            <!-- 歌曲名 -->
            <div class="m-name">{{ music.name }}</div>
            <!-- 歌曲演唱者 -->
            <div class="m-author">{{ music.author }}</div>
            <!-- 歌曲时长 -->
            <div @touchend="lang" class="pro">
            <wv-slider  v-model="percent" :show-value="true" ></wv-slider>
            </div>
            <div class="time-len">
                <span>0{{ music.startT.m }}. <span v-if="music.startT.is_show">0</span>{{ music.startT.s }}</span>
                <span>{{ music.endT.m }}.{{ music.endT.s }}</span>
                <!-- 清除浮动 -->
                <div style="clear:both;"></div>
            </div>
            <!-- 歌曲 -->
            <audio :src="music.url" ref='player' @loadedmetadata="load(0)"></audio>
            <!-- 歌曲状态 -->
            <div class="status">
                <wv-flex :gutter="10">
                    <wv-flex-item>
                        <div class="placeholder"></div>
                    </wv-flex-item>
                    <wv-flex-item flex="2">
                        <div class="placeholder middle">
                            <i :class="['uk-icon-step-backward',{'nothting': !music.prev } ]"  @click="prev"></i>
                            <i :class="music.status ? 'uk-icon-play' : 'uk-icon-pause'" @click="status"></i>
                            <i class="uk-icon-step-forward" @click="next"></i>
                        </div>
                    </wv-flex-item>
                    <wv-flex-item>
                        <div class="placeholder"></div>
                    </wv-flex-item>
                </wv-flex>
            </div>
        </div>
    </div>
</template>

<script>
import { Slider } from 'we-vue'

export default {
    compoments: {
        Slider
    },
    data() {
        return {
            music:{
                name: '陪我长大',
                url: '../../static/mp3/AMGU.mp3',
                author: '段奥娟',
                status: true, // true: 暂停 false:播放
                startT:{ m: 0,s: 0,is_show: true }, // 已播放时间 is_show: s个位数 -> true 两位数 -> false
                endT:{ m: '00',s: '00' }, // 总播放时间
                rk: 0 , // 歌曲关键数 (m_list 下标)
                prev: 1, // 上一首歌 关键数 (m_list 下标)
            },
            percent: 0, // 歌曲进度
            m_list:[
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
            ]
        }
    },
    methods: {
        lang(ev) {
            // -----获取 进度条与body之间的宽度差值(左) last_drc
            var body_w = document.body.clientWidth;
            var drc = (body_w - document.querySelector('.pro').offsetWidth) / 2;
            var pro_w = document.querySelector('.weui-slider'); // 进度盒子
            var last_drc = drc + parseInt(window.getComputedStyle(pro_w).paddingLeft) ;
            // ------
            /*
             * 点击进度条 
             *     获取 clientWidth 
             *     获取 点击的位置占 多少 %
             */
            var body_x = event.changedTouches[0].pageX; // 触摸目标在视口中的x坐标
            var current_w = document.querySelector('.weui-slider__inner').offsetWidth; // 进度条宽度
            // 处理body_x
            if(body_x < 33)
                body_x = 33
             else if(body_x > (33 + current_w))
                body_x = 33 + current_w;
            
            var per = (body_x - last_drc) / current_w; // 得出小数 0.12315...
            
            this.percent = Math.floor(per * 100);
            // 40 -> 40%  用音频总长 * 40% 
            var time = this.$refs.player.duration * this.percent / 100;
            this.$refs.player.currentTime = time;
            // 处理当前的时间 this.$refs.player.currentTime
            this.music.startT.m = Math.floor( this.$refs.player.currentTime / 60);
            this.music.startT.s = Math.floor(time % 60);
            this.audio_unit(); // 判断秒数的位数
        },
        status() {
            this.music.status = !this.music.status; // 改变歌曲播放状态(暂停\播放)
            if(!this.music.status) 
            {   // 播放
                this.$refs.player.play();

                /*
                 * 进度条速度 -> (0.5/次)
                 * 定时器间隔时间 -> [duration / (100 / 0.5)]
                 */
                // 播放时间 定时器
                this.start = setInterval(() => {
                    this.music.startT.s = this.music.startT.s + 1;

                    this.audio_unit(); // 判断秒数的位数
                    
                    if(this.music.startT.s == 60){
                        this.music.startT.m ++;
                        this.music.startT.s = 0;
                    }
                },1000)

                // 进度条定时器
                this.interVal = setInterval(() => {
                    this.percent += 0.5;
                    if(this.percent == 100) 
                    {
                        clearInterval(this.interVal);
                        clearInterval(this.start);
                        this.music.status = true; // 播放状态改变
                        this.percent = 0; // 进度条清零
                        // 播放时间清零
                        this.music.startT.m = 0;
                        this.music.startT.s = 0;
                        this.music.startT.is_show = true; // 改回true
                    }
                },this.s)

            }
            else 
            {   // 暂停
                this.$refs.player.pause();
                clearInterval(this.interVal);
                clearInterval(this.start);
            }
        },
        // 上一首
        prev() {
            // 是否有上一首
            if(this.music.prev) 
            {   
                this.repCode_up(); // 调用重复代码 上

                var sst = this.music.prev;
                // 判断上一首是否跟当前歌曲一样
                if(this.music.url == this.m_list[sst].url){
                    this.$refs.player.currentTime = 0;
                }
                
                this.music.rk = sst; // 更新当前歌曲关键数
                
                this.repCode_down(sst); // 调用重复代码 下
            }   
        },
        // 下一首
        next() {
            this.repCode_up(); // 调用重复代码 上

            this.random(); // 随机音频

            var sst = this.music.rk; 
            this.repCode_down(sst); // 调用重复代码 下
        },
        // 随机音频
        random() {
            var n = Math.floor(Math.random()*this.m_list.length)*1;

            if(n != this.music.rk) {
                // 将新得出的 音频关键数放入 当前播放的音频关键数
                this.music.rk = n;
                return true;
            }
            
            this.random();
        },
        load() {
            var m_len = this.$refs.player.duration // 歌曲时长
            
            var n = this.music.rk
            // 将歌曲信息赋值给 music 属性
            this.music.name = this.m_list[n].name
            this.music.author = this.m_list[n].author
            this.music.endT.m = '0' + Math.floor(m_len / 60) 
            this.music.endT.s = ("" + Math.floor(m_len % 60)).length == 2 ? Math.floor(m_len % 60): '0' + Math.floor(m_len % 60);
            this.s = Math.floor((this.$refs.player.duration / 200 ) * 1000); // 定时器 触发频率
        },
        // 处理 音频单位数
        audio_unit() {
            // 判断秒数的位数 1位数 -> is_show:true   2位数 -> is_show:false
            if( ("" + this.music.startT.s).length == 1 )
                this.music.startT.is_show = true
            else 
                this.music.startT.is_show = false
        },
        // 处理切换歌曲是的 重复代码 repCode_up(上部分) repCode_down(下部分)
        repCode_up() {
            // 清除当前进度条 播放时间清空 
            this.percent = 0;
            this.music.startT.m = 0;
            this.music.startT.s = 0;
            this.music.startT.is_show = true;
            this.music.status = true; // 播放状态改为true (暂停模式)
            clearInterval(this.interVal);
            clearInterval(this.start);
        },
        repCode_down(sst) {
            /*
             * 将m_list 下标为 sst 的数据取出 放入music
             *      更换url
             *      更换所有歌曲信息
             *      调用status 方法
             */
            this.music.name = this.m_list[sst].name;
            this.music.url = this.m_list[sst].url;
            this.music.author = this.m_list[sst].author;
            
            // 播放
            this.aa = setTimeout(() => {
                this.status()
            },500)
        }
    },
    created() {

    }

}
</script>

<style>
    .cover-msg {
        padding: 15px;
        box-sizing: border-box;
        width: 100%;
    }

    .cover-msg > img {
        width: 100%;
        /* height: 290px; */
        margin-bottom: 25px;
    }

    .cover-msg .m-name {
        color: #333;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .cover-msg .m-author {
        color: #a0a0a0;
        font-size: 14px;
        margin-bottom: 25px;
        font-weight: 100;
    }

    .weui-slider__track {
        background-image: url('../assets/bgi.png');
        background-size: 100% 100%;
    }
    .weui-slider__handler {
        background-color: #f83;
        height: 10px;
        margin-left: -5px;
        margin-top: -5px;
        width: 10px;
    }

    .cover-msg .time-len {
        padding: 0px 18px;
        margin-bottom: 50px;
    }

    .cover-msg .time-len > span {
        font-size: 11px;
        color: #a0a0a0;
        float: left;
    }

    .cover-msg .time-len > span:nth-child(2) {
        float: right;
    }

    .weui-slider-box__value {
        display: none;
    }

    .status .middle {
        height: 60px;
    }

    .status .middle > i {
        font-size: 25px;
        color: #f83;
        display: inline-block;
        width: 21px;
        height: 100%;
        line-height: 60px;
    }

    .status .middle > i:first-child {
        float: left;
    }

    .status .middle > i:last-child {
        float: right;
    }

    .status .middle > i:nth-child(2) {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        box-sizing: border-box;
        border: 2px solid #f83;
        text-align: center;
    }

    .nothting {
        color: rgba(255, 136, 51, .5) !important;
    }
</style>
