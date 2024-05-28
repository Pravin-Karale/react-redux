import React from 'react'

const Home = () => {
  return (

    <div>
        <div className='add-to-cart'>
            <img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=QHCSfGDYGVqbBZ5GvAmrePdsHmAvkyd_1xLI6dzzLWE='/>
        </div>
        <h1>Home Component</h1>
    <div className='cart-wrapper'>
        <div className='img-wrapper item' >
            <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className='text-wrapper item'>
            <span>
                I-Phone
            </span>
            <span>
                Price:$1000.00
            </span>
            </div>
            <div className='btn-wrapper button'>
                
                <button>Add to Cart</button>
            </div>
    </div>
    </div>
  )
}

export default Home