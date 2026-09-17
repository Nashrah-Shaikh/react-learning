import { useState } from "react"

const Contact = () => {
 const [name,setName] = useState("")
 const [lastName, setLastNAme] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
    name:name,
    last:lastName
    }
    console.log(`kuchbhi:${name}, ${lastName}`)
    console.log("call payload",payload)
 }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input">
        <label for="name" >
          Name
        </label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-input">
        <lable for="LastName">
          Last Name
          </lable>
          <input value={lastName} onChange={(a) => setLastNAme(a.target.value)} />
        </div>
        <div>
          <button className="sbt-btn">Submit</button>
        </div>
        {name}  {lastName}
      </form>
      </>
    
  )
}  

export default Contact
