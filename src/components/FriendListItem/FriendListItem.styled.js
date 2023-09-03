import { styled } from 'styled-components';

export const Item = styled.li`
  padding: 20px 0;
  display: flex;
  align-items: center;
  width: 400px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  margin-bottom: 25px;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`
export const Status = styled.span`
background: ${props => props.color};
  width: 30px;
  height: 100px;
  border-radius: 10px 0 0 10px;
`
export const Img = styled.img`
  margin-left: 30px;
`
export const Name = styled.p`
margin-left: 30px;
  font-size: 24px;
  font-weight: bold;
  color: gray;
`
