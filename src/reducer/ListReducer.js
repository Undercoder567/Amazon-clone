import {  getFirestore,arrayUnion, arrayRemove, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase";
const db = getFirestore(app);

const ListData = {
  ListItems: JSON.parse(localStorage.getItem("listItems")) || [],
};

const ItemsAdded = (state = ListData, action) => {
  switch (action.type) {
    case "ADD":
      const productData = action.data;
      const updatedList = [...state.ListItems, productData];
      localStorage.setItem("listItems", JSON.stringify(updatedList)); // Update local storage
      return {
        ...state,
        ListItems: updatedList,
      };
    case "REMOVE":
      const itemId = action.id;
      const newList = state.ListItems.filter((element) => element.id !== itemId);
      localStorage.setItem("listItems", JSON.stringify(newList)); // Update local storage
      return {
        ...state,
        ListItems: newList,
      };
    default:
      return state;
  }
};

export default ItemsAdded;
