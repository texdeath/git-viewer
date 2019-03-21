import styled from 'styled-components';


export const Loading = styled.p`
  font-size:30rem;
  color: red;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Card = styled.li`
  width: 320px;
  position: relative;
  margin: 8px 0;
  font-size: 1.5rem;
  border-radius: 2
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

export const Avater = styled.img`
  width: 120px;
  height: 120px;
  overflow: hidden;
`

export const UserName = styled.p`
  width: 200px;
  font-size: 1.5rem;
  text-align: center;
`