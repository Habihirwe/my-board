

const Form = () => {
  
    return (
      <form > 
       <div>
        <label>First name:</label>
        <input type="text"></input>
       </div>
       
       <div>

        <label>Last name:</label>
        <input type="text"></input>

       </div>
       <div>
        <label>Password:</label>
        <input type="password"></input>
        </div>

        <div>
        <label> Repeat password:</label>
        <input type="password"></input>
        </div>
       
        
        <button type="submit">Submit</button>
       
        
      </form>
    );
  };
  const rootNode = document.getElementById("root");
  const root = ReactDOM.createRoot(rootNode);
  root.render(React.createElement(Form));
  