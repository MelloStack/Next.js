let Name = ""
let Password = ""

export default function Register() {
  

    const url = "http://localhost:3000/api/registerdata"  

    
  
    function getNameValue(event: any){
      Name = event.target.value
    }
    
    function getPassValue(event :any){
      Password = event.target.value
    }
      
    
    async function sendData(params: any) {
        if(!Name || !Password){
            return
        }

        console.log(Name, Password)

        const post = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name: Name, password: Password})
        }).then( (res) => console.log(res))

        
    }

    
    return (
      <>
        <section className="container">  
          <input onChange={getNameValue} placeholder="Name"  type="text" />
          <input onChange={getPassValue} placeholder = "Password" type="password" />
          <button onClick={sendData}>Login</button>
        </section>
      </>
    )
  }