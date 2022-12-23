import { Link, routes } from "@redwoodjs/router"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const BlogLayout = ({ children }) => {
  return <>
  <header>
    <Tabs variant='enclosed'>
    <TabList>
      <Tab><Link to={routes.home()}>Redwood Blog</Link></Tab>
      <Tab><Link to={routes.about()}>Redwood Blog</Link></Tab>
    </TabList>
    </Tabs>
    {/* <nav>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
          <Link to={routes.about()}>About</Link>
        </li>
      </ul>
    </nav> */}
  </header>
  <main>{children}</main>
</>
}

export default BlogLayout
