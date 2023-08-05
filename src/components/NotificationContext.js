import { createContext, useContext, useReducer } from "react";

const anecdoteNotificationReducer = (state, action) => {
  switch (action.type) {
    case "Vote":
      return `id ${action.data} has been voted`;
    case "New":
      return `anecdote has been added`;
    case "Invalid":
      return "minimum of 5 chars for anecdote";
    case "clear":
      return "";
  }
};

const AnedoteNotificationContext = createContext();

export const AnecdoteContextProvider = (props) => {
  const [notifaction, notifcationDispatch] = useReducer(
    anecdoteNotificationReducer,
    ""
  );

  return (
    <AnedoteNotificationContext.Provider
      value={[notifaction, notifcationDispatch]}
    >
      {props.children}
    </AnedoteNotificationContext.Provider>
  );
};

export const UseNotficationState = () => {
  const context = useContext(AnedoteNotificationContext);
  return context[0];
};

export const UseNotficationDispatch = () => {
  const context = useContext(AnedoteNotificationContext);
  return context[1];
};
export default AnedoteNotificationContext;
