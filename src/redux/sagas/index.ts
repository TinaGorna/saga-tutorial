import {fork, call, spawn, all, delay} from "redux-saga/effects"

export function* auth() {
    yield delay(2000)
    return true;
}

export function* loadUser() {
    const request = yield call(fetch, "http://swapi.dev/api/people");
    const data = yield call([request, request.json])
}

export function* loadBasicData() {
    yield all([
        fork(auth),
        fork(loadUser)
    ])
}

