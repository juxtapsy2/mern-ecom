import React from 'react'
import { ContentWrapper, LabelTextWrapper, TextValueWrapper } from './styles';
import { productList } from '../../constants';
import { Checkbox } from 'antd';

export const VerticalNavBar = () => {

    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) => <TextValueWrapper>{option}</TextValueWrapper>);
            case 'checkbox':    
                return (
                    <Checkbox.Group style={{width: '100%'}}>
                        {options.map((option) =>
                            <Checkbox value={option} />
                        )}
                    </Checkbox.Group>    
                )
            default:
                return;
        }
    }
    return (
        <div>
            <LabelTextWrapper>Label</LabelTextWrapper>
            <ContentWrapper>
                {renderContent('text', productList)}
                {renderContent('checkbox', productList)}
            </ContentWrapper>
            
        </div>
    )
}
