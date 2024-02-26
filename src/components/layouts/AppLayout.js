//AppLayout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, theme, Switch } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExperimentOutlined,
  FireOutlined,
  GithubOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const contentStyle = {
    margin: "24px 16px 0",
    padding: 24,
    minHeight: 280,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  const buttonStyle = {
    fontSize: "16px",
    width: 64,
    height: 64,
  };

  const headerStyle = {
    padding: 0,
    background: colorBgContainer,
  };

  const layoutStyle = {
    minHeight: "100vh",
  };

  const footerStyle = {
    textAlign: "center",
    color: "GrayText",
  };

  const menuItems = [
    {
      label: <Link to="/">New Event</Link>,
      icon: <ExperimentOutlined />,
      key: "1",
    },
    {
      label: "Open Events",
      icon: <FireOutlined />,
      key: "2",
      onClick: () => console.log(""),
    },
    {
      label: (
        <Link target="_blank" to="https://github.com/joaosgomes/MES4_PA_FE">
          GitHub
        </Link>
      ),
      icon: <GithubOutlined />,
      key: "3",
    },
  ];

  return (
    <Layout style={layoutStyle}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => setCollapsed(broken)}
      >
        <br />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={buttonStyle}
            size="small"
          />
          <Switch
            checkedChildren={<MoonFilled />}
            unCheckedChildren={<SunFilled />}
            size="small"
          />
        </Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>
          MES4_PA {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/joaosgomes"
            rel="noopener noreferrer"
            target="_blank"
          >
            Created by @joaosgomes
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
