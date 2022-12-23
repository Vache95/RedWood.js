import { Router, Route, Set } from '@redwoodjs/router'
import BlogLayout from './layouts/BlogLayout/BlogLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogLayout}>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
