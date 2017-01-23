// pages/apply/index.js
const app = getApp();
Page({
  data:{},
  onLoad:function(query){
    // 页面初始化 options为页面跳转所带来的参数
    const id = query.id;
    console.log(id)
    app.positionsRef.child(`${id}`).bindAsObject(this, 'position');
  },
  onApplySubmit: function (e) {
    const values = e.detail.value;
    const position = {
      id: this.data.position['.key'],
      name: this.data.position['.value'].name
    };
    const candidate = Object.assign({}, values, {position});
    app.candidatesRef.push(candidate).then(() => {
      wx.showToast({
        title: '申请成功',
        icon: 'success',
      })
      setTimeout(() => {
        wx.hideToast();
        wx.navigateBack();
      }, 2000)
    }).catch((err) => {
      wx.showToast({
        title: '申请失败',
        duration: 2000
      });
      console.info('push node failed', err.code, err);
    });
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
