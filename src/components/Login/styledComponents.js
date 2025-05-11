import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.form`
  width: 30%;
  padding: 20px 35px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const WebsiteLogo = styled.img`
  height: 35px;
  margin-bottom: 25px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

export const InputLabel = styled.label`
  color: #475569;
  font-weight: 400;
`

export const UsernameInput = styled.input`
  height: 40px;
  padding: 5px;
  border: 1px solid #e2e8f0;
  outline: none;
  margin-bottom: 15px;
`

export const PasswordInput = styled.input`
  height: 40px;
  padding: 5px;
  border: 1px solid #e2e8f0;
  outline: none;
  margin-bottom: 8px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 10px;
  align-self: stretch;
  margin-top: 15px;
  border-radius: 6px;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  align-self: flex-start;
`
