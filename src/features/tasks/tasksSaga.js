import {
  takeLatest,
  call,
  put,
  delay,
  takeEvery,
  select,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSucces,
  selectTasks,
} from "./tasksSlice";

function* fetchExampleTasksHendler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSucces(exampleTasks));
  } catch (error) {
    const errorLoading = yield call(fetchExampleTasksError);
    yield put(errorLoading);
  }
}

function* saveTasksInLocalStorageHendler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHendler);
  yield takeEvery("*", saveTasksInLocalStorageHendler);
}
