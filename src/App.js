import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import AnecdoteList from "./components/AnecdoteList";
import { AnecdoteContextProvider } from "./components/NotificationContext";

const App = () => {
  return (
    <AnecdoteContextProvider>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </AnecdoteContextProvider>
  );
};

export default App;
