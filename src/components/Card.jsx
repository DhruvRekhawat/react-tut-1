


function Card({name,age}){
    return(
        <div className='card'>
        {/* <img src={} alt="" className='card_img' /> */}
        <div>
        <h1>
          {name}
        </h1>
        <h2>Age: {age}</h2>
        </div>
      </div>
    )
}

export default Card

