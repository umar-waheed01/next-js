async function getUsers(id) {
    const res = await fetch(`http://localhost:3000/api/hello/${id}`, {
        cache: 'no-store' // optional: disables Next.js caching
    });
    const result = await res.json();
    return result;
}

export default async function Page({ params }) {
    console.log("++++", params);
    const user = await getUsers(params.userId);

    return (
        <div>
            <h2>User details</h2>
            {
                user?.name
                    ? <h2>Name: {user.name}</h2>
                    : <h2>User not found</h2>
            }
        </div>
    );
}
