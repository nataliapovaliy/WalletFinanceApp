import styled from 'styled-components';

export const ContainerModal = styled.div`
z-index:1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  @media screen and (max-width: 768px){
    background-color:rgba(0, 0, 0, 0);
}
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const ContentModal = styled.div`
  padding: 20px;
  width: 540px;
  z-index:1001;
  /* height: 508px; */
  border-radius: 20px;
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s all;
  @media screen and (max-width: 768px){
    margin-top: 200px;
width: 100vw;
height: 100vh;
}
  &.active {
    transform: scale(1);
  }
`;
export const SvgClose = styled.svg`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
export const SvgData = styled.svg`
  position: absolute;
  
    
    margin-left: 300px;
    @media screen and (max-width: 768px){
      margin-top: 50px;
   margin-left: 200px;
}
`;



