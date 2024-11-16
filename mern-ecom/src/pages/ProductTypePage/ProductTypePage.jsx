import React from 'react'
import { VerticalNavBar } from '../../components/VerticalNavBar/VerticalNavBar'
import { CardComponent } from '../../components/Card/Card'
import { Pagination, Row, Col } from 'antd'
import { ProductsWrapper, VerticleNavBarWrapper } from './styles'

export const ProductTypePage = () => {
  const onChange = () => {

  }

  return (
    <div>
      <Row style={{padding: '0 120px', background: '#efefef', flexWrap: 'nowrap'}}>
          <VerticleNavBarWrapper span={4} style={{background: '#fff', marginRight: 10, padding: 10, borderRadius: 6}}>
              <VerticalNavBar />
          </VerticleNavBarWrapper> 
          <Col span={20}>
            <ProductsWrapper>
                <CardComponent />   
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
            </ProductsWrapper>
            <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange}
              style={{justifyContent: 'center', marginTop: 20}}
            />
          </Col>
      </Row>
      
    </div>
  )
}
