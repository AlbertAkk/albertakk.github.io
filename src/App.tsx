import Home from './pages/Home'
import { Routes, Route, HashRouter } from 'react-router-dom'
import './styles.scss'
import Layout from './components/Layout'
import ProjectsComp from './pages/ProjectsComp'
import ProjectPage from './pages/ProjectPage'

export const App = () => {
  console.log('here')

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsComp />} />
          <Route path="projects/id/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
