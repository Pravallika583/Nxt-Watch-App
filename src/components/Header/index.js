import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut, FiMenu, FiMoon, FiSave} from 'react-icons/fi'
import {AiOutlineClose, AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import {
  HeaderContainer,
  LogoImage,
  HeaderLinks,
  HeaderIcons,
  ListItem,
  ProfileImage,
  LogoutButton,
  IconButton,
  PopupContainer,
  FilterPopupItemsContainer,
  FilterItemsContainer,
  FilterItem,
  FilterIcon,
  FilterName,
  CloseButton,
  CloseButtonContainer,
  LogoutPopupContainer,
  LogoutDetailsContainer,
  Text,
  LogoutCancelButton,
  LogoutConfirmButton,
  LogoutButtonsContainer,
} from './styledComponents'

class Header extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  renderLogoutPopup = triggerElement => (
    <Popup modal trigger={triggerElement}>
      {close => (
        <LogoutPopupContainer>
          <LogoutDetailsContainer>
            <Text>Are you sure you want to logout?</Text>
            <LogoutButtonsContainer>
              <LogoutCancelButton onClick={() => close()}>
                Cancel
              </LogoutCancelButton>
              <LogoutConfirmButton
                onClick={() => {
                  this.onLogout()
                  close()
                }}
              >
                Confirm
              </LogoutConfirmButton>
            </LogoutButtonsContainer>
          </LogoutDetailsContainer>
        </LogoutPopupContainer>
      )}
    </Popup>
  )

  renderMenuPopup = triggerElement => (
    <Popup modal trigger={triggerElement}>
      {close => (
        <PopupContainer>
          <CloseButtonContainer>
            <CloseButton type="button" onClick={() => close()}>
              <AiOutlineClose />
            </CloseButton>
          </CloseButtonContainer>
          <FilterPopupItemsContainer>
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
          </FilterPopupItemsContainer>
        </PopupContainer>
      )}
    </Popup>
  )

  render() {
    return (
      <HeaderContainer>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <HeaderLinks>
          <ListItem>
            <IconButton data-testid="theme">
              <FiMoon />
            </IconButton>
          </ListItem>
          <ListItem>
            <Link to="/">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </Link>
          </ListItem>
          <ListItem>
            {this.renderLogoutPopup(<LogoutButton>Logout</LogoutButton>)}
          </ListItem>
        </HeaderLinks>
        <HeaderIcons>
          <ListItem>
            <IconButton data-testid="theme">
              <FiMoon />
            </IconButton>
          </ListItem>
          <ListItem>
            {this.renderMenuPopup(
              <IconButton>
                <FiMenu />
              </IconButton>,
            )}
          </ListItem>

          <ListItem>
            {this.renderLogoutPopup(
              <IconButton>
                <FiLogOut />
              </IconButton>,
            )}
          </ListItem>
        </HeaderIcons>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)
