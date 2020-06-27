import React, { useState, useMemo } from "react";
import Proptypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const style = useMemo(() => ({ verticalAlign: "middle" }), []);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search style={style} enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}><a href="#" target="_blank" rel="noreferrer noopener">Made by jaewon</a></Col>
            </Row>


        </div>
    )
};

AppLayout.propTypes = {
    children: Proptypes.node.isRequired,
}
export default AppLayout;