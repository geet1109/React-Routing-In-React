import {NavLink,Outlet} from 'react-router-dom';
function ComponentLifeCycle(){
   return(
     <div>
      <div className='maindiv'>
        <h1>Component Life Cycle</h1>
         <NavLink to="/mount" className='link'>Mounting</NavLink>
         <NavLink to="/update" className='link'>Updating</NavLink>
         <NavLink to="/unmount" className='link'>Unmounting</NavLink>
      </div>
       <div className='content'>
          <Outlet/>
       </div>
     </div>
   )
}
export default ComponentLifeCycle;