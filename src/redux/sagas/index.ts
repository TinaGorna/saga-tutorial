import {takeEvery, put, call, fork, join, select} from "redux-saga/effects"
import {spawn} from "child_process";

async function getPeople() {
    const request = await fetch("http://swapi.dev/api/people")
    const data = await request.json()
    return data;
}

export function* loadPeople() {
    const people = yield call(getPeople, "people")
    yield put({type: "SET_PEOPLE", payload: people.results})

    return people;
}

export function* loadPlanets() {
    const planets = yield call(getPeople, "people")
    yield put({type: "SET_PLANETS", payload: planets.results})
}

export function* workerSaga() {//описываем бизнес логику (запросы, работа с API и асинхр действия)
    const task = yield fork(loadPeople)
    // yield spawn(loadPlanets)
    const store = yield select(s => s) //обращаемся ко store

    const people = yield join(task)
}

export function* watchClickSaga() { //записываем экшены, которые будут происходить в приложении

    yield takeEvery("LOAD_DATA", workerSaga)
}

export default function* rootSaga() { //всего лишь запускает наш watcher
    yield fork(watchClickSaga);
}