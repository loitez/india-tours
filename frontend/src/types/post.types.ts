export type Post = {
  title: string;
  content: string;
  link: string;
  image: string;
  preview?: string;
};

export interface IRssFeed {
  posts: Post[];
}
