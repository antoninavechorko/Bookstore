import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styled from 'styled-components';

export const SliderWrapper = styled.div``;

export const ArrowForwardStyled = styled(ArrowForward)`

    font-size: 0;
    line-height: 0;
    right: -25px;
    position: absolute;
    top: 28%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
  

    cursor: pointer;
    &:hover{
      border: solid 1px grey;
      border-radius: 50%;
       
    }`;

export const ArrowBackStyled = styled(ArrowBack)`

    font-size: 0;
    line-height: 0;
    left: -25px;
    position: absolute;
    top: 30%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
   
    cursor: pointer;

    &:hover{
        border: solid 1px grey;
      border-radius: 50%;
      
    }`;