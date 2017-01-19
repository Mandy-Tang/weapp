// pages/position/index.js
let app = getApp();

Page({
  data:{
    id: null,
    position: {},
    submitText: ''
  },
  onLoad: function (query) {
    const id = query.id;
    this.setData({id: id});
    if (typeof id != 'undefined') { // Update the selected position
      this.setData({submitText: '修改'});
      app.positionsRef.child(`${id}`).bindAsObject(this, 'position');
    } else { // create a new position
      this.setData({submitText: '新建'})
    }
  },
  onReady: function () {
    if (typeof this.data.id != 'undefined') {
      wx.setNavigationBarTitle({
        title: '修改职位信息',
      });
    } else {
      wx.setNavigationBarTitle({
        title: '新建内推职位',
      });
    }
  },
  onSubmit: function (e) {
    const value = e.detail.value;
    const id = this.data.id;
    if (typeof id != 'undefined') {
      app.positionsRef.update({
        [id]: value 
      }).then(() => {
          wx.navigateBack();
      });
    } else {
      app.positionsRef.push(value).then(() => {
        wx.navigateBack();
      })
    }
  }
})