import React from 'react'
import { ContentWrapper, LabelTextWrapper, TextValueWrapper } from './styles';
import { productList } from '../../constants';
import { Checkbox } from 'antd';

export const VerticalNavBar = () => {

    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) => <div><TextValueWrapper>{option}</TextValueWrapper></div>);
            case 'checkbox':    
                return (
                    <div>
                        <Checkbox.Group style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                            {options.map((option) =>
                                <Checkbox value={option} />
                            )}
                        </Checkbox.Group>   
                    </div> 
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
