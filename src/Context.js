/*
This creates the context and initializes the context data to an empty object.
Next, we need to create a component wrapper, which we’ll use to wrap components
that use the context data and methods: in withContext.js
*/

import React from "react";
const Context = React.createContext({});
export default Context;