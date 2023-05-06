import styled from '@emotion/styled';

export const StyledContactsList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
`;

export const StyledContactsItem = styled.li`
  max-width: 250px;
  min-width: 20%;
  flex: 20%;
  background-color: white;
  padding: 10px 15px 20px 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 10px;
  transition: 300ms;
  @media (max-width: 767.98px) {
    flex: 40%;
    max-width: 70%;
  }
  &:hover {
    scale: 1.04;
  }
`;
export const StyledContactsImage = styled.img`
  width: 100%;
  height: auto;
  background: red;
`;

export const StyledContactText = styled.p`
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
  font-size: 18px;
  padding-bottom: 5px;
  text-align: center;
  margin: 0;
  vertical-align: middle;
  margin-bottom: 10px;
`;

export const StyledContactsButton = styled.button`
  font-size: 16px;
  width: 70%;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(to right, yellow, #40e495, #30dd8a, yellow);
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
