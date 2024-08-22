import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getJobList } from '../services/JobListServices';

function JobDetail() {
  const { id } = useParams();

  const navigate = useNavigate()

  const [details, setDetails] = useState({})

  async function fetchDetails(){
    const response = await getJobList(id)
    if(response.status === 200){
      setDetails(details => response.jobs)
    }
  }

  useEffect(() => {
    if(!sessionStorage.getItem("token") || sessionStorage.getItem("token") === ""){
      navigate('/login')
    }
    fetchDetails()
  },[])

  function handleLogout(e){
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div>
      <header className="flex flex-wrap gap-10 items-start px-2.5 py-7 whitespace-nowrap min-h-[71px] bg-[#4482c0] justify-between pr-3">
        <div className="relative text-2xl font-semibold text-blue-50">
          GitHub Jobs
        </div>
        <div className="relative text-2xl font-semibold text-blue-50 cursor-pointer" onClick={handleLogout}>
          <button className='mr-5 hover:opacity-70 transition-all'>Logout</button>
        </div>
      </header>

      <div>
        <button className="text-blue-600 hover:text-blue-400 transition-all ml-8 mt-3 font-bold text-2xl" onClick={(e)=>navigate('/job-list/')}>{"<- Back"}</button>
      </div>

      <main className="flex flex-wrap px-5 pb-12 pt-3">

        <header className="w-full border-b-2 border-gray-300 mt-3 mb-5 mx-8">
          <h1 className="w-full text-lg text-gray-600 mb-3">{details.type}/{details.location}</h1>
          <h1 className="w-full font-bold text-3xl text-gray-950 mb-4">{details.title}</h1>
        </header>

          <section className="flex w-7/12 min-h-44 px-8 py-8 tracking-wide"> 
            <article dangerouslySetInnerHTML={{__html: details.description}}/>
          </section>

          <section className="flex flex-wrap w-5/12 min-h-44 content-start gap-y-0">
            <main className="flex flex-wrap w-full border-gray-500 border pl-5 items-start mb-3">
              <header className="text-black font-black text-xl w-full">
                <p className="w-full mt-3 mb-3">{details.company}</p>
              </header >
              <figure className="flex w-full">
                <img src={details.company_logo} className="max-h-60 min-h-44" alt={details.company}/>
              </figure>
              <a href={details.company_url} target="_blank" className='text-blue-600 hoveer:text-blue-300 text-lg'>{details.company_url}</a>
            </main>

            <main className="flex flex-wrap w-full border-gray-500 bg-yellow-200 border pl-5 items-start mb-3 min-h-44 content-start">
              <p className="flex flex-wrap textt-black font-extrabold pt-5 mb-3">How To Apply</p>
              <p dangerouslySetInnerHTML={{__html: details.how_to_apply}}></p>
            </main>
          </section>

      </main>
    </div>
  )
}

export default JobDetail