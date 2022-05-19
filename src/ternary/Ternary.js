import React,{useState} from 'react'

const Ternary = () => {
    const [values, setvalues]= useState(true)
    const [show ,setshow]= useState(true)
  return (
    <div>
        {(values)?
        <div>
            <h1>hello values is true Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste dicta tenetur odio maxime laboriosam! Sequi expedita nisi qui, ipsum blanditiis eaque facilis est repellendus vero reiciendis nulla tenetur nobis fugit ratione repellat ipsa explicabo officiis. Ea laboriosam qui ipsum nulla. Dolor quaerat hic a rerum modi vero exercitationem consequuntur explicabo magnam id ad molestias repellendus ipsum animi eius incidunt at praesentium quidem veniam, magni minima ea? Dolorem nam error iure illum. Facilis, iste! Facere minima veniam eaque, qui facilis adipisci voluptate vel ipsum, autem ut sunt illo eum amet corrupti doloremque consequuntur repudiandae! Error ab quos quod ex quasi esse.</h1>
        </div>
    :<div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus.</h1>

    </div>}
    {(show) && 
    <div>
        <h1>hello react show is true thats why show is showing</h1>
    </div>
    

    }
      
    </div>
  )
}

export default Ternary
