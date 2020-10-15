import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import router from '../../routers/router';
import { Layout } from 'antd';
const { Content } = Layout;
class ContentArea extends Component {
    render() {
        return (
            <Content>
                <Switch>
                    {router.map((route, index) => {
                        if (route.routes) {
                            return (
                                <Route key={index} path={route.path} exact={route.exact} >
                                    {route.routes.map((childrote, inde) => (
                                        <Route key={inde} path={childrote.path} exact={childrote.exact} children={<childrote.component />} />
                                    ))}
                                </Route>
                            )
                        } else {
                            return (
                                <Route key={index} path={route.path} exact={route.exact} children={<route.component />} />
                            )
                        }
                    })}
                </Switch>
            </Content>
        );
    }
}

export default ContentArea;
