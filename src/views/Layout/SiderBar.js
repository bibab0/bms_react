import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './SiderBar.css';
import reactLogo from '../../assets/images/reactLogo.svg';
const { SubMenu } = Menu;
const { Sider } = Layout;
class SiderBar extends Component {
    state = {
        collapsed: false
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <Sider collapsed={this.state.collapsed} collapsedWidth="48">
                <div className="logoBox">
                    <img src={reactLogo} alt="logo" />
                    {this.state.collapsed ? '' : <span>BMS-REACT</span>}
                </div>
                <Menu
                    className="menuBox"
                    onClick={this.handleClick}
                    mode="inline"
                    theme="dark"
                >
                    <SubMenu
                        title={
                            <span>
                                <MailOutlined />
                                <span>导航一</span>
                            </span>
                        }
                    >
                        <Menu.Item>Option 1</Menu.Item>
                        <Menu.Item>Option 2</Menu.Item>
                        <Menu.Item>Option 3</Menu.Item>
                        <Menu.Item>Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu icon={<AppstoreOutlined />} title="导航二">
                        <Menu.Item>Option 5</Menu.Item>
                        <Menu.Item>Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span>
                                <SettingOutlined />
                                <span>导航三</span>
                            </span>
                        }
                    >
                        <Menu.Item>Option 9</Menu.Item>
                        <Menu.Item>Option 10</Menu.Item>
                        <Menu.Item>Option 11</Menu.Item>
                        <Menu.Item>Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="collapseBox" onClick={this.toggleCollapsed}>
                    {this.state.collapsed ? <MenuUnfoldOutlined className="collapseIcon" /> : <MenuFoldOutlined className="collapseIcon" />}
                </div>
            </Sider>
        );
    }
}

export default SiderBar;