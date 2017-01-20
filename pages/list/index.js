// pages/list/index.js
let app = getApp();

const goToPositionPage = () => {
  // remain the current page and navigate to another page which is not in the tabBar
  wx.navigateTo({
    url: '../position/index' // relative path
  })
}

const goToUpdatePosition = (e) => {
  wx.navigateTo({
    url: `../position/index?id=${e.target.dataset.id}`
  })
}

const goToDeletePosition = (e) => {
  wx.showModal({
    title: '确定删除内推职位',
    success: function(res) {
      if (res.confirm) {
        app.positionsRef.child(e.target.dataset.id).remove()
      }
    }
  })
}

Page({
  data:{
    positions: []
  },
  onLoad: function () {
    app.positionsRef.bindAsArray(this, 'positions');
    const role = wx.getStorageSync('role');
    this.setData({role});
  },
  goToPositionPage,
  goToUpdatePosition,
  goToDeletePosition
})
