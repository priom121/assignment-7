
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({handleClickBtn}) => {
  const [cards , setCards] = useState([])

  useEffect(()=>{
      fetch('blog.json') 
      .then(res=>res.json())
      .then(data=>setCards(data))                       
  },[])
  return (
    <div className=' w-2/3 mt-5 max-w-screen-xl py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          cards.map(card=><Card key={card.id} 
            card={card} handleClickBtn={ handleClickBtn} > 
               </Card>)
        }                                                                                 
     </div>
  );
};

Cards.propTypes = {
    Cards:PropTypes.cards,
    handleClickBtn:PropTypes.func                          
};

export default Cards;