import styled from "styled-components";
import {Link} from "react-router-dom";
import Home from "../../Routes/Home";
const Header = styled.header`
    display: flex;
    border-bottom: thin solid #999;
`;

const BrandLink = styled(Link)`
    padding: 1rem;
`;

const List = styled.ul`
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

const SHeader = () => (
    <Header>
        <BrandLink to="/">사랑합니다</BrandLink>
        <List>
            <li><SLink to="/projects">Projects</SLink></li>
        </List>
    </Header>
);


export default SHeader;