
import PropTypes from 'prop-types';
import { FaBookOpen } from 'react-icons/fa';
const Card = ({card}) => {
 const {image ,course_name ,details ,price , credit} = card ;
 return (
  <div >
       <div className="card  card-compact w-80 h-[412px]  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{course_name}</h2>
    <p className='text-base'>{details}</p>
    <div className='flex gap-20'>
       <h2 className='text-2xl font-semibold'>$ {price}</h2>
       <p className='text-xl font-semibold'><FaBookOpen></FaBookOpen> credit : {credit} hr</p>
    </div>
    <div className="card-actions ">
    <button className="btn btn-info px-28">Select</button>
    </div>
  </div>
</div>                                                                                   
 </div>
);
};

Card.propTypes = {
    Card:PropTypes.allCards ,
    FaBookOpen:PropTypes.icon                         
};

export default Card;