import styled from 'styled-components';
import {Card} from 'antd';

export const CardWrapper = styled(Card)`
    width: 200px;
    & img {
        width: 200px;
        height: 200px;
    }
`

export const ProductName = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61);
`
export const RatingWrapper = styled.div`
    display: flex;
    font-size: 11px;
    color: rgb(128,128,137);
    align-items: center;
`
export const PriceWrapper = styled.div`
    color: rgb(255,66,78);
    font-size: 16px;
    font-weight: 500;
`
export const DiscountWrapper = styled.span`
    color: rgb(255,66,78);
    font-size: 12px;
    font-weight: 500;
`