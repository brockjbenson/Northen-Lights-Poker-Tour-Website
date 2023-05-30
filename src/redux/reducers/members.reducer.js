import { combineReducers } from "redux";

// loginMessage holds the string that will display
// on the login screen if there's an error
const members = [
  {
    id: 1,
    name: "Brock Benson",
    birthday: "August 7, 1998",
    age: 24,
    birthplace: "USA",
  },
  {
    id: 2,
    name: "Andrew Kolling",
    birthday: "November 28, 1998",
    age: 24,
    birthplace: "USA",
  },
  {
    id: 3,
    name: "Ethan Lingen",
    birthday: "July 2, 1998",
    age: 24,
    birthplace: "USA",
  },
  {
    id: 4,
    name: "Adam Mark",
    birthday: "February 29, 2000",
    age: 23,
    birthplace: "USA",
  },
  {
    id: 5,
    name: "Evan Waskom",
    birthday: "May 17, 1999",
    age: 24,
    birthplace: "USA",
  },
  {
    id: 6,
    name: "Tate Camas",
    birthday: "August 17, 1998",
    age: 24,
    birthplace: "USA",
  },
  {
    id: 7,
    name: "Brenden Fowler",
    birthday: "December 12, 1999",
    age: 23,
    birthplace: "USA",
  },
  {
    id: 8,
    name: "Jared Palluck",
    birthday: "April 27, 2000",
    age: 23,
    birthplace: "USA",
  },
  {
    id: 9,
    name: "Jake Freitag",
    birthday: "June 18, 1998",
    age: 23,
    birthplace: "USA",
  },
  {
    id: 10,
    name: "Derek Houska",
    birthday: "June 20, 1999",
    age: 23,
    birthplace: "USA",
  },
  {
    id: 11,
    name: "Brock Woehl",
    birthday: "June 18, 1998",
    age: 24,
    birthplace: "USA",
  },
  {
    id: 12,
    name: "Nick Eggman",
    birthday: "May 2, 1999",
    age: 23,
    birthplace: "USA",
  },
];
const memberInfo = (state = members, action) => {
  switch (action.type) {
    case "GET_MEMBERS_INFO":
      return state;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  memberInfo,
});
