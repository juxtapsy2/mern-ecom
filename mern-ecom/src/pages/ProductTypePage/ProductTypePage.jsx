import React from 'react'
import { VerticalNavBar } from '../../components/VerticalNavBar/VerticalNavBar'
import { CardComponent } from '../../components/Card/Card'
import { Col, Row } from 'antd'

export const ProductTypePage = () => {
  return (
    <Row style={{padding: ' 120px', background: '#efefef', flexWrap: 'nowrap'}}>
        <Col span={4} style={{background: '#fff', marginRight: 10, padding: 10, borderRadius: 6}}>
            <VerticalNavBar />
        </Col> 
        <Col span={20}>
            <CardComponent />   
        </Col>
    </Row>
  )
}
