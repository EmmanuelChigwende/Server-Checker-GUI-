import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'

const SearchBar = () => {
    const search = useRef()
    const button = useRef()

    useGSAP(() =>{
          gsap.fromTo(search.current,{
            x: -100,
            opacity:0
        },
        {
            x:0,
            opacity:1,
            duration:1,
            ease:"bounce"
        })
        
        gsap.fromTo(button.current,{
            x:200,
            opacity:0
        },
        {
            x:0,
            opacity:1,
            duration:1,
            ease:"bounce"
        }
    )
    })

  return (
    <div className='h-[20vh] w-full flex flex-cols justify-center items-center gap-3 overflow-x-hidden pr-10 pl-10'>
      <input ref={search} className='border-[2px] border-black w-[80%] h-[50%] font-serif text-[1.5rem] rounded-[20px] hover:border-red-600 focus:outline-green-500'  type="text" />
      <button ref={button}  className='font-serif w-[20%] h-[50%] text-[2rem] rounded-[20px] text-white bg-red-600 hover:bg-green-500 '>Search</button>
    </div>
  )
}

export default SearchBar
