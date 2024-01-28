type InputProp = {
	src: string | undefined;
	url: string;
};

const ArticleImg = ({ src, url }: InputProp) => {
	return (
		<section className="cont-figure">
			<a href={url} className="figure" data-testid="articleImgRedirect">
				<picture className="content-pic picture">
					<img src={src} alt="Imagen del Artículo" className="content-img" data-testid="articleImg"/>
				</picture>
			</a>
		</section>
	);
};

export default ArticleImg;
