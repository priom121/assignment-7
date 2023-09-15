
import PropTypes from 'prop-types';
import Detail from '../../Details/Detail';

const Details = ({ details  }) => {
// const{remaining} = details;
 return (
   <div className='bg-gray-300 w-1/5 h-96 mt-16 rounded-xl shadow-lg '>
     <h3 className='text-3xl font-semibold mt-4 text-cyan-500'>Credit Hour Remaining  hr </h3><br></br> 
          <hr ></hr>
        <h1 className='text-3xl font-medium ml-3'>Course Name</h1>   
        {
            details.map(details => <Detail key={details.id} detail={details}></Detail>)
        } 
                                                                                          
   </div>
);
};

Details.propTypes = {
      Details:PropTypes.text                        
};

export default Details;