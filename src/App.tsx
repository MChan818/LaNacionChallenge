import { useEffect, useState } from "react";
import "./App.css";
import useFetchArticles from "./hooks/useFetchArticles";
import TagList from "./components/Tags/TagList";
import { TArticles, TTaxonomyTags } from "./types/TArticle";
import { testArticles } from "./tests/testObjects";
import { getOrderedTags } from "./helpers/HelperArray";

interface TTags extends TTaxonomyTags {
	count: number;
}

const App = (): JSX.Element => {
	const error: boolean = false;
	const loading: boolean = false;
	// const [oTags, setOTags] = useState<TTaxonomyTags[]>();
	// const { data, error, loading } = useFetchArticles();
	const data: TArticles = testArticles;

	return data && !error && !loading ? (
		<div id="wrap">
			<main>
				<div className="lay-sidebar">
					<div className="sidebar_main">
						<div className="row">
							<div className="com-titleWithfollow hlp-marginBottom-15">
								<h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
							</div>
						</div>
						<div className="row">
							<div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
								<TagList articles={data.articles} />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	) : (
		<></>
	);
};

export default App;
