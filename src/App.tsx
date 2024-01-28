import TagList from "./components/Tags/TagList";
import { testArticles } from "./tests/testObjects";
import Title from "./components/Title/Title";
import ArticleContainer from "./components/Article/ArticleContainer";
import ArticleList from "./components/Article/ArticleList";
import Sidebar from "./components/Sidebar/Sidebar";

import useFetchArticles from "./hooks/useFetchArticles";

import { TArticles, TTaxonomyTags } from "./types/TArticle";
import "./App.css";

interface TTags extends TTaxonomyTags {
	count: number;
}

const App = (): JSX.Element => {
	const error: boolean = false;
	const loading: boolean = false;
	// const { data, loading, error } = useFetchArticles();
	const data: TArticles = testArticles;

	return data && !loading && !error ? (
		<div id="wrap">
			<main>
				<div className="lay-sidebar">
					<div className="sidebar__main">
						<Title />
						<div className="row">
							<div className="cont_tags com-secondary-tag hlp-marginBottom-20">
								<TagList data={data} />
							</div>
						</div>
						<ArticleContainer>
							<ArticleList data={data} />
						</ArticleContainer>
					</div>
					<Sidebar />
				</div>
			</main>
		</div>
	) : (
		<></>
	);
};

export default App;
