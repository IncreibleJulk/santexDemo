import React from 'react';
import styled  from 'styled-components';

const ButtonComponent = styled.button`
  float: left;
  background-color: ${props => (props.color === 'danger') ? 'red' : '#0276FF' };
  min-width: 100px;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  vertical-align: middle;
  white-space: nowrap;
  margin-right: 15px;
`
type buttonProps = {
  onClick: ()=>{};
  label: string;
  styles?: string;
}

export function Button(props: buttonProps) {

  return (
    <ButtonComponent onClick={props.onClick} color={props.styles}>{props.label} </ButtonComponent>
  )
}