import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Loading = styled.p`
  font-size:30rem;
  color: red;
`
export const RepoLink = styled.a`
  display: block;
  min-width: 770px;
`

export const Card = styled.div`
  position: relative;
  padding: 40px;
  font-size: 1.5rem;
  border-radius: 2
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);  margin: 16px 0;
  margin: 8px 0;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

export const User = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Avater = styled.img`
  min-width: 120px;
  min-height: 120px;
  border-radius: 200px;
  overflow: hidden;
  margin-right: 24px;
`

export const UserName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`

export const Content = styled.div`
  width: 70%;
`

export const Sub = styled.div`
  color: rgba(0, 0, 0, 0.54);
  display:flex;
`
export const SubDesc = styled.div`
  color: rgba(0, 0, 0, 0.54);
  display:flex;
  :nth-child(odd) {
    margin-right: 16px;
    border-right: 1px solid #bbb;
  }
`

export const SubDescHeader = styled.p`
  display:flex;
`

export const SubDescText = styled.p`
  margin : 0 16px 0 8px;
`

export const RepoDesc = styled.p`
  color: rgba(0, 0, 0, 0.54);
`

export const RepoHeader = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #bbb;
`

export const RepoName = styled.h4`
  font-size: 1.3rem;
`

export const RepoStar = styled.p`
  font-size: 0.7rem;
  position: absolute;
  top: 20px;
  right: 20px;
`

export const RepoLang = styled.span`
  margin-left: 8px;
  padding: 4px;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.54);
`

export const BackButton = styled(Link)`
  text-decoration: none;
  color: #2196f3;
  padding: 6px 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`