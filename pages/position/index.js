// pages/position/index.js
const fields = [
  {
    name: 'jobName',
    tag: 'input',
    placeholder: 'Position Name'
  },
  {
    name: 'address',
    tag: 'input',
    placeholder: 'Your Address'
  },
  {
    name: 'expectedAddress',
    tag: 'input',
    placeholder: 'Prefferd Address'
  },
  {
    name: 'description',
    tag: 'textarea',
    placeholder: 'Job Description'
  }
]
Page({
  data:{
    fields: fields
  },
  onSubmit: (e) => {
    const value = e.detail.value;
    console.log(value);
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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