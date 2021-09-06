import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const Header = styled.header`
    display: flex;
    border-bottom: thin solid #999;
`;

const BrandLink = styled(Link)`
    padding: 1rem;
`;

const List = styled.ul`
`;

const Item = styled.li`
    border-bottom: 4px solid ${props => props.current ? "#BCF87F" : "transparent"};
    transition: border-bottom .5s linear;
`;


const SLink = styled(Link)`
    color: #222;
    padding: 1rem;
    display: inline-block;
    &:hover{
        background-color: yellow;
        color: black;
    }
`;

const SHeader = ({location: {pathname}}) => (
    <Header>
        <BrandLink to="/">사랑합니다</BrandLink>
        <List>
            <Item current={pathname === "/projects"}><SLink to="/projects">Projects</SLink></Item>
        </List>
    </Header>
);


export default withRouter(SHeader);
