import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [check, setCheck] = React.useState(0);
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredContent, setEnteredContent] = React.useState("");

  const changeCheck = () => {
    setCheck(check ^ 1);
  };
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
    setEnteredContent("");
    setEnteredTitle("");
    props.AddNote(expenseData);
  };

  let inputData;
  if (check == 0) {
    inputData = (
      <form className="create-note">
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="1"
        onClick={changeCheck}
        onChange={contentChangeHandler}
        value={enteredContent}
      />
  </form>
    );
  } else {
    inputData = (
      <form onSubmit={submitHandler} className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={titleChangeHandler}
          value={enteredTitle}

        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={contentChangeHandler}
          value={enteredContent}
        />
        <Zoom in={true}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    );
  }

  return <div className="new-expense">{inputData}</div>;

  return <div>{inputData}</div>;
}

export default CreateArea;
