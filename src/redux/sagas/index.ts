import {takeLeading, put, call} from "redux-saga/effects"

async function getPeople() {
    const request = await fetch("http://swapi.dev/api/people")
    const data = await request.json()
    return data;
}

export function* workerSaga() {//описываем бизнес логику (запросы, работа с API и асинхр действия)
    const data = yield call(getPeople)
    yield put({type: "SET_PEOPLE", payload: data.results})
}

export function* watchClickSaga() { //записываем экшены, которые будут происходить в приложении
    // yield take("CLICK") //передаем type нашего экшена
    // yield workerSaga();

    //yield takeEvery("CLICK", workerSaga) //вместо написания цикла каждый раз при клике будем вызывать workerSaga
    //yield takeLatest("CLICK", workerSaga) ////мы будем кликать много раз, но из-за takeEvery сработает только один консоль лог
    yield takeLeading("CLICK", workerSaga)
}

export default function* rootSaga() { //всего лишь запускает наш watcher
    yield watchClickSaga();
}