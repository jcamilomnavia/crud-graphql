const { userAction, postAction } = require('../actions')

const CreateUser = (_, args) => userAction.createUser(args.data)
const UpdateUser = (_, args) => userAction.updateUser(args.id, args.data)

const CreatePost = (_, args) => postAction.createPost(args.data)
const UpdatePost = (_, args) => postAction.updatePost(args.id, args.data)

module.exports = {
  CreateUser,
  UpdateUser,
  CreatePost,
  UpdatePost
}
