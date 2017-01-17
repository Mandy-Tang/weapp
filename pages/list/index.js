// pages/list/index.js
import { getJobs } from '../../utils/jobs';
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
  deleteJob(e.target.dataset.id);
}

Page({
  data:{
    jobs: [],
  },
  onLoad: function(options) {
    getJobs().then((jobs) => {
      this.setData({jobs})
    });
  },
  goToPositionPage,
  goToUpdateJob,
  goToDeleteJob
})
