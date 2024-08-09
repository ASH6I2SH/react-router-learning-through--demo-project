import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
// const [data, setData]= useState({})

// useEffect(()=> {

// fetch('https://api.github.com/users/ASH6I2SH')
// .then((res)=> res.json())
// .then((res)=> setData(res))

// }, [])
const data= useLoaderData()
  return (
    <div className='bg-gray-600 text-white text-center m-3 p-3 rounded-xl'>
      <div className='bg-slate-400 max-w-max m-auto px-3 py-1 rounded-xl'>
      Github followers: {data.followers}
      </div>
      <div className='flex justify-center'>
      <img className='p-4 rounded-full' src={data.avatar_url} alt="gitPicture" />
      </div>
    </div>
  )
}
export default Github

export const githubInfoLoader= async()=> {
  const response = await fetch('https://api.github.com/users/ASH6I2SH')
  return response.json()
}





