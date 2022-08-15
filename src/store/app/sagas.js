import { takeEvery, put, select } from 'redux-saga/effects';
import * as A from './actions';

const updateTaskPointTaskWorker = function* ({ payload }) {
    const { task, destination, nextPoint } = payload;
    const tasks = yield select((state) => state.app.tasks);
    const currentTask = yield select((state) => state.app.currentTask);

    const nextTasks = tasks.map((it) => {
        if (it.id === task.id) {
            return ({
                ...it,
                [destination]: nextPoint,
            })
        }
        return it;
    })

    yield put(A.setTasksAction(nextTasks));

    if (currentTask.id === task.id) {
        const nextCurrentTask = nextTasks.find((it) => it.id === task.id);
        yield put(A.setCurrentTaskAction(nextCurrentTask));
    }
};

const appSagas = () => [
    takeEvery(A.UPDATE_TASK_POINT, updateTaskPointTaskWorker),
];

export default appSagas;
