import styled from 'styled-components';
import {Button} from 'antd';

export const ProductTypeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom: 1px solid rgb(26, 148, 255);
    height: 44px;
`;

export const ButtonWrapper = styled(Button)`
    &:hover {
        background-color: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`;