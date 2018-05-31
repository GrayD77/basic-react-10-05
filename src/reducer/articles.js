import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      delete articleState[payload.id]
      return articleState

    case ADD_COMMENT:
      console.log(articleState[payload.comment.articleId])
      articleState[payload.comment.articleId].comments.push(payload.comment.id)
      console.log(articleState[payload.comment.articleId])
      return articleState

    default:
      return articleState
  }
}
