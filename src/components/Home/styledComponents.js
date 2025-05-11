import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const FilterContainer = styled.div`
  width: 28%;
  background-color: aqua;
  height: 100vh;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SearchVideosContainer = styled.div`
  background-color: gray;
  width: 72%;
  min-height: 100vh;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
