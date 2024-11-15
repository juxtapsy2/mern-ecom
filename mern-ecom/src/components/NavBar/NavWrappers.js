import {Row} from 'antd';
import styled from 'styled-components';

export const NavWrapper = styled(Row) `
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    align-items: center;
`;

export const NavText = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    width: fit-content;
`;

export const AccountWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 12px;
    padding: 5px 50px;
`;
export const AccountText = styled.span`
    display: block;
    min-width: fit-content;
`
export const AccountSubwrapper = styled.div`
    display: flex;
`;