import React from 'react';
import GlobalDefault from "./GlobalConfig";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Realtor from "./components/Realtor";
import Features from "./components/Features";
import StoryContent from "./components/StoryContent";
import StoryPicture from "./components/StoryPicture";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import styled from "styled-components";

const Layout = styled.div`
display: grid;
grid-template-rows: 80vh auto 40vw repeat(3, min-content);
grid-template-columns: 
[sidebar-start] 8rem [sidebar-end full-start] minmax(6rem,1fr) [center-start] repeat(8,[col-start] minmax(min-content,14.5rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end];

`;
function App() {
    return (
        <Layout>
            <GlobalDefault/>
            <Sidebar/>
            <Header/>
            <Realtor/>
            <Features/>
            <StoryPicture/>
            <StoryContent/>
            <Homes/>
            <Gallery/>
            <Footer/>
        </Layout>
    );
}

export default App;
