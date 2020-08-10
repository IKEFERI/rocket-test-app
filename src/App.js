import React from 'react';
import logo from './logo.svg';
import './StyledApp';
import Footer from "./Components/Footer/Footer";
import PostsContainer from "./Components/Posts/PostsContainer";
import SearchForm from "./Components/Search/SearchForm/SearchForm";
import SearchResults from "./Components/Search/SearchResults/SearchResults";
import {AppHeader, AppLogo, Main, Section, StyledApp} from "./StyledApp";

function App() {
    return (
        <StyledApp>
            <AppHeader className="App-header">
                <AppLogo src={logo} className="App-logo" alt="logo"/>
                <h1>Rocket Test App</h1>
                <div>▼</div>
            </AppHeader>
            <Main>
                <h2>Users Posts</h2>
                <Section>
                    <SearchForm/>
                    <SearchResults/>
                </Section>
                <Section>
                    <PostsContainer/>
                </Section>
            </Main>
            <Footer/>
        </StyledApp>
    );
}

export default App;
