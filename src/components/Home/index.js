import {Component} from 'react'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import {
  HomeContainer,
  FilterContainer,
  SearchVideosContainer,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeContainer>
          <FilterContainer>
            <FilterGroup />
          </FilterContainer>
          <SearchVideosContainer>
            <h1>Videos</h1>
          </SearchVideosContainer>
        </HomeContainer>
      </div>
    )
  }
}

export default Home
