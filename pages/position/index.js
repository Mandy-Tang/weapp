// pages/position/index.js
import {createJob, getJobs} from '../../utils/jobs';
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
    createJob(value);
  }
})