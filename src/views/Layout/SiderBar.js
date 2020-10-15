import React, { Component } from 'react';
import { Link } from "react-router-dom";
import router from '../../routers/router';
import './SiderBar.css';
import reactLogo from '../../assets/images/reactLogo.svg';
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
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
                <Menu onClick={this.handleClick} mode="inline" theme="dark">
                    {router.map((route) => {
                        if (route.routes) {
                            return (<SubMenu key={route.path} icon={<AppstoreOutlined />} title={route.name}>
                                {route.routes.map((childrote) => (
                                    <Menu.Item key={childrote.path}>
                                        <Link to={childrote.path}>{childrote.name}</Link>
                                    </Menu.Item>
                                ))}
                            </SubMenu>)
                        } else {
                            return (
                                <Menu.Item key={route.path} icon={<AppstoreOutlined />}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Menu.Item>
                            )
                        }
                    })}
                </Menu>
                <div className="collapseBox" onClick={this.toggleCollapsed}>
                    {this.state.collapsed ? <MenuUnfoldOutlined className="collapseIcon" /> : <MenuFoldOutlined className="collapseIcon" />}
                </div>
            </Sider >
        );
    }
}

export default SiderBar;