import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function Header() {

  const {setUserInfo, userInfo} = useContext(UserContext)

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
      })
    })

  }, []);

  function handleLogout(){
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null)
  }

  const username = userInfo?.username

  return (
    <header>
      <Link to="/" className="logo">
        My blog
      </Link>
      <nav>
        {username && (
          <>
          <span>Hello, {username}</span>
          <div className="post-btn">
          <Link to="create"> Create New Post</Link>
          <a onClick={handleLogout}>Logout</a>
          </div>
          </>
        )}
        {!username && (
          <>
          <div className="post-btn">
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
          </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
