import React from 'react';
import { Col } from 'antd';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import {NavWrapper, NavText, AccountWrapper, AccountSubwrapper, AccountText} from './NavWrappers';
import {Searchbox} from '../Searchbox/Searchbox';

export const NavBar = () => {  
  return (
    <div>
        <NavWrapper>
            <Col span={4}><NavText>BilleCOM</NavText></Col>
            <Col span={12}>
              <Searchbox size='medium' placeholder="Type something" buttonText="Search"  />
            </Col>
            <Col span={8} id="login_section">
              <AccountWrapper>
                <UserOutlined style={{fontSize: 30, color: '#fff'}} />
                  <div>
                    <AccountSubwrapper>
                      <AccountText>Login/Sign-up</AccountText>
                    </AccountSubwrapper>
                    <AccountSubwrapper>
                      <AccountText>Account</AccountText>
                      <CaretDownOutlined />
                    </AccountSubwrapper>
                  </div>
              </AccountWrapper>
              <AccountWrapper>
                <ShoppingCartOutlined style={{fontSize: 30, color: '#fff'}} />
                <span>Cart</span>
              </AccountWrapper>     
            </Col>
        </NavWrapper>
    </div>
  )
};
