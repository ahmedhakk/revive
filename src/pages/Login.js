import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledHeader = styled.h3`
  text-align: center;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledHeader>Log in to your account</StyledHeader>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
