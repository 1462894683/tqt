<template>
	<view class="page">
	<!-- 头部 -->
	  <view class="top">
	    <image  src="@/static/shou/shou.png"></image>
	    <image  src="@/static/images/01首页banner-蒙版.png"></image>
	    <image src="@/static/shou/ka_bac.png"></image>
	    <image src="@/static/shou/svip.png"></image>
	    <image src="@/static/shou/jian.png"></image>
	    <view>暂未开通</view>
	    <text>立即开通会员权益</text>
	  </view>
	  </view>
</template>

<script setup>

</script>

<style scoped lang="less">
.page{
  width: 100%;
  height: auto;
  background: #D1D3EC;
  box-shadow: inset 0px 6rpx 12rpx 1px rgba(255,255,255,0.4);
  border-radius: 40rpx 40rpx 0px 0px;
  opacity: 1;
}
image{
  vertical-align: middle;
}
.top{
  width: 100%;
  height: 550rpx;
  position: relative;
}
.top>image:nth-child(1){
  width: 100%;
  height: 550rpx;
  position: absolute;
}
.top>image:nth-child(2){
  width: 100%;
  height: 138rpx;
  position: absolute;
  bottom: 0;
}
.top>image:nth-child(3){
  position: absolute;
  width: 92%;
  height: 90rpx;
  bottom: 0;
  margin-left: 30rpx;
}
.top>image:nth-child(4){
  position: absolute;
  width: 90rpx;
  height: 30rpx;
  bottom: 29rpx;
 left: 186rpx;
}
.top>image:nth-child(5){
  position: absolute;
  width: 3rpx;
  height: 12rpx;
  bottom: 40rpx;

 right:51rpx;
}
.top>view{
  position: absolute;
  bottom: 24rpx;
  left: 54rpx;
  font-size: 30rpx;
  font-weight: 800;
  color: #B5B5B5;
}

.top>text{
  position: absolute;
  bottom: 33rpx;
  font-size: 24rpx;
  right: 69rpx;
  color: #FFD397;
  font-weight: 800;
}
</style>
