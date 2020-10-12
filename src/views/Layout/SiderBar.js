import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;
class SiderBar extends Component {
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <Sider>
                <Menu
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
            </Sider>
        );
    }
}

export default SiderBar;