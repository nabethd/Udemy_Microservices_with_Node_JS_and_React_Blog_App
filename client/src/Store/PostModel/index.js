import { types } from "mobx-state-tree";
import { randomBytes } from "crypto";
import Actions from "./Actions";
import Views from "./Views";
import CommentModel from "../CommentModel";

const PostModel = types
  .model("Post", {
    title: types.optional("string", ""),
    id: types.optional("string", randomBytes(4).toString("hex")),
    comments: types.array(CommentModel),
  })
  .actions(Actions)
  .views(Views);
export default PostModel;
