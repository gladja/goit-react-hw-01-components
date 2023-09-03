import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 300px;
  display: flex;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  color: black;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`
export const Description = styled.div`
  padding: 20px;
  text-align: center;
`
export const Name = styled.p`
font-size: 20px;
  font-weight: bold;
`
export const Text = styled.p`
  font-size: 16px;
  color: gray;
`
export const Img = styled.img`
  width: 150px;
  border: 1px solid lightgray;
  border-radius: 50%;
`
export const List = styled.ul`
  padding: 0;
  width: 300px;
  height: 100px;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  color: gray;
  background: #ececec;
  border-radius: 0 0 10px 10px;
`
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 26px;
  border-right: 1px solid gray;

  &:last-child {
    border-right: 0;
  }
`
export const Quantity = styled.span`
  margin-top: 10px;
  font-weight: bold;
  color: black;
`
