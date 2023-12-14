import { useState, useEffect } from "react";

const QuoteGenerator = () => {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = async () => {
		try {
			const response = await fetch("https://api.quotable.io/random");
			const data = await response.json();

			setQuote(data.content);
			setAuthor(data.author);
		} catch (error) {
			console.error("Error fetching quote:", error);
		}
	};

	const handleNewQuote = () => {
		fetchQuote();
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
				<p className="text-xl font-bold mb-4">&ldquo;{quote}&rdquo;</p>
				<p className="text-gray-700">- {author}</p>
				<button
					className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700 transition duration-300"
					onClick={handleNewQuote}
				>
					New Quote
				</button>
			</div>
		</div>
	);
};

export default QuoteGenerator;
