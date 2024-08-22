import instance from '../axios'

export const addCourses = async (body) => {
  const response = await instance.put('/api/courses/',  body)
  return response.data
}

export const updateCourses = async (body, id) => {
  const response = await instance.put('/api/courses/' +  id, body)
  return response.data
}

export const removeCourses = async (id) => {
  const response = await instance.delete('/api/courses/' +  id)
  return response.data
}
