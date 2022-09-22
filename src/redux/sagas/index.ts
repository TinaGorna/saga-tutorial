import {takeLeading, put, call, fork} from "redux-saga/effects"
import {Simulate} from "react-dom/test-utils";

async function getPeople() {
    const request = await fetch("http://swapi.dev/api/people")
    const data = await request.json()
    return data;
}

export function* loadPeople() {
    const people = yield call(getPeople, "people")
    yield put({type: "SET_PEOPLE", payload: people.results})
}

export function* loadPlanets() {
    const planets = yield call(getPeople, "people")
    yield put({type: "SET_PLANETS", payload: planets.results})
}

export function* workerSaga() {//описываем бизнес логику (запросы, работа с API и асинхр действия)
    yield fork(loadPeople)
    yield fork(loadPlanets)
}

export function* watchClickSaga() { //записываем экшены, которые будут происходить в приложении

    yield takeLeading("CLICK", workerSaga)
}

export default function* rootSaga() { //всего лишь запускает наш watcher
    yield watchClickSaga();
}