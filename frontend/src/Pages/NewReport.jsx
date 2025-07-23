import React, { useState, useRef } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { toast } from 'react-hot-toast';

const NewReport = () => {
  const [value, setValue] = useState({
    ip: '',
    status: '',
    time: '',
  });

  const Animate = useRef();

  useGSAP(() => {
    gsap.fromTo(
      Animate.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'bounce' }
    );
  }, []);

  const data = {
    "Ip": value.ip,
    "Server status": value.status,
    "Time taken": value.time,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/new", data)
      .then((res) => {
        console.log(res);
        toast.success("New report generated");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to generate report");
      });
  };

  const HandleClearBtn = () => {
    setValue({
      ip: '',
      status: '',
      time: '',
    });
  };

  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <form
        ref={Animate}
        onSubmit={handleSubmit}
        className='border-[2px] w-[80%] min-h-[80%] space-y-6 text-[2rem] text-white p-10 rounded-[15px]'
      >
        <h1 className='text-[3rem]'>Generate new report</h1>

        <p className='w-full grid grid-rows-2'>
          <label htmlFor="ip">Ip Address:</label>
          <input
            value={value.ip}
            onChange={(e) => setValue((prev) => ({ ...prev, ip: e.target.value }))}
            className='text-black hover:border-green-600 hover:cursor-pointer focus:outline-green-600 rounded-[10px]'
            type="text"
            id="ip"
          />
        </p>

        <p className='w-full grid grid-rows-2'>
          <label htmlFor="status">Server Status:</label>
          <input
            value={value.status}
            onChange={(e) => setValue((prev) => ({ ...prev, status: e.target.value }))}
            className='text-black hover:border-green-600 hover:cursor-pointer focus:outline-green-600 rounded-[10px]'
            type="text"
            id="status"
          />
        </p>

        <p className='w-full grid grid-rows-2'>
          <label htmlFor="time">Time Taken:</label>
          <input
            value={value.time}
            onChange={(e) => setValue((prev) => ({ ...prev, time: e.target.value }))}
            className='text-black hover:border-green-600 hover:cursor-pointer focus:outline-green-600 rounded-[10px]'
            type="text"
            id="time"
          />
        </p>

        <p className='w-full inline-flex justify-between pr-40 pl-40'>
          <button
            type="submit"
            className='border-[2px] min-w-[200px] bg-green-600 p-2 rounded-[5px] mt-[50px] hover:bg-white hover:text-green-600 hover:border-green-600'
          >
            Add Report
          </button>
          <button
            type="button"
            onClick={HandleClearBtn}
            className='border-[2px] w-[200px] bg-red-600 p-2 rounded-[5px] mt-[50px] hover:bg-white hover:text-red-600 hover:border-red-600'
          >
            Clear
          </button>
        </p>
      </form>
    </div>
  );
};

export default NewReport;