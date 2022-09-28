import React from 'react';

export default function App() {
  return (
    <div className="container">
      <div className="avatar"></div>
      <div className="titulos">
        <h1>Carlos Alexandre</h1>
        <h2>Developer front-end | ReactJs | HTML5 | CSS3 | Java</h2>
      </div>

      <nav className="nav-list">
        <ul>
          <a href="#">
            <li>
              <img
                src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                alt="instagram"
              />
            </li>
          </a>
          <a href="#">
            <li>
              <img
                src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
                alt="gmail"
              />
            </li>
          </a>
          <a href="https://github.com/AlexandreLima658" target="_blank">
            <li>
              <img
                src="https://img.shields.io/badge/-Github-%230077B5?style=for-the-badge&logo=github&logoColor=white"
                alt="git"
              />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-alexandre-lima-da-silva-06b7221a4/"
            target="_blank"
          >
            <li>
              <img
                src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="linkedin"
              />
            </li>
          </a>
        </ul>
      </nav>
    </div>
    
  );
}
