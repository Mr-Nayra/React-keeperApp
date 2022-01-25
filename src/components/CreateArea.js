import React from "react";

function CreateArea(props) {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredContent, setEnteredContent] = React.useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      key: Math.random(),
      title: enteredTitle,
      content: enteredContent,
    };
    props.AddNote(expenseData);
    setEnteredContent("");
    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name="title" placeholder="Title" onChange={titleChangeHandler} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={contentChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
