// pages/position/index.js
import { createJob, getJob, updateJob } from '../../utils/jobs';
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
    fields: fields,
    id: null,
    job: {},
    submitText: ''
  },
  onLoad: function (options) {
    this.setData({id: options.id});
    if (this.data.id) { // Update job
      getJob(this.data.id).then((job) => {
        this.setData({job})
      });
      this.setData({submitText: 'Update Position'});
    } else { // create job
      this.setData({submitText: 'Create Position'})
    }
  },
  onReady: function () {
    if (this.data.id) {
      wx.setNavigationBarTitle({
        title: '修改职位信息',
      });
    } else {
      wx.setNavigationBarTitle({
        title: '创建内推表单',
      });
    }
  },
  onSubmit: function (e) {
    const value = e.detail.value;
    if (this.data.id) {
      const id = this.data.id
      updateJob(Object.assign({}, value, {id})).then(() => {
        wx.navigateBack({
          delta: 1,
        })
      })
    } else {
      createJob(value).then(() => {
        wx.navigateBack({
          delta: 1,
        })
      });
    }
  }
})