import type { Post } from "contentlayer/generated";

export const tagSlug = (tag: string) => tag.toLowerCase();
export const authorSlug = (author: string) =>
  author.toLowerCase().replace(" ", "");

export const tagSlugUrl = (tag: string) => `/tag/${tagSlug(tag)}/`;
export const authorSlugUrl = (author: string) => `/${authorSlug(author)}/`;
export const postSlugUrl = (post: Post) => `/posts/${post.slug}`;
