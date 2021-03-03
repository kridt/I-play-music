import axios from "axios";
import { useContext, useEffect } from "react";
import TokenContext from "../TokenContext";
import { navigate } from "@reach/router";

export default function Callback(props) {
	var tokenState = useContext(TokenContext);
	var setToken = tokenState[1];

	var code = new URLSearchParams(props.location.search).get("code");

	useEffect(
		function () {
			axios
				.post(
					"/.netlify/functions/token",
					JSON.stringify({
						code,
					})
				)
				.then(response => {
					setToken(response.data);
					navigate("/Featured");
				});
		},
		[setToken, code]
	);

	return null;
}
