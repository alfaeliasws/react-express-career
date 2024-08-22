import instance from '../axios'

export const addEducations = async (body) => {
  const response = await instance.put('/api/educations/',  body)
  return response.data
}

export const updateEducations = async (body, id) => {
  const response = await instance.put('/api/educations/' +  id, body)
  return response.data
}

export const removeEducations = async (id) => {
  const response = await instance.delete('/api/educations/' +  id)
  return response.data
}
