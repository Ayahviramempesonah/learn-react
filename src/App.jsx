import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/App.css'





  // belajar tic tac toe

  function Square( {value,onSquareClick}){


// const [value,setValue]=useState(null);

    // function TombolKlik(){

    //   setValue("x");
    // }

    return(
      <button  className='square'  onClick={onSquareClick}>
        {value}
      </button>

    )

  }

const products =[
  { title: 'Kubis', isFruit: false, id: 1 },
  { title: 'wortel', isFruit: false, id: 1 },
  { title: 'timun', isFruit: true, id: 1 },


]



const user={
name:'maria',
imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
size:50,


}

function Kata( {count,onClick}){
  <h2>klik ajah abangkuh {count} </h2>

}


function Tombol({count,onClick}){

  return(
<button onClick={onClick}>
  btton saya di klik {count} kali
</button>

  )

}


function App() {
  const [count, setCount] = useState(0)
  const [squares,setSquares]=useState(Array(9).fill(null));
  const[xisnext,setIsNext]= useState(true);

  function HandleTombol(index){
if( squares[index]){
return;

}


    const nextSquare= squares.slice();

    nextSquare[index] = xisnext ? "X " : "O" ;


    setSquares(nextSquare);
    setIsNext(!xisnext);

  }


  function HandleClick(){
setCount(count +9);

  }

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );


  return (
    <>


    <h1>{user.name}</h1>
    <img
    className='avatar'
    src={user.imageUrl}
  alt='foto'
  style={{
    width:user.size,
    height:user.size,
    borderRadius:'50%',
    objectFit:'cover',
  }

  }
    
    />
<button>mybutton</button>

<ul>{listItems}</ul>

<button onClick={HandleClick}>mybutton  {count} kali di klik</button>

<Tombol count={count} onClick={HandleClick}/>
<Tombol count={count} onClick={HandleClick}/>

<h2 count={count} onClick={HandleClick}/>

<h2 className="tic-tac">tic-tac</h2> 

<div className="board-row">
  <Square value={squares[0]}  onSquareClick={()=>HandleTombol(0)}/>
  <Square value={squares[1]} onSquareClick={()=>HandleTombol(1)}/>
  <Square value={squares[2]} onSquareClick={()=>HandleTombol(2)}/>
</div>
<div className="board-row">
  <Square value={squares[3]} onSquareClick={()=>HandleTombol(3)}/>
  <Square value={squares[4]} onSquareClick={()=>HandleTombol(4)}/>
  <Square value={squares[5]} onSquareClick={()=>HandleTombol(5)}/>
</div>
<div className="board-row">
  <Square value={squares[6]}  onSquareClick={()=>HandleTombol(6)}/>
  <Square  value={squares[7]} onSquareClick={()=>HandleTombol(7)}/>
  <Square value={squares[8]} onSquareClick={()=>HandleTombol(8)}/>
</div>

         </>
  )
}

export default App
