import { styled } from 'styled-components';

export const List = styled.ul`
//display: flex;
  list-style: none;
`
export const Img = styled.img`
  width: 50px;
`

export const Status = styled.div`
background: ${props => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;

`
