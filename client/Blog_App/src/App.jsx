import "./App.css";
import Post from './Components/Post'
import Layout from './Components/Layout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom"
import IndexPage from "./Pages/IndexPage";
import { UserContextProvider } from "./UserContext"
import CreatePost from "./Pages/CreatePost";
import PostPage from "./Pages/PostPage";
import EditPost from "./Pages/EditPost";

function App() {

  return (
    <UserContextProvider>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create" element={<CreatePost />}/>
        <Route path="post/:id" element={<PostPage />}/>
        <Route path="edit/:id" element={<EditPost />}/>
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
