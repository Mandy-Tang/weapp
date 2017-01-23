// pages/candidates/index.js
const app = getApp();
Page({
  data:{
    candidates: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const role = wx.getStorageSync('role');
    this.setData({role});
    if (role === 'HR') {
      app.candidatesRef.bindAsArray(this, 'candidates');
    } else {
      app.candidatesRef.bindAsArray(this, 'candidates');
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
