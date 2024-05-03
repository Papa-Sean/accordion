// Toggle all questions setup:

// import React, { useState } from 'react'
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// const SingleQuestion = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false)
//   return (
//     <article className='question'>
//         <header>
//             <h5>{title}</h5>
//             <button 
//                 className='question-btn' 
//                 onClick={() => setShowInfo(!showInfo)}
//             >
//                 {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//             </button>
//         </header>
//         {showInfo && <p>{info}</p>}
//     </article>
//   )
// }

// export default SingleQuestion

// Toggle single question setup:

import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button 
                className='question-btn' 
                onClick={() => toggleQuestion(id)}
            >
                {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion