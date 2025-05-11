import styled from 'styled-components'

export const FilterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 100vh;
`

export const FilterItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FilterItem = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  list-style-type: none;
`

export const FilterIcon = styled.span`
  height: 20px;
  color: #7e858e;
`

export const FilterName = styled.p`
  color: #383838;
`

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContactHeading = styled.h1`
  font-size: 22px;
  color: #1e293b;
`

export const ContactUsText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
`

export const SocialMediaProfiles = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const SocialProfileLogo = styled.img`
  height: 45px;
`
