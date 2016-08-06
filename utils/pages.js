import sortBy from 'lodash/fp/sortBy'
import filter from 'lodash/fp/filter'
import flow from 'lodash/fp/flow'
import reverse from 'lodash/fp/reverse'

module.exports = function(pages) {
  this.filter = function(pattern) {
    return flow([
      filter(page => page.path.match(pattern)),
      sortBy(page => page.data.date),
      reverse
    ])(pages)
  }
}
