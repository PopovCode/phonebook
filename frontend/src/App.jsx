import React, { useState } from "react";
import {
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";

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
  // getItem('ЭЧК', '1', <PieChartOutlined />),
  // getItem('ЭЧЭ', '2', <DesktopOutlined />),
  getItem("ЭЧК", "sub1", <UserOutlined />, [
    getItem("ЭЧК 1", "1"),
    getItem("ЭЧК 2", "2"),
    getItem("ЭЧК 3", "3"),
    getItem("ЭЧК 4", "4"),
    getItem("ЭЧК 5", "5"),
    getItem("ЭЧК 6", "6"),
    getItem("ЭЧК 7", "7"),
    getItem("ЭЧК 8", "8"),
    getItem("ЭЧК 9", "9"),
    getItem("ЭЧК 11", "11"),
    getItem("ЭЧК 12", "12"),
  ]),
  getItem("ЭЧЭ", "sub2", <HomeOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("ЭЧС", "sub3", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Typography.Title
          level={5}
          style={{ color: "#fff", textAlign: "center" }}
        >
          Телефонная книга ЭЧ-4
        </Typography.Title>

        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginTop: 30,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
