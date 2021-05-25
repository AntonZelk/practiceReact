import { ClickedContext } from "../App";

const counter2 = (props) => {
  return (
    <div
      style={{ border: "1px solid #cccc", width: "200px", margin: " 0 auto" }}
    >
      <h3>Counter2</h3>
      <ClickedContext.Consumer>
        {(clicked) => (clicked ? <p>Clicked</p> : null)}
      </ClickedContext.Consumer>
    </div>
  );
};

export default counter2;
