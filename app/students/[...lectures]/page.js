"use client";
const lectures = ({params}) => {
    console.log("===============", params);
    return (
        <div>
            <h1> {params.lectures}</h1>
        </div>
    )
}
export default lectures