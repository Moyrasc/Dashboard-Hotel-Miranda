import styled from 'styled-components'

const SwitchContainer = styled.div`
  & ul {
    display:flex;
    list-style: none;
    & li {
      padding: 13px 26px;
      font-size: 1rem;
      color: #6E6E6E;
      cursor:pointer;
      border-bottom: 1px solid grey;
    }
  }
  & .active {
    font-weight: bold;
    color: #135846;
    border-bottom: 2px solid #135846;
  }
`

export{
    SwitchContainer
}