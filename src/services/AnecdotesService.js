import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addNote = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const update = async (id) => {
  const anecdote = await axios.get(baseUrl + `/${id}`).then((response) => {
    response.data.votes += 1;
    return response.data;
  });
  const response = await axios.put(baseUrl + `/${id}`, anecdote);
  console.log(response.data);
  return response.data;
};

export { getAll, addNote, update };
