import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT:
      const { comment } = payload
      commentsState[comment.id] = comment
      return commentsState

    default:
      return commentsState
  }
}
