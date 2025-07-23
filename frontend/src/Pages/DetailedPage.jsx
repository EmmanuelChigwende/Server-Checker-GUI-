import React from 'react'
import axios from 'axios'
import { useEffect,useState,useRef } from 'react'
import toast from 'react-hot-toast'
import { useGSAP } from '@gsap/react'

const DetailedPage = () => {
  const [value,setValue] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{  
    axios.get("http://127.0.0.1:5000")
    .then(response =>{
      setValue(response.data)
      setLoading(false)
    }).catch(error =>{
      console.log(error)
    })
  },[])

  return (
    <div className='w-full grid grid-cols-2 gap-6'>
      {
        loading ? (toast.success("fetching detailed report")): value ? (value?.data?.map(({_id:id,Ip:Ip,["Server status"]:serverStatus,["Time taken"]:time}) =>(
          <div className={`w-full min-h-[400px]  p-10 border-[2px]  mb-3 rounded-[20px] text-[1.5rem] ${serverStatus === "reachable" ? "border-green-600" :"border-red-600"}`}>
            <h1 className='text-[2rem] pb-10 text-white'>Report ID{id}</h1>
            <div className=''>  
              <p>Ip Address: {Ip}</p>
              <p>Server Status:{serverStatus}</p>
              <p>Time Taken: {time}</p>
              <button className='mt-[20px] rounded-[10px] bg-red-500 text-white '>Delete Report</button>
            </div>
          </div>
        ))) : (toast.error("Failed to retieve data"))
      }
    </div>
  )
}

export default DetailedPage
