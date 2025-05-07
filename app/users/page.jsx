import Link from "next/link";

async function getUsers(){
    let data = await fetch("http://localhost:3000/api/hello")
    let result =await data.json()
    return result
}

export default async function Page() {
    const users =  await getUsers();
    console.log("++++", users)
    return (
        <div>
        <h1>User list</h1>
        {
            users.map((item, index) => (
                <div key={index}>
                    <Link href={`users/${item.id}`}>{item.name}</Link>
                </div>
            ))
        }
    </div>
    )
}