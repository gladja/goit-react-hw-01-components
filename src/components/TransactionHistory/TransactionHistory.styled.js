import { styled } from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`
export const Thead = styled.tr`
  background: deepskyblue;
  border-radius: 10px 10px 0 0;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
`
export const Type = styled.th`
  padding: 15px;
  border-radius: 10px 0 0 0;
`
export const Amount = styled.td`
  padding: 10px;
`
export const Row = styled.tr`
  font-size: 14px;
  color: gray;
  transition: all ease 0.2s;

  &:nth-child(2n) {
    //background: lightgray;
    background: #ececec;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`
export const Currency = styled.th`
  border-radius: 0 10px 0 0;
`
