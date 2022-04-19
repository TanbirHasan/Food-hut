import React, { useEffect, useState } from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = () => {

     const [questions, setQuestions] = useState([]);

     useEffect(() => {
         fetch("Question.json")
         .then(res => res.json())
         .then(data => setQuestions(data));
     },[])

     console.log(questions);
    return (
    <main>
      <div className='questioncontainer'>
        <h3>questions and answers about Our Restaurent</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} question={question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
    );
};

export default Questions;