import React, { Component } from 'react';
import SiderBar from './SiderBar';
import HeaderBar from './HeaderBar';
import ContentArea from './ContentArea';
import { Layout } from 'antd';
class LayoutIndex extends Component {
    render() {
        return (
            <Layout>
                <SiderBar />
                <Layout>
                    <HeaderBar />
                    <ContentArea />
                </Layout>
            </Layout>
        );
    }
}

export default LayoutIndex;