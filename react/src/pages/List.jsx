import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../services/Users'
import { jwtDecode } from 'jwt-decode';


function List() {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState([])


  function handleChange(e) {
    
    if(e.target.id === "search") {
      e.preventDefault()
      setSearch(prev => e.target.value)
      
      const filter = data.filter((item) =>  {
        return (item.applied_position ?? "").toLowerCase().includes((e.target.value ?? "").toLowerCase()) || (item.full_name ?? "").toLowerCase().includes((e.target.value ?? "").toLowerCase()) || (item.last_education ?? "").toLowerCase().includes((e.target.value ?? "").toLowerCase())})
      console.log(filter)
      setFilteredData(prev => filter )
    }

  }

  async function fetchFirstLoad(){
    const response = await getAllUsers()
    setData(jobList => response.users)
  }

  useEffect(() => {
    if(!sessionStorage.getItem("token") || sessionStorage.getItem("token") === ""){
      navigate('/login')
    }

    const jwtContent = jwtDecode(sessionStorage.getItem("token")).userDetail

    if(jwtContent.role !== "admin" ){
      setRole(role => jwtContent.role)
      navigate('/detail/' + jwtContent.id)
    }

    fetchFirstLoad()
  },[])
  
  useEffect(() => {
  }, [data])

  async function handleOnClickFilter(e){
    e.preventDefault()

  }


  function handleLogout(e){
    e.preventDefault()
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  function handleLogout(e){
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="flex overflow-hidden flex-col">
      <header className="flex flex-wrap gap-10 items-start px-2.5 py-7 whitespace-nowrap min-h-[71px] bg-[#222933] justify-between pr-3">
        <div className="relative text-2xl font-semibold text-blue-50">
          Candidate Lists
        </div>
        <div className="relative text-2xl font-semibold text-blue-50 cursor-pointer" onClick={handleLogout}>
          <button className='mr-5 hover:opacity-70 transition-all'>Logout</button>
        </div>
      </header>
     
      <section className="flex relative z-10 flex-col pt-7 pr-11 pl-1.5 mt-0 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap px-16 max-w-full font-semibold w-8/12">
        </div>
        <div className="flex relative gap-5 justify-between mt-1 w-full font-semibold max-md:max-w-full">
          <div className="flex flex-col items-end pl-0 pt-3.5 pb-1 text-sm bg-black bg-opacity-0 text-neutral-400 max-md:pl-5 max-md:max-w-full w-3/12">
            <div className="flex px-3 py-2.5 bg-white border-2 border-solid border-neutral-300 w-full">
              <input id="search" className="flex-auto focus:outline-none" placeholder='Filter by name, education, position' type="text" onChange={(e) =>handleChange(e)} />
            </div>
          </div>

        </div>
      </section>

      <main className="flex relative flex-col w-full items-center min-h-[919px] max-md:pr-5 max-md:max-w-full">
        <div className="flex relative flex-wrap items-center mt-3.5">
          <div className="flex flex-col grow shrink-0 self-end mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-1 text-2xl font-medium text-gray-800 max-md:max-w-full">
              <div className="self-start">Candidate List</div>
              <div className="flex shrink-0 mt-10 max-w-full h-0.5 bg-gray-100 w-[1213px]" />
            </div>
            <content>
              {
                search ?
                filteredData && filteredData.map((user) => {
                    const date = new Date(user.date_of_birth)
                    const stringDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
                    return (
                      <div className="w-full flex flex-wrap text-black font-medium py-3 px-2 hover:cursor-pointer hover:opacity-50 hover:bg-gray-800 hover:text-white transition-all" onClick={(e)=>{
                        navigate('/detail/'+user.id)}}>
                        <div className="w-3/12 px-3">{user.full_name ?? user.username}</div>
                        <div className="w-3/12 px-3">{user.place_of_birth}</div>
                        <div className="w-3/12 px-3">{stringDate}</div>
                        <div className="w-3/12 px-3">{user.applied_position}</div>
                      </div>
                    )
                })
                :
                data && data.map((user) => {
                  const date = new Date(user.date_of_birth)
                  const stringDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
                  return (
                    <div className="w-full flex flex-wrap text-black font-medium py-3 px-2 hover:cursor-pointer hover:opacity-50 hover:bg-gray-800 hover:text-white transition-all" onClick={(e)=>{
                      navigate('/detail/'+user.id)}}>
                      <div className="w-3/12 px-3">{user.full_name ?? user.username}</div>
                      <div className="w-3/12 px-3">{user.place_of_birth}</div>
                      <div className="w-3/12 px-3">{stringDate}</div>
                      <div className="w-3/12 px-3">{user.applied_position}</div>
                    </div>
                  )
                })
              }
            </content>
          </div>
        </div>
           
      </main>
    </div>
  )
}

export default List