import React from 'react'

import ReactDOM from 'react-dom'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export class TMS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
        this.onCollapse = (collapsed) => {
            console.log(collapsed);
            this.setState({ collapsed });
        }
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>时间管理</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>报表</span></span>}
                        >
                            <Menu.Item key="3">日报</Menu.Item>
                            <Menu.Item key="4">周报</Menu.Item>
                            <Menu.Item key="5">年度报表</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>项目</span></span>}
                        >
                            <Menu.Item key="6">全部项目</Menu.Item>
                            <Menu.Item key="8">项目分析</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>关于</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>报表</Breadcrumb.Item>
                            <Breadcrumb.Item>我的日报</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.!!!+++
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
          </Footer>
                </Layout>
            </Layout>
        );
    }
}

