import {Container, Row, Col, Button} from 'react-bootstrap'
import * as Bootstrap from 'bootstrap'

type BookProps = {
    title: string
    children: React.ReactNode[]   
}

export const Book = (props: BookProps) => {
    
    return (
  <div className="card" style={{width: "18rem"}} background-color= {'#000'}>
      {props.children[0]} 
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.children[1]}</p>
    <a href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_2?keywords=atomic+habits&qid=1641790909&s=books&sprefix=atomic+%2Cstripbooks%2C337&sr=1-2" className="btn btn-primary">Order now!</a>
  </div>
</div>        


)
}

{/* <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


// <div style={{ color: '#fff' }}>
//     <h2>The Benefits of Green Apples {props.children}</h2>
//     <div>3/2/2019</div>
//     <div>
//       Green apples have a high fiber content which helps in increasing the
//       body's metabolism. While consuming an apple, make sure that you're not
//       tossing the peel in the trash. Consuming apple with its peel improves the
//       overall health. Due to its high fiber content, apple helps in
//       detoxification process. It keeps the liver and digestive system away from
//       harmful elements.
//     </div>
// </div>