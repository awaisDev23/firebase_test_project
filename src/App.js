import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { db } from "./config/firebase";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
function App() {
  //get the list of user names
  const [name, setName] = useState([]);
  const [todoL, settodoL] = useState([]);
  const todoCollectionRef = collection(db, "todo_list");
  const clientsCollectionRef = collection(db, "clients");
  useEffect(() => {
    const getUSerName = async () => {
      //Read Data , Plus setName state
      try {
        const data = await getDocs(clientsCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setName(filterData);
        console.log(filterData);
      } catch (err) {
        console.error(err);
      }
    };
    getUSerName();
  }, []);

  // todo collection
  useEffect(() => {
    const getUSerName = async () => {
      try {
        const data = await getDocs(todoCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(data);
        // console.log(data.docs);
        settodoL(filterData);
        console.log(filterData);
      } catch (err) {
        console.error(err);
      }
    };
    getUSerName();
  }, []);

  //creating new document and adding data:
  useEffect(() => {
    const createCollection = async () => {
      try {
        const newArray = await setDoc(doc(db, "cities", "city_Id"), {
          name: "Los Angeles",
          state: "CA",
          country: "USA",
        });
        console.log(newArray);
      } catch (err) {
        console.error(err);
      }
    };
    createCollection();
  });
  // const capitalRef = doc(db, "cities", "name");
  // useEffect(() => {
  //   const convertCapital = async () => {
  //     await updateDoc(capitalRef, {

  //     });
  //   };
  //   convertCapital();
  // }, []);

  //adding data into existing collections
  useEffect(() => {
    const addTask = async () => {
      let tasks = await setDoc(doc(db, "todo_list", "tasks"), {
        date: 1,
        task1: "task added to screen",
        name: "owais",
      });
    };
    addTask();
  }, []);

  //update the doc through ID
  // useEffect(() => {
  //   const updateTodo = async (id, date) => {
  //     const todo_doc = doc(db, "todo_list", "tasks");
  //     const newDate = Number(date + 1);
  //     console.log(newDate);

  //     await updateDoc(todo_doc, newDate);
  //   };
  //   updateTodo();
  // }, []);

  //delete a doc
  // const deleteTodo = () => {};

  return (
    <div className="App">
      <h1>Firebase store</h1>
      <Auth />
      <div>
        {name.map((clients) => (
          <div>
            <h1>{clients.name}</h1>
            <h2>{clients.email}</h2>
          </div>
        ))}
        <div>
          {todoL.map((todo_list) => (
            <>
              <div>{todo_list.task1}</div>
              <h3>{todo_list.date}</h3>
              <div>{todo_list.id}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
