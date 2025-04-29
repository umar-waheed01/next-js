"use client";
import Link from "next/link";

const StudentLinkst = () =>{
    return (
        <div>
            <ul>
                <Link href="/studentlist/{id}">umar</Link> 
                <br/>
                <Link href="/studentlist/{id}">ali</Link>
                <br/>

                <Link href="/studentlist/{id}">ahmad</Link>
                <br/>

                <Link href="/studentlist/{id}">usman</Link>
            </ul>
        </div>
    )
}

export default StudentLinkst;