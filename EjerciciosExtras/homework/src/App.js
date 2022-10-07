import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import UserPosts from "./components/UserPosts/UserPosts";
import CommentsPost from "./components/CommentsPost/CommentsPost";
function App() {
  return (
      <React.Fragment>
        <NavBar />
        <Route path='/' component={Buscador}/>
        <Route path='/filter/posts' component={UserPosts}/>
        <Route path='/users/:id/posts' component={UserPosts}/>
        <Route path='/user/:userid/post/:id/coments' component={CommentsPost}/>
      </React.Fragment>
  )
}

export default App
