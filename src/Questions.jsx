// Toggle all questions setup

// import React from 'react'
// import SingleQuestion from './SingleQuestion'

// const Questions = ({ questions }) => {
//   return (
//     <section className='container'>
//         <h1>Questions</h1>
//         {questions.map((question) => {
//             return <SingleQuestion key={question.id} {...question} />
//         })}
//     </section>
//   )
// }

// export default Questions

// Single Question setup:

import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
            return <SingleQuestion 
                key={question.id} 
                {...question}
                activeId={activeId} 
                toggleQuestion={toggleQuestion}
            />
        })}
    </section>
  )
}

export default Questions