import { useState } from "react"


let Name = "a"
let Password = "a"

export default function Home() {
  
  const [isLoginState, setLoginState] = useState(false)
  const [showResult, setShowResult] = useState(false);


  const url = "http://localhost:3000/api/hello"



  function getNameValue(event: any){
    Name = event.target.value
  }
  
  function getPassValue(event :any){
    Password = event.target.value
  }
    
  
  const errDiv = <div className="err"></div>
  const correctDiv = <div className="correct"></div>

  async function PostData(props: any) {
    setShowResult(false); 

    const post = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: Name, password: Password})
  
    }).then( (res) => {
      console.log(res)
      if(res.status === 200){
        setLoginState(true)
      }else{
        setLoginState(false)
      }
      setShowResult(true)
    })


    
    
  }

  return (
    <>
      <section className="container">  
        <input onChange={getNameValue} placeholder="Name"  type="text" />
        <input onChange={getPassValue} placeholder = "Password" type="password" />
        <button onClick={PostData}>Login</button>
      </section>
      {showResult ? isLoginState ? correctDiv : errDiv : ""}
    </>
  )
}