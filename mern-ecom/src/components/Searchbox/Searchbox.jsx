import React from 'react';
import {Input, Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

export const Searchbox = (props) => {
  const {size, placeholder, buttonText, bgInput, bgButton='rgb(13,92,182)', buttonTextColor='#fff'} = props;

  return (
    <div style={{display: 'flex',}}>
      <Input 
        style={{border: 'none', borderRadius: 0, borderTopLeftRadius: 5, borderBottomLeftRadius: 5,
          backgroundColor: bgInput,
        }} 
        size={size} 
        placeholder={placeholder}>
      </Input>
      <Button 
        style={{border: 'none', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5,
          backgroundColor: bgButton,
          color: buttonTextColor,
        }} 
        size={size} 
        icon={<SearchOutlined style={{color: buttonTextColor}}/>}>
          {buttonText}
      </Button>
    </div>
  )
}
