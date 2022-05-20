import './App.css';
import React, {useEffect, useState} from 'react';
import { getAllStudent } from "./client";
import {Layout, Menu, Breadcrumb, Table, Spin} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import Empty from "antd/es/empty";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
    const [students, setStudents] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [fetching, setFetching] = useState(true);

    const fetchStudents = () =>
        getAllStudent()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
                setFetching(false);
            });

    useEffect(() => {
        console.log("component is mounted");
        fetchStudents();
    }, []);

    const renderStudents = () => {
        if(fetching){
            return <Spin indicator={antIcon} />
        }
        if(students.length <= 0){
            return <Empty />;
        }
        return <Table
            dataSource={students}
            columns={columns}
            bordered
            title={() => 'Students'}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            rowKey={(student) => student.id}
        />;
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} defaultselectedkeys={['1']} onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark"  mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {renderStudents()}
                    </div>
                </Content>static
                asset-manifest.json
                favicon.ico
                index.html
                logo192.png
                logo512.png
                manifest.json
                robots.txt
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    By Dmitrii ©2021
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
