// pages/list/index.js
import { getJobs, deleteJob } from '../../utils/jobs';
const goToPositionPage = () => {
  // remain the current page and navigate to another page which is not in the tabBar
  wx.navigateTo({
    url: '../position/index' // relative path
  })
}

const goToUpdateJob = (e) => {
  wx.navigateTo({
    url: `../position/index?id=${e.target.dataset.id}`
  })
}

const goToDeleteJob = (e) => {
  wx.showModal({
    title: '确定删除内推职位',
    success: function(res) {
      if (res.confirm) {
        deleteJob(e.target.dataset.id); 
      }
    }
  })
}

Page({
  data:{
    jobs: [],
  },
  onShow: function (options) {
    getJobs().then((jobs) => {
      this.setData({jobs})
    });
  },
  goToPositionPage,
  goToUpdateJob,
  goToDeleteJob
})
