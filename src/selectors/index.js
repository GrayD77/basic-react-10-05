import { createSelector } from 'reselect'

const idSelector = (_, props) => props.id
const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters
const commentListSelector = (state) => state.comments

export const filtratedArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters

    const articlesArray = Object.values(articles)
    console.log(articlesArray)
    return articlesArray.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const createCommentSelector = () => {
  console.log('---', 'creating commentSelector')
  return createSelector(commentListSelector, idSelector, (comments, id) => {
    console.log('---', 'selecting a comment', id)
    return comments[id]
  })
}
