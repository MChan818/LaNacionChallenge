import TagList from "./components/Tags/TagList";
import Title from "./components/Title/Title";
import ArticleContainer from "./components/Article/ArticleContainer";
import ArticleList from "./components/Article/ArticleList";
import Sidebar from "./components/Sidebar/Sidebar";

import useFetchArticles from "./hooks/useFetchArticles";

import "./App.css";
import TagContainer from "./components/Tags/TagContainer";

const App = (): JSX.Element => {
	const { data, loading, error } = useFetchArticles();

	return data && !loading && !error ? (
		<div id="wrap">
			<main>
				<div className="lay-sidebar">
					<div className="sidebar__main">
						<Title />
						<TagContainer>
							<TagList data={data} />
						</TagContainer>
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
