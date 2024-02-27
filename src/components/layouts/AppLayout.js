//AppLayout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, theme, Switch } from "antd";
import { getEventsHTML } from "../../controllers/EventController";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExperimentOutlined,
  FireOutlined,
  GithubOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const logoStyle = {
    height: "32px",
    margin: "16px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
  };

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

  const menuItems = [
    {
      label: <Link to="/MES4_PA_FE/new-event">New Event</Link>,
      icon: <ExperimentOutlined />,
      key: "1",
    },
    {
      label: "Open Events",
      icon: <FireOutlined />,
      key: "2",
      onClick: () => getEventsHTML(),
    },
    {
      label: (
        <Link target="_blank" to="https://github.com/">
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
        <Link to="/MES4_PA_FE/">
          <div style={logoStyle} className="demo-logo-vertical" />
        </Link>
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
            //checked={theme === "dark"}
            checkedChildren={<MoonFilled />}
            unCheckedChildren={<SunFilled />}
            size="small"
          />
        </Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
