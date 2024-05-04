// import React from 'react';
// import Logo from '../assets/nlogo.png';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';


// const Header = () => {
//   return <div className='py-1' >
//     <div className='container mx-auto'>
//       <div className='flex justify-between items-center'>
      
//         <a href='#'>
//           <img src={Logo} alt='Logo' className='w-24 h-auto' />
//         </a>
        
//         <button className='btn btn-sm'>
//           <Link to='/Work'>
//             Work with me
//           </Link>
            
          
//           </button>
//       </div>
//       </div>
      
//   </div>;
// };

// export default Header;
import React from 'react';
import Logo from '../assets/nlogo.png';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-1'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          
            <img src={Logo} alt='Logo' className='w-24 h-auto' />
          <button className='btn btn-sm'>
                Work with me
          </button>
           </div>
      </div>
    </div>
  );
};

export default Header;
