import * as types from '../../actions/actions_type/actions_type_alert';


/*  function buat unique id */
const uid = function () {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/* 
	typeToast legend
				- 1 == "success Alert"
				- 2 == "warning Alert"
				- 3 == "error Alert"
*/

const initialState = {
	id: null, // buat unique
	message: "",
	typeToast: null,
	
};

const Alert = (state = initialState, action) => {
	let py = action.payload; // buat nerima parameter yang dilempar dispacth

	// ini logic buat handle spesifik tugas
	switch (action.type) {
		// handle logic signal success alert
		case types.SUCCESS_ALERT:
			// karena ga ada logic lain maka langsung return state baru alias overwrite initialState
			return {
				id: uid(), // buat unique biar berubah kalau sama alert
				message: py, // nanti data message dikirim di dispacth
				typeToast: 1, // 1 karna success alert,
			
			};
		case types.WARNING_ALERT:
			return {
				id: uid(), // buat unique biar berubah kalau sama alert
				message: py, // nanti data message dikirim di dispacth
				typeToast: 2, // 3 karna warning alert
		
			};
		case types.ERROR_ALERT:
			return {
				id: uid(), // buat unique biar berubah kalau sama alert
				message: py, // nanti data message dikirim di dispacth
				typeToast: 3, // 1 karna error alert
			
			};

		default:
			return state;
	}
};

export default Alert;