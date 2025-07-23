import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom'

const MiniView = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);

  const Loadafter = useRef()
  const Flex = useRef()

  useGSAP(() =>{
    gsap.fromTo(Loadafter.current,{
        y: -100,
        opacity: 1
    },
    {
        y:0,
        duration:1,
        ease:"bounce",
        stagger:1    
    })

    gsap.fromTo(Flex.current,{
        y: -100,
        opacity: 1
    },
    {
        y:0,
        duration:1,
        ease:"bounce",
        stagger:1    
    })
  })

  useEffect(() =>{     
    axios.get("http://127.0.0.1:5000")
    .then(response =>{
        setValue(response.data)
        setLoading(false)
    }).catch(error =>{
        console.log(error)
    })
  },[])

  return (
    <div ref={Loadafter} className='pr-10 pl-10 min-h-[60vh] w-full'>
      <div className='w-full font-serif text-[1.5rem] text-[#E5E5E5]'>
        <h1 className='text-[2rem] font-serif min-w-[200px] pb-[20px]'>
            Currenlty Availabe Reports
        </h1>
        <div className='w-full h-50vh grid grid-cols-3 gap-6'>
            {
                loading ? (toast.success("Getting that data for you.....")): value ? (value?.data?.map(({_id: id ,Ip,["Server status"]: serverStatus}) =>(
                    <div ref={Flex} key={id} className={`border-[2px] w-full h-[200px] rounded-[20px] content-center text-left pl-10 ${serverStatus === "reachable" ? "border-green-500" : "border-red-500"}`} >
                        <p>Server Address: {Ip}</p>
                        <p>Server Status: {serverStatus}</p>
                        <Link to={'/detail'}>
                            <button className={`border-[2px] rounded-[15px]  mt-[10px] p-[5px] ${serverStatus === "reachable"? "hover:bg-green-500": "bg-red-600"}`}>View in Detail</button>
                        </Link>
                    </div>
                ))) : (toast.error("Failed to get reports"))
            }
        </div>
      </div>
    </div>
  );
};

export default MiniView;