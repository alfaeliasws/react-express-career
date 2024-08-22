import instance from '../axios'

export const getUserById = async (id) => {
    const response = await instance.get('/api/users/'+ (id ?? ""))
    return response.data
}

export const getAllUsers = async () => {
  const response = await instance.get('/api/users/')
  return response.data
}

export const updateUsers = async (body, id) => {
  const response = await instance.put('/api/users/' +  id, body)
  return response.data
}

export const removeUsers = async (id) => {
  const response = await instance.delete('/api/users/' +  id)
  return response.data
}
// export const getJobPagination = async (page) => {
//   const response = await instance.get('/api/jobs/load-more/?page='+ (page ?? "1"))
//   return response.data
// }

// export const searchJobList = async (desc, location, time) => {
//   const response = await instance.get(
//       '/api/jobs/search?'
//       + 
//       (desc ? "desc=" + desc : "") 
//       + 
//       (location ? '&loc=' + (location ?? "") : "") 
//       + 
//       (time ? ('&full=' + time) : "&full=true")
//   )
//   return response.data
// }


