import { TArticle, TArticles, TTaxonomyTags } from "../types/TArticle";

export interface TTags extends TTaxonomyTags {
	count: number;
}

/**
 *
 * @param objects
 * @returns Array of all tags in every article
 */
export const getTags = (objects: TArticles<{ subtype: "7" }>): TTaxonomyTags[] => {
	let aux: TTaxonomyTags[] = [];
	objects.articles.forEach((element: TArticle) => {
		element.taxonomy.tags.forEach((tag: TTaxonomyTags) => {
			aux = [...aux, tag];
		});
	});
	return aux;
};

/**
 *
 * @param objects
 * @returns Unordered array of Tags without repeats
 */
export const getOrderedTags = (objects: TArticles<{ subtype: "7" }>): TTags[] => {
	const tagArray: TTaxonomyTags[] = getTags(objects);
	const aux: TTags[] = [];
	tagArray.forEach((tag: TTaxonomyTags) => {
		const index = aux.findIndex((auxTag) => auxTag.slug === tag.slug);
		//This means tag exists already
		if (index !== -1) {
			aux[index].count++;
		} else {
			const transformedTag: TTags = {
				...tag,
				count: 1,
			};
			aux.push(transformedTag);
		}
	});
	aux.sort((a: TTags, b: TTags) => {
		if (a.count < b.count) return 1;
		if (a.count > b.count) return -1;
		return 0;
	});
	return aux;
};
