import React, { useEffect, useState } from 'react'
import './styles.css';
import axios from 'axios';


export default function Github() {
  const [userGit, setUserGit] = useState([])
  const [projects, setProjects] = useState([])
  const [errorMsg, setErrorMsg] = useState("")


  useEffect(() => {
    getApigit()
    getApiGitRepos()
  }, [])

  function getApigit() {
    axios.get('https://api.github.com/users/lucasrosendo', {
    })
      .then(function (response) {
        setUserGit(response.data)
      })
      .catch(function (error) {
        setErrorMsg("Github fora de serviço!")
      });
  }

  function getApiGitRepos() {
    axios.get('https://api.github.com/users/lucasrosendo/repos', {
    })
      .then(function (response) {
        setProjects(response.data)
      })
      .catch(function (error) {
        setErrorMsg("Github fora de serviço!")
      });
  }

  return (
    <div className='github-container'>
      <div className="github-content">
        <h2>Github</h2>
        <div className="github-itens">
          <div className="github-avatar">
            <img src={userGit.avatar_url} alt="foto" />
            <h3>{userGit.name}</h3>
            <h4>{userGit.login}</h4>
            <p>{userGit.bio}</p>
          </div>
          <div className="github-list-projects">
            {
              projects.slice(0, 4).map((project) =>
                <div key={project.id} className="projects">
                  <a href={project.html_url} target='_blank' rel='noreferrer'>
                    <h3>{project.name}</h3>
                  </a>
                  <p>{project.description}</p>
                </div>
              )
            }

          </div>
          <p>{errorMsg}</p>

        </div>

      </div>

      <div>
        <a href="https://github.com/lucasrosendo" target='_blank' rel='noreferrer'>
          <button className='git-button'>Todos os projetos</button>
        </a>
      </div>
    </div>
  )
}
