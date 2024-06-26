// Toggle all questions setup

// import { useState } from 'react';
// import data from './data'
// import Questions from './Questions';

// const App = () => {
//   const [questions, setQuestions] = useState(data)
//   return (
//     <main>
//       <Questions questions={questions} />
//     </main>
//   );
// };
// export default App;

// Only toggle one question at a time setup:

import { useState } from 'react';
import data from './data'
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <Questions 
        questions={questions} 
        activeId={activeId} 
        toggleQuestion={toggleQuestion} />
    </main>
  );
};
export default App;
