<template>
    <div>
        <!-- 头部 -->
        <div class="detail-title">

        <wv-flex :gutter="10">
            <wv-flex-item>
            <div class="placeholder war-l"> <i class="uk-icon-medium uk-icon-angle-down"></i> </div>
            </wv-flex-item>
            <wv-flex-item>
            <div class="placeholder circle"> 
                <i class=" uk-icon-circle"></i> 
                <i class=" uk-icon-circle check-active"></i> 
                <i class=" uk-icon-circle"></i> 
            </div>
            </wv-flex-item>
            <wv-flex-item>
            <div class="placeholder war-r"> 电台 </div>
            </wv-flex-item>
        </wv-flex>

        </div>

        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>


<style>
@import '../../static/css/uikit.min.css';

.detail-title {
  padding-top: 30px; 
  padding-bottom: 10px; 
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  background-size: 100% 100%;
  background-image: url('../assets/bgi.png');
}

.detail-title .placeholder {
    color: #fff;
    padding: 0 15px;
}

.detail-title .war-l {
    text-align: left;
}

.detail-title .war-r {
    text-align: right;
}

.circle > i {
  color: #fee2ce;
}

.circle > i:nth-child(2) {
  margin: 0 10%;
}

.check-active {
    color: #fff !important;
}
</style>
