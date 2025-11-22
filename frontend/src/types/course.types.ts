export interface Course {
	id: number;
	title: string;
	img_name: string;
	annotation: string;
	tags: string[];
	slug: string;
	description?: string;
}
