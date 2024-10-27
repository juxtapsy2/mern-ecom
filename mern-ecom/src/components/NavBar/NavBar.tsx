import React from 'react'
import {Row, Col, Input} from 'antd';
import {NavWrapper, NavText} from './NavWrapper';
import type { GetProps } from 'antd';

const {Search} = Input;
type SearchProps = GetProps<typeof Input.Search>;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export const NavBar = () => {  
  return (
    <div>
        <NavWrapper>
            <Col span={6}><NavText>Bill  1</NavText></Col>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            <Col span={12}><NavText>Bill  2</NavText></Col>
            <Col span={6}><NavText>Bill  3</NavText></Col>
        </NavWrapper>
    </div>
  )
};
