import './App.css'
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'  
import Card from './components/Card'
import bigUserData from './MOCK_DATA.json'
const userData = [
  {
    name: "dhruv",
    age: "25"
  },
  {
    name: "manjeet",
    age: "30"
  },
  {
    name: "sanjana",
    age: "32"
  },
]
  



function App() {

   console.log(bigUserData)

  return (
    <>
    <main className='main'>
     {
      bigUserData.map((user,index)=>
      <Card key={user.id} name={user.first_name} age={user.age}></Card>
    )
     }   
    </main>

    </>

  )
}

export default App
