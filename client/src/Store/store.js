// models/TaskStore.js
import { types } from "mobx-state-tree";
import PostModel from "./PostModel";

const Actions = (self) => ({
  add(post) {
    self.Posts.push(post);
  },
});

const BlogStore = types
  .model("Blog", {
    Posts: types.array(PostModel),
  })
  .actions(Actions);
export default BlogStore;
