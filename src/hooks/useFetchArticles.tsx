import { useLayoutEffect, useState } from "react";
import { TArticles } from "../types/TArticle";

export type TApiRespose = {
	data: TArticles;
	error: unknown;
	loading: boolean;
};

const useFetchArticles = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState();
	const [error, setError] = useState();

	useLayoutEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await fetch("https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/", {
				method: "GET",
			})
				.then((res) => res.json())
				.then((result) => {
					setData(result);
				})
				.catch((error) => {
					return setError(error);
				})
				.finally(() => {
					setLoading(false);
				});
		};
		fetchData();
	}, []);
	return { data, loading, error };
};

export default useFetchArticles;
