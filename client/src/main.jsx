import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/styles/index.css";
import { ToastContainer, Zoom } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<main className="orange-dark">
			<App />
			<ToastContainer position="top-center" autoClose={ 3000} theme="dark" transition={Zoom}/>
		</main>
	</React.StrictMode>
);
