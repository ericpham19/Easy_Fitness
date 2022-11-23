export const logInUser = (userInfo) => {
	return (dispatch) => {
		dispatch({ type: "LOGGING_IN", userInfo });
		// fetch("http://localhost:3000/login", {
		fetch('http://localhost:3000/api/v1/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ session: userInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					dispatch({ type: "LOGIN_SUCCESS", data });
					window.history.pushState(data.user, "", "/user");
				}
			});
	};
};

export const createUser = (userInfo) => {
	return (dispatch) => {
		dispatch({ type: "SIGNING_UP", userInfo });

		fetch('http://localhost:3000/api/v1/sign_up', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.token
			},
			body: JSON.stringify({ user: userInfo })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					const key = Object.keys(data.error);
					const errorMsg = data.error[key][0];
					alert(errorMsg);
				} else {
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
					dispatch({ type: "SIGNUP_SUCCESS", data });
					window.history.pushState(data.user, "", "/user");
					dispatch({ type: "REFRESH_DASHBOARD", data });
				}
			});
	};
};