import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`

export const LogoImage = styled.img`
  height: 30px;
`

export const HeaderLinks = styled.ul`
  display: flex;
  gap: 25px;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HeaderIcons = styled.ul`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    gap: 15px;
    align-items: center;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const ProfileImage = styled.img`
  height: 30px;
`

export const LogoutButton = styled.button`
  color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 6px 10px;
  background-color: transparent;
`

export const IconButton = styled.button`
  all: unset;
  color: black;
  font-size: 30px;
  font-weight: 500;
`
export const PopupContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  padding: 25px;
`
export const FilterPopupItemsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const CloseButtonContainer = styled.div`
  text-align: right;
`
export const CloseButton = styled.button`
  all: unset;
  text-align: right;
`
export const LogoutPopupContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const LogoutDetailsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 6px;
`
export const Text = styled.p`
  color: #00306e;
  margin-bottom: 15px;
`
export const LogoutCancelButton = styled.button`
  margin-right: 15px;
  border-radius: 2px;
  padding: 6px 12px;
  border: #7e858e 4px solid;
  border-width: 1px;
  color: #7e858e;
`
export const LogoutConfirmButton = styled.button`
  color: white;
  border-radius: 2px;
  background-color: #3b82f6;
  border-width: 0px;
  padding: 8px 12px;
`
export const LogoutButtonsContainer = styled.div`
  text-align: center;
`
