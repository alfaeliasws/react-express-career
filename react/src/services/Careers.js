import instance from '../axios'

export const addCareers = async (body) => {
  const response = await instance.put('/api/careers/',  body)
  return response.data
}

export const updateCareers = async (body, id) => {
  const response = await instance.put('/api/careers/' +  id, body)
  return response.data
}

export const removeCareers = async (id) => {
  const response = await instance.delete('/api/careers/' +  id)
  return response.data
}
