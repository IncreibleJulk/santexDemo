import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Types';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1px;
  height: 160px;
  background-color: white;
  width: 100%;
`;

const CardImage = styled.div`
  width: 160px;
  height: 160px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 15px;
  height: 160px;
  width: 100%;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3;
  margin: 5px 0 0 0px;
`;

const Subtitle = styled.span`
  color: #616161;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 10px;  
`;

const Description = styled.div`
  color: #616161;
  margin-bottom: 10px;
  margin-right: 10px;  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export function Card(props: CardProps) {
  return (
    <CardContainer>
      <CardImage><img src={props.imageSource} title={props.title} height={160} width={160}/></CardImage>
      <CardContent>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Description title={props.description} >{props.description}</Description>
        <CardActions>
          {props.children}
        </CardActions>
      </CardContent>
    </CardContainer>
  );
}