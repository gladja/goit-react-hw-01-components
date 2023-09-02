import { styled } from 'styled-components';

export const Section = styled.section`
text-align: center;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  background: #ececec;
`
export const Title = styled.h2`
text-transform: uppercase;
  color: gray;
`

export const List = styled.ul`
  width: 500px;
  //height: 100px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ececec;
  border-radius: 0 0 10px 10px;

`
export const Item = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 32px;
  background: ${props => props.color};
  transition: all ease 0.2s;

  &:first-child {
    border-radius: 0 0 0 10px;
  }

  &:last-child {
    border-radius: 0 0 10px 0;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`
export const Label = styled.span`
font-weight: bold;
  margin-bottom: 10px;
  color: white;
`
export const Percentage = styled.span`
  font-size: 20px;
  color: white;
`
