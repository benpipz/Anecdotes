import { getAll, update } from "../services/AnecdotesService";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { UseNotficationDispatch } from "./NotificationContext";

const AnecdoteList = () => {
  const disaptchNotfication = UseNotficationDispatch();
  const queryClient = useQueryClient();

  const voteMutation = useMutation(update, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const handleVote = (id) => {
    voteMutation.mutate(id);
    disaptchNotfication({ type: "Vote", data: id });
    setTimeout(() => {
      disaptchNotfication({ type: "Clear" });
    }, 2000);
  };

  const result = useQuery("anecdotes", getAll);
  if (result.isLoading) {
    return <div>Loading....</div>;
  }

  const anecdotes = result.data;

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.id)}>vote</button>
      </div>
    </div>
  ));
};

export default AnecdoteList;
