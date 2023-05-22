import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    slug: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "enum", options: ["Fagner Sales"], required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    draft: { type: "boolean", required: false, default: true },
  }
}));

export const Profile = defineDocumentType(() => ({
  name: "Profile",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    bio: { type: "string", required: true },
    imageUrl: { type: "string", required: true },
    writter: { type: "boolean", required: true }
  }
}))

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post, Profile],
  disableImportAliasWarning: true
});
