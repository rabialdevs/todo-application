import axios from "axios";




export async function addTask(task) {
  
  // ! calling api for addTask 
  const result = await axios
    .post(`http://localhost:3000/api/tasks`, task)
    .then((response) => response.data);
  return result;
}











