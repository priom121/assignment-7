
import PropTypes from 'prop-types';
const Detail = ({detail }) => {
   const {course_name  }  = detail                         
return (
<div>
 <div>
 <ol className='text-2xl ml-3 list-decimal list-inside'>  
   <li type=" 1 ">{course_name}</li> 
   </ol>
  
 </div>

</div>
 );
};

Detail.propTypes = {
     detail:PropTypes.object                         
};

export default Detail;