import React from 'react';
import {ProductType} from '../../components/ProductType/ProductType';
import { ButtonWrapper, ProductTypeWrapper } from './styles';
import {ImageSlider} from '../../components/Slider/Slider';
import {productList} from '../../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardComponent } from '../../components/Card/Card';
import { VerticalNavBar } from '../../components/VerticalNavBar/VerticalNavBar';
import { Button } from 'antd';

export default function HomePage() {
    return (
        <div id="container" style={{padding: '0 120px', backgroundColor: '#efefef', height: 1000, maxWidth: '100%'}}>
            <ProductTypeWrapper>
            {productList.map((product) => (<ProductType name={product} key={product} />))}
            </ProductTypeWrapper>
            <ImageSlider />
            <div style={{marginTop: 20, display: 'flex', alignItems: 'center', gap: 30}}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
            <div id="button-more" style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10}}>
                <ButtonWrapper type='outlined' 
                    style={{fontWeight: 500, border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)', width: 240, height: 38, borderRadius: 4}}
                >
                    More
                </ButtonWrapper>
            </div>
        </div>
        
    )
}