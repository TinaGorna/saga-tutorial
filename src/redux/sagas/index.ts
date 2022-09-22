import {take, takeEvery, takeLatest} from "redux-saga/effects"

const wait = (t: number) => new Promise((resolve => {
    setTimeout(resolve, t)
}))

export function* workerSaga() {//описываем бизнес логику (запросы, работа с API и асинхр действия)
    yield wait(1000);
    console.log("click from saga")
}

export function* watchClickSaga() { //записываем экшены, которые будут происходить в приложении
    // yield take("CLICK") //передаем type нашего экшена
    // yield workerSaga();

    //yield takeEvery("CLICK", workerSaga) //вместо написания цикла каждый раз при клике будем вызывать workerSaga
    yield takeLatest("CLICK", workerSaga) ////мы будем кликать много раз, но из-за takeEvery сработает только один консоль год
}

export default function* rootSaga() { //всего лишь запускает наш watcher
    yield watchClickSaga();
}