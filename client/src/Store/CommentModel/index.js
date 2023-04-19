import { types } from "mobx-state-tree";
import { randomBytes } from "crypto";
import Actions from "./Actions";
import Views from "./Views";

const CommentModel = types
  .model("Post", {
    content: types.optional("string", ""),
    id: types.optional("string", randomBytes(4).toString("hex")),
  })
  .actions(Actions)
  .views(Views);
export default CommentModel;
