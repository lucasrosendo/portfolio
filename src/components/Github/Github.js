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

  function filterProjects(projects) {
    if (projects.stargazers_count !== 0)
      return projects
  }

  var projectsFiltereds = projects.filter(filterProjects);
  projectsFiltereds.forEach(p => {
    console.log(p);
  })

return (
  <div className='github-container' id='portfolio'>
    <div className="github-content">
      <h2>GitHub</h2>
      <div className="github-itens">
        <div className="github-avatar">
          <img src={userGit.avatar_url} alt="foto" />
          <h3>{userGit.name}</h3>
          {/* <h4>{userGit.login}</h4> */}
          <p>{userGit.bio}</p>
        </div>
        <div className="github-list-projects">
          {
            projectsFiltereds.slice(0, 6).map((project) =>
              <div
                key={project.id}
                className="projects">
                <a
                  href={project.html_url}
                  target='_blank'
                  rel='noreferrer'>
                  <h3>{project.name}</h3>
                </a>
                <p>{project.description}</p>
              </div>
            )
          }

        </div>
        <p>{errorMsg}</p>

      </div>
      <div>
        <a href="https://github.com/lucasrosendo?tab=repositories" target='_blank' rel='noreferrer'>
          <button className='git-button'>Todos os projetos</button>
        </a>
      </div>
    </div>

  </div>
)
}
