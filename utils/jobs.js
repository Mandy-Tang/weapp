const writeJobs = (jobs) => (
  new Promise((resolve, reject) => {
    wx.setStorage({
      key: 'jobs',
      data: jobs,
      success: resolve,
      fail: reject
    })
  })
)

const readJobs = () => (
  new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'jobs',
      success: (Storage) => resolve(Storage.data || {}),
      fail: () => resolve({}),
    })
  })
)

export const createJob = (job) => (
  readJobs().then((jobs) => {
    const id = new Date().getTime();
    const newJob = Object.assign({}, job, {id});
    const newJobs = Object.assign({}, jobs, {[id]: newJob});
    return writeJobs(newJobs);
  })
)

export const getJobs = () => (
  readJobs().then((jobs) => Object.values(jobs))
)