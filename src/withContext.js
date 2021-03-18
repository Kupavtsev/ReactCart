import React from "react";
import Context from "./Context";


// It is make a higher-order component, which appends our context to a wrapped component’s props

/*
Breaking it down a little, we can see that the withContext function takes a React component as its parameter.
It then returns a function that takes the component’s props as a parameter. Within the returned function,
we’re wrapping the component in our context, then assigning it the context as a prop: context={context}.
The {...props} bit ensures that the component retains any props that were passed to it in the first place.
*/

const withContext = WrappedComponent => {
  const WithHOC = props => {
    return (
      <Context.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };

  return WithHOC;
};

export default withContext;