import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, HeaderRow, Textfield } from 'react-mdl';
import Main from './components/pages/main';
import { Link } from 'react-router-dom';

function App() {
  return (

    <div className="demo-big-content">
        <Layout>
            <Header waterfall className="header-color">
                <HeaderRow title="Title">
                    <Textfield
                        value=""
                        onChange={() => {}}
                        label="Search2"
                        expandable
                        expandableIcon="search"
                    />
                </HeaderRow>
                <HeaderRow>
                    <Navigation>
                        <Link to="/resume">Resumo</Link>
                        <Link to="/aboutme">Sobre mim</Link>
                        <Link to="/projects">Projetos</Link>
                        <Link to="/contact">Contato</Link>
                    </Navigation>
                </HeaderRow>
            </Header>
            <Drawer title="Title">
                <Navigation>
                <Link to="/resume">Resumo</Link>
                        <Link to="/aboutme">Sobre mim</Link>
                        <Link to="/projects">Projetos</Link>
                        <Link to="/contact">Contato</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
