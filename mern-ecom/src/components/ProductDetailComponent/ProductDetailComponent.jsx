import React from 'react';
import {Row, Col} from 'antd';

export const ProductDetailComponent = () => {
  return (
    <Row>
        <Col span={10}>
            <image src="" alt="product-image" preview="false"/>
            <div>
            </div>
        </Col>
        <Col span={14}>col-14</Col>
    </Row>
  )
}
