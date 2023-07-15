import { randomInt } from "crypto"

const url = "http://localhost:3000/api/hello"
const urlVerification = "http://localhost:3000/"

let Name = ""
let Password = ""

async function PostData() {
  const post = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name: Name, password: Password})
  })

}


function getNameValue(event: any){
  Name = event.target.value
}

function getPassValue(event :any){
  Password = event.target.value
}  



export default function Home() {

  return (
    <>
      <input onChange={getPassValue} type="password" />
      <input onChange={getNameValue} type="text" />
      <button onClick={PostData}>Login</button>
    </>
  )
}