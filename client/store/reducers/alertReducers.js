import * as types from '../../actions/actions_type/actions_type_alert';


const intialState = {
        type: '',
        message: ''
};


const Alert = (state = intialState, action) => {
	let py = action.payload; // buat nerima parameter yang dilempar dispacth

	// ini logic buat handle spesifik tugas
	switch (action.type) {
		// handle logic signal success alert
		case types.ALERT_SUCCESS:
			// karena ga ada logic lain maka langsung return state baru alias overwrite initialState
			return {
				message: py, // nanti data message dikirim di dispacth
				typeToast: 1, // 1 karna success alert
			};
		case types.ALERT_WARNING:
			return {
				message: py, // nanti data message dikirim di dispacth
				typeToast: 2, // 2 karna warning alert
			};
		case types.ALERT_ERROR:
			return {
				message: py, // nanti data message dikirim di dispacth
				typeToast: 3, // 3 karna error alert
			};

		default:
			return state;
	}
};


export default Alert;
