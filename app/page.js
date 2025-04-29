"use client"; 
import Image from "next/image";
import { useState } from "react";
import  {useRouter}  from "next/navigation"


export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("umar");
  const fruits = () =>{
    setName("hamza");
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">  
      <h1>This is Home Page</h1>
      <User name="umar" />
      <button onClick={() => fruits()}>Click Me</button>
      <h1 className="text-2xl font-bold">Hello {name}</h1>
      <button onClick={() => router.push("/login")}>Go to login Page</button>

    </div>
  );
}

const User = (props) =>{
  return(
    <div>
      <h1>User Name is: {props.name}</h1>
    </div>
  )
}
