import React from 'react';
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CardWrapper, DiscountWrapper, PriceWrapper, ProductName, RatingWrapper } from './styles';
import {StarFilled} from '@ant-design/icons';
import {slides} from '../../constants';

export const CardComponent = () => {
  return (
    <CardWrapper
        hoverable
        style={{width: 200}} //Custom the whole card
        styles={{body: {padding: 12, border: 'none' }, header: {width: 200, height: 200}}} //Custom parts of the card
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        <img src={slides[1]} alt="official icon" style={{width: 24, height: 24, position: 'absolute', top: 0, left: 0, }}></img>
        <ProductName>Iphone 14 XS</ProductName>
        <RatingWrapper>
            <span>
                <span>4.5 <StarFilled style={{fontSize: 10, color: 'orangered'}}/></span>
            </span>
            <span> |  Sold</span>
        </RatingWrapper>
        <PriceWrapper>1.000.000 VND <DiscountWrapper>-15%</DiscountWrapper></PriceWrapper>
    </CardWrapper> 
  )
}
