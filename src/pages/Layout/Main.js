import "./Main.scss";

import React from "react";
import { Layout } from "antd";

import { Row } from "components";
import Sidebar from "pages/Views/Siderbar";
import ContentHeader from "pages/Modules/Header/Header";

const { Content } = Layout;

const Main = ({ children }) => {
  return (
    <Layout>
      <Row>
        <Sidebar />
        <Layout className="content__wrapper">
          <ContentHeader />
          <Content>
            <Row>{children}</Row>
          </Content>
        </Layout>
      </Row>
    </Layout>
  );
};

Main.propTypes = {
  children: React.ReactNode,
};

export default Main;
