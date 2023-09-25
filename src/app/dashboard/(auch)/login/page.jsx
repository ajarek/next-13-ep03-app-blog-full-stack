'use client'
import { signIn } from 'next-auth/react'
import React, {useState} from 'react'
import Link from "next/link";
import Image from 'next/image'
import GitHub from 'public/github.png'

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault() 
    console.log(e);
  }
  return (
    <div className={'min-h-screen p-10 flex flex-col justify-center items-center'}>
    <h1 className={'text-2xl'}>{success ? success : "Witamy ponownie"}</h1>
    <h2 className={'my-4'}>Aby zobaczyć panel, zaloguj się.</h2>

    <form onSubmit={handleSubmit} className={'w-80 flex flex-col'}>
      <input
        type="text"
        placeholder="Email"
        required
        className={'input'}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className={'input'}
      />
      <button className={'w-80 h-12 bg-green-500'}>Zaloguj się</button>
      {error && error}
    </form>
    <button
      onClick={() => {
        signIn("github");
      }}
      className={'flex justify-center items-center w-80 h-12 bg-sky-500 my-4'}
    >
      Zaloguj się z Github <Image
      src={GitHub}
      width={60}
      height={60}
      />
    </button>
    <span className={'py-4'}>- LUB -</span>
    <Link className={'text-xl'} href="/dashboard/register">
    Stwórz nowe konto
    </Link>
  </div>
  )
}

export default Login