import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {FiSave} from 'react-icons/fi'

import {
  FilterContactContainer,
  FilterItemsContainer,
  FilterItem,
  FilterIcon,
  FilterName,
  ContactDetailsContainer,
  ContactHeading,
  ContactUsText,
  SocialMediaProfiles,
  SocialProfileLogo,
} from './styledComponents'

class FilterGroup extends Component {
  render() {
    return (
      <FilterContactContainer>
        <FilterItemsContainer>
          <FilterItem>
            <FilterIcon as={AiFillHome} />
            <FilterName>Home</FilterName>
          </FilterItem>
          <FilterItem>
            <FilterIcon as={AiFillFire} />
            <FilterName>Trending</FilterName>
          </FilterItem>
          <FilterItem>
            <FilterIcon as={SiYoutubegaming} />
            <FilterName>Gaming</FilterName>
          </FilterItem>
          <FilterItem>
            <FilterIcon as={FiSave} />
            <FilterName>Saved Videos</FilterName>
          </FilterItem>
        </FilterItemsContainer>
        <ContactDetailsContainer>
          <ContactHeading>CONTACT US</ContactHeading>
          <SocialMediaProfiles>
            <SocialProfileLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialProfileLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialProfileLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocialMediaProfiles>
          <ContactUsText>
            Enjoy! Now to see your channels and recommendations!
          </ContactUsText>
        </ContactDetailsContainer>
      </FilterContactContainer>
    )
  }
}

export default FilterGroup
