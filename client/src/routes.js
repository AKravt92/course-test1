import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/Auth.Page'
import { MainPage } from './pages/Main.Page'
import { StoryPage } from './pages/Story.Page'
import { CabPage } from './pages/Cab.Page'
import { CreateChapterPage } from './pages/CreateChapter.Page'
import { CreateStoryPage } from './pages/CreateStory.Page'
import { DetailPage} from './pages/DetailPage'
import { DetailPageStory} from './pages/DetailPageStory'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Switch>
                <Route path="/main" exact>
                    <MainPage />
                </Route>
                <Route path="/story" exact>
                    <StoryPage />
                </Route>
                <Route path="/createStory" exact>
                    <CreateStoryPage />
                </Route>
                <Route path="/createChapter" exact>
                    <CreateChapterPage />
                </Route>
                <Route path="/cab" exact>
                    <CabPage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Route path="/story/:id">
                    <DetailPageStory />
                </Route>
                <Redirect to="/main" />
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/story" exact>
                    <StoryPage />
                </Route>
            <Route path="/" exact>
                    <MainPage />
            </Route>
            <Route path="/auth">
                <AuthPage />
            </Route>
            <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Route path="/story/:id">
                    <DetailPageStory />
                </Route>
            <Redirect to="/" />
        </Switch>
    )

}