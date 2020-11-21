import React from 'react'

/**
* @author
* @function Toast
**/

const Toast = (props) => {
  return(
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
            <img src="..." className="rounded mr-2" alt="..." />
            <strong className="mr-auto">Bootstrap</strong>
            
            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
        <div className="toast-body">
          <h1> hello</h1> 
        </div>
        </div>
   )
 }

export default Toast