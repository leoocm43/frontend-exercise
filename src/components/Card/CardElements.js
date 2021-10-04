import styled from 'styled-components';


export const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`
export const DogImage = styled.img`
    width: 100% auto;
    height: 100%;
    object-fit: cover;
    border: ${ (props) => '1px solid ${props.theme.border.cool}'};
`
