
import PropTypes from 'prop-types';

const Detail = ({detail}) => {
   const {course_name}  = detail                         
return (
<div>
   <ol className='text-2xl'>  
   <li> {course_name} </li>
   </ol>
 
                                                                                         
</div>
 );
};

Detail.propTypes = {
     detail:PropTypes.object                         
};

export default Detail;