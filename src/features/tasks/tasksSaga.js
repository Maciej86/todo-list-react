import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSucces,
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

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHendler);
}
