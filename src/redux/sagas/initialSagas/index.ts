import {all, call, spawn} from "redux-saga/effects";
import {loadBasicData} from "../index";

export default function* rootSaga() {
    const sagas = [loadBasicData]
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