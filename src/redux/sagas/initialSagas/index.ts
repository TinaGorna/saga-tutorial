import {all, call, spawn} from "redux-saga/effects";
import {loadBasicData} from "../index";
import pageLoaderSaga from "../pageLoaderSaga";

export default function* rootSaga() {
    const sagas = [loadBasicData, pageLoaderSaga]

    const retrySaga = sagas.map(saga => {
        return spawn(function* () {
            while (true) { //запускаем бесконечный цикл
                try {
                    yield call(saga) //блокирующий эффект, вызывающий сагу
                    break;
                } catch (e) {
                    console.log(e)
                }
            }
        })
    })
    yield all(retrySaga);
}