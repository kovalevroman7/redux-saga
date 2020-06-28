import { put, takeEvery, all } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: "DECREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
