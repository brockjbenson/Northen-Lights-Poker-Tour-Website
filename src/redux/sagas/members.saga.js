import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchMembers() {
  try {
    const response = yield axios.get("/members");
    yield put({ type: "SET_MEMBERS_INFO", payload: response.data });
  } catch (err) {
    console.log("Error in GETting from members", err);
  }
}

function* membersSaga() {
  yield takeLatest("FETCH_MEMBERS", fetchMembers);
}

export default membersSaga;
