export interface TArticles<T> {
	articles: TArticle7<T>[];
}

export type TArticle7<T> = T extends {subtype: "7"} ? TArticleWPromoItems : TArticle;

export interface TArticle {
	display_date: string;
	headlines: THeadlines;
	subtype: string;
	taxonomy: TTaxonomy;
	website_url: string;
	_id: string;
}


interface TArticleWPromoItems extends TArticle{
	promo_items:TPromoItems;
}

export interface THeadlines {
	basic: string;
}

export interface TPromoItems {
	basic: TPromoBasicItem;
}

export interface TPromoBasicItem {
	resized_urls: TResizedUrl[];
	subtitle: string;
	type: string;
	url: string;
}

export interface TTaxonomy {
	tags: TTaxonomyTags[];
}

export interface TTaxonomyTags {
	slug: string;
	text: string;
}

export interface TResizedUrl {
	option: TUrlOption;
	resizedUrl: string;
}
export interface TUrlOption {
	media: string;
}
