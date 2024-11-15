import React from 'react';
import {ProductType} from '../../components/ProductType/ProductType';
import { ProductTypeWrapper } from './styles';
import {ImageSlider} from '../../components/Slider/Slider';
import {productList} from '../../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardComponent } from '../../components/Card/Card';
import { VerticalNavBar } from '../../components/VerticalNavBar/VerticalNavBar';

export default function HomePage() {
    return (
        <div style={{padding: '0 120px', backgroundColor: '#efefef'}}>
            <ProductTypeWrapper>
            {productList.map((product) => (<ProductType name={product} key={product} />))}
            </ProductTypeWrapper>
            <ImageSlider />
            <div style={{marginTop: 20, display: 'flex', alignItems: 'center', gap: 20}}>
                <CardComponent />
            </div>
            <VerticalNavBar />
        </div>
        
    )
}