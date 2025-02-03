const Task = ({ todoItems }) => {
    return (
      <>
        {todoItems.length === 0 ? (
          <p>Add task please</p>
        ) : (
          todoItems.map((item, index) => (
            <h1 key={index}>{item}</h1>  // Added `key` to avoid React warnings
          ))
        )}
      </>
    );
  };
  
  export default Task;
  