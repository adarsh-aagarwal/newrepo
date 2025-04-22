import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  HomePage from "./Components/HomePage"
import ArticlePage from "./Components/ArticlePage";
import "./App.css";
import SignUp from "./Components/SignUp"
import SignIn from "./Components/Signin";
import Layout from "./Components/LayOut";
import AddPostPage from "./Components/AddPostPage";
import Summarize from "./Components/Summarize";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Privacy from "./Components/Privacy";
import ProfileP from "./Components/ProfileP";
import SearchResults from "./Components/SearchResults";
import EditPage from "./Components/EditPage"
import UserProfile from "./Components/UserProfile"
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Signin" element={<SignIn/>}/>
          <Route path="/profile" element={<ProfileP />} />
          {/* <Route path="/ArticlePage" element={<ArticlePage/>}/> */}
          <Route path="/AddPostPage" element={<AddPostPage/>}/>
          <Route path="/Summarize" element={<Summarize/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/edit-post/:postId" element={<EditPage />} />
          <Route path="/summary" element={<Summarize />} />
          <Route path="/UserProfile" element={<UserProfile/>}/>
        </Route>
      </Routes>
     
    
  );
}

export default App;
