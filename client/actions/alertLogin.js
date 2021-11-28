import * as types from "./actions_type/actions_type_alert";

// buat function action buat ngirim signal ke reducer
// dua itu return karna pake redux thunk
export const sendAlert = (message, type) => (dispatch) => {
	if (type === 1) {
        // dispatch ini function buat ngirim signal dari react ke reducers kita
		dispatch({
			type: types.SUCCESS_ALERT, // type harus sama kayak di type reducers
			payload: message, // payload buat ngirim parameter ke reducers
            // pake key value apa aja , tapi best practice redux gini
            // tapi kalau beda harus sama key value di reducers nanti
		});
	} else if (type === 2) {
		dispatch({
			type: types.WARNING_ALERT,
			payload: message,
		});
	} else if (type === 3) {
		dispatch({
			type: types.ERROR_ALERT,
			payload: message,
		});
	}
};