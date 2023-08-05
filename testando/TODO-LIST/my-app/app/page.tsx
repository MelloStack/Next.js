'use client'


let sendedInputValue = ""

  const inputValue = (e:any) => {
    sendedInputValue = e.target.value
  }
  
  if(typeof window === "object"){
      document.body.addEventListener("mousedown", function(e) {
        const target = e.target as HTMLInputElement;
        if(target.nodeName == "SPAN"){
          const parentStyle = target.parentElement?.style
          target.parentElement?.remove()
        }
      }, false)
  }
 
  
  const addTodo = () => {  
  
    if(typeof window === "object"){
      const todo_container = document.getElementById("main")  
  
      if(todo_container){
        if(sendedInputValue!){
          const newDiv = document.createElement("div")
          const newSpan = document.createElement("span")
          newSpan.innerHTML = "X"
          newDiv.innerHTML = sendedInputValue
          newDiv.append(newSpan)
          newDiv.classList.add("TODOS")
          newSpan.classList.add("closeTODO")
          todo_container.append(newDiv)
        }
      }
    }
  
  }
     

  export default function Home() {
  return (<>
    <main className="main_container">
      <section className="main" id="main">
        <div className="addTodos">
          <input onChange={inputValue} placeholder="O que quer adicionar?" id="input-todo"></input>
          <button onClick={addTodo}>Adicionar</button>
        </div>
        <div className="TODOS">Fazer Cafe<span className="closeTODO">X</span></div>
      </section>
    </main>
  </>)
}
