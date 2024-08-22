import instance from '../axios'

export const getJobList = async (id) => {
    const response = await instance.get('/api/jobs/joblist/'+ (id ?? ""))
    return response.data
}

export const getAllJobLists = async () => {
  const response = await instance.get('/api/jobs/joblist/')
  return response.data
}

export const getJobsPagination = async (page) => {
  const response = await instance.get('/api/jobs/load-more/?page='+ (page ?? "1"))
  return response.data
}

export const searchJobList = async (desc, location, time) => {
  const response = await instance.get(
      '/api/jobs/search?'
      + 
      (desc ? "desc=" + desc : "") 
      + 
      (location ? '&loc=' + (location ?? "") : "") 
      + 
      (time ? ('&full=' + time) : "&full=true")
  )
  return response.data
}


