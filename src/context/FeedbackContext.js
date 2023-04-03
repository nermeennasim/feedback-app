import { createContext, useState } from "react";

const FeedbackContext = createContext();

//we need to create provider to pass parameters or children

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "This is item from Context",
			rating: 10,
		},
	]);
	return (
		<FeedbackContext.Provider value={{ feedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
