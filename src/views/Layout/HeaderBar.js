import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './HeaderBar.css';
const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"><LogoutOutlined /><span className="logout">退出登录</span></a>
        </Menu.Item>
    </Menu>
);
class HeaderBar extends Component {
    render() {
        return (
            <Header className="headerBox">
                <Dropdown overlay={menu}>
                    <div className="iconBox">
                        <Avatar className="userIcon" size={30} icon={<UserOutlined />} />
                        <span className="userName">潘世豪</span>
                    </div>
                </Dropdown>
            </Header>
        );
    }
}

export default HeaderBar;