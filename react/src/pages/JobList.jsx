import React, { useEffect, useState } from 'react'
import { getAllJobLists, getJobsPagination, searchJobList } from '../services/JobListServices'
import { useNavigate } from 'react-router-dom'

function JobList() {

  const navigate = useNavigate()

  const [filter, setFilter] = useState({
    desc: "",
    loc:"",
    full:false
  })
  const [jobList, setJobList] = useState([])

  function handleChange(e) {
    
    if(e.target.id === "desc") {
      e.preventDefault()
      const descUpdate = {desc: e.target.value}
      setFilter(filter => ({...filter, ...descUpdate}))
    }
    
    if(e.target.id === "loc") {
      e.preventDefault()
      const locUpdate = {loc: e.target.value}
      setFilter(filter => ({...filter, ...locUpdate}))
    }

    if(e.target.id === "full") {
      e.persist()
      const prevFull = filter.full
      const fullUpdate = {full: !prevFull}
      setFilter(filter => ({...filter, ...fullUpdate}))
    }

  }

  async function fetchFirstLoad(){
    const response = await getAllJobLists()
    setJobList(jobList => response.jobs)
  }

  useEffect(() => {
    if(!sessionStorage.getItem("token") || sessionStorage.getItem("token") === ""){
      navigate('/login')
    }
    fetchFirstLoad()
  },[])
  
  useEffect(() => {
  }, [filter, jobList])

  async function handleOnClickFilter(e){
    e.preventDefault()
    const response = await searchJobList(filter.desc, filter.loc, filter.full)
    if(response.status === 200){
      setJobList(jobList => response.jobs)
    }
  }

  async function handleOnClickLoadMore(e){
    e.preventDefault();
    const response = await getJobsPagination(2)
    if(response.status === 200){
      setJobList(jobList => [...jobList, ...response.jobs])
      setLoadMoreHide(load => true)
    }
  }

  function handleLogout(e){
    e.preventDefault()
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  function handleClickDetail(id, e){
    e.preventDefault()

    navigate("/job-detail/" + id)
  }

  function handleLogout(e){
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="flex overflow-hidden flex-col">
      <header className="flex flex-wrap gap-10 items-start px-2.5 py-7 whitespace-nowrap min-h-[71px] bg-[#4482c0] justify-between pr-3">
        <div className="relative text-2xl font-semibold text-blue-50">
          GitHub Jobs
        </div>
        <div className="relative text-2xl font-semibold text-blue-50 cursor-pointer" onClick={handleLogout}>
          <button className='mr-5 hover:opacity-70 transition-all'>Logout</button>
        </div>
      </header>
     
      <section className="flex relative z-10 flex-col pt-7 pr-11 pl-1.5 mt-0 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap px-16 max-w-full font-semibold w-8/12">
          <div className="text-xs text-zinc-700 w-7/12">Job Description</div>
          <div className="text-xs text-zinc-700 w-5/12">Location</div>
        </div>
        <div className="flex relative gap-5 justify-between mt-1 w-full font-semibold max-md:max-w-full">
          <div className="flex flex-col items-end pl-16 pt-3.5 pb-1 text-sm bg-black bg-opacity-0 text-neutral-400 max-md:pl-5 max-md:max-w-full w-3/12">
            <div className="flex px-3 py-2.5 bg-white border-2 border-solid border-neutral-300 w-full">
              <input id="desc" className="flex-auto focus:outline-none" placeholder='Filter by title, benefits, companies, experties' type="text" onChange={(e) =>handleChange(e)}/>
            </div>
          </div>
          <div className="flex flex-col items-end pl-0 pt-3.5 pb-1 text-sm bg-black bg-opacity-0 text-neutral-400 max-md:pl-5 max-md:max-w-full w-3/12">
            <div className="flex px-3 py-2.5 bg-white border-2 border-solid border-neutral-300 w-full">
              <input id="loc" className="flex-auto focus:outline-none" placeholder='Filter by city, state, zip code and country' type="text" onChange={(e) =>handleChange(e)} />
            </div>
          </div>

          <div className="flex gap-3 my-auto text-xs text-neutral-700">
            <input type="checkbox" id="full" name="full" checked={filter.full} onChange={(e) =>handleChange(e)}/>
            <label for="full" className="my-auto">Full Time Only</label>
          </div>
          <div className="flex relative flex-col py-5 my-auto text-xs text-gray-100 whitespace-nowrap rounded-sm aspect-[2.581] w-[111px] max-md:px-5 items-start">
            <button onClick={handleOnClickFilter} type="button" className="bg-gray-700 hover:bg-gray-600 transition-all text-white rounded-md px-10 py-5">Search</ button>
          </div>
        </div>
      </section>

      <main className="flex relative flex-col w-full items-center min-h-[919px] max-md:pr-5 max-md:max-w-full">
        <div className="flex relative flex-wrap items-center mt-3.5">
          <div className="flex flex-col grow shrink-0 self-end mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-1 text-2xl font-medium text-gray-800 max-md:max-w-full">
              <div className="self-start">Job List</div>
              <div className="flex shrink-0 mt-10 max-w-full h-0.5 bg-gray-100 w-[1213px]" />
            </div>
            <content>
              {
                jobList && jobList.map((job) => {
                  return (
                    <div className="flex w-full border-t-2 border-gray-500 py-7 hover:opacity-60 hover:cursor-pointer" onClick={(e) => handleClickDetail(job.id, e)}>
                      <div className="flex flex-col px-1 font-medium text-gray-800 w-6/12">
                        <p className="self-start text-2xl pb-2 text-blue-600">{job.title}</p>
                        <p className="self-start text-md text-gray-600">{job.company} - {job.type}</p>
                      </div>
                      <div className="flex flex-col px-1 font-medium text-gray-800 w-6/12">
                        <p className="self-end text-lg pb-2">{job.location}</p>
                        <p className="self-end text-lg">{job.created_at}</p>
                      </div>
                    </div>
                  )
                })
              }
            </content>
          </div>
        </div>
           
        <div className="flex relative flex-col justify-center self-center p-0.5 mt-7 w-full text-xs font-semibold text-blue-100 bg-black bg-opacity-0 max-w-[980px] max-md:max-w-full">
          <button className="px-16 py-3 bg-blue-700 hover:bg-blue-500 transition-all border border-blue-500 border-solid max-md:px-5 max-md:max-w-full" onClick={handleOnClickLoadMore}>
            More Jobs
          </button>
        </div>
      </main>
    </div>
  )
}

export default JobList