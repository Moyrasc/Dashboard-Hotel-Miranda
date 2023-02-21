import styled, {css} from "styled-components";


const Container = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0rem 4.3rem 0rem 1rem;
   margin: 1rem auto;
`;

const Nav = styled.nav`
   display: flex;
`;

const Ul = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const Text = styled.p`
   color: #393939;
   font-family: var(--font-poppins);
   font-size: 16px;
`;
const LiNext = styled.li`
`;

const LiNextBtn = styled.button`
  display: block;
  padding: 0.5rem 0.5rem;
  color: #135846;
  border: 1px solid #135846;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-family: var(--font-poppins);
  font-size: 1rem;
  transition: all 0.3s;
  width: 50px;
  margin-left: 5px;
  :hover {
    background-color: #135846;
    opacity: 0.5;
    color: white;
  }
  svg {
    height: 1rem;
    width: 2rem;
    fill: currentColor;
  }
`;

const LiPageNumber = styled.li``;

const LiPageBtn = styled.button`
  ${(props) => {
    switch (props.$type) {
      case "currentPage":
        return css`
          background-color: #135846;
          color: white;
        `;
      case "notCurrentPage":
        return css`
          background-color: transparent;
          color: #393939;
          :hover {
            background-color: #135846;
            opacity: 0.5;
            color: white;
          }
        `;
      default:
        return css``;
    }
  }}
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 8px;
  font-family: var(--font-poppins);
  font-size: 14px;
  transition: all 0.3s;
  margin-left:5px;
`;

export{
  Container,
  Nav,
  Ul,
  LiNextBtn,
  LiNext,
  LiPageBtn,
  LiPageNumber,
  Text,

}