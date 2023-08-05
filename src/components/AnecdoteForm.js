import { addNote } from "../services/AnecdotesService";
import asObject from "../actions/AnecdoteActions";
import { useMutation, useQueryClient } from "react-query";
import { UseNotficationDispatch as useNotficationDispatch } from "./NotificationContext";

const AnecdoteForm = () => {
  const dispatchNotifcation = useNotficationDispatch();

  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(addNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
    onError: () => {
      dispatchNotifcation({ type: "Invalid" });
      setTimeout(() => {
        dispatchNotifcation({ type: "clear" });
      }, 2000);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    const obj = asObject(content);
    newAnecdoteMutation.mutate(obj);
    event.target.anecdote.value = "";
    dispatchNotifcation({ type: "New" });

    setTimeout(() => {
      dispatchNotifcation({ type: "clear" });
    }, 2000);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
