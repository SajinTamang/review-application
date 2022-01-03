import { createContext,useState } from "react";

import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext();


export const FeedBackProvider =({children}) =>{
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: "This is feedback item 1",
        rating: 10,
      },
      {
        id: 2,
        text: "This is feedback item 2",
        rating: 7,
      },
      {
        id: 3,
        text: "This is feedback item 3",
        rating: 5,
      }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })
    // Delete Feedback
    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete?")) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    };
  // Update item
const updateFeedback = (id,updItem) =>
{
  setFeedback(feedback.map((item)=>
    item.id === id ?{...item,...updItem}:item
  ))
}
    // Add Feedback
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      console.log(newFeedback);
      setFeedback([newFeedback, ...feedback]);
    };

    // set item to be edited
const editFeedback = (item) => {
  setFeedbackEdit({
      item,
      edit:true
  })
}

    return (
      <FeedBackContext.Provider
        value={{
          feedback,
          deleteFeedback,
          addFeedback,
          editFeedback,
          feedbackEdit,
          updateFeedback
        }}
      >
        {children}
      </FeedBackContext.Provider>
    );
}


export default FeedBackContext