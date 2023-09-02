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
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);  }
`;

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
`;

