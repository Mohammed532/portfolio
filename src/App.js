import { HashRouter, Route } from 'react-router-dom'
import * as ROUTES from './utils/constants/routes'

import Home from './components/pages/Home/Home'
import Resume from './components/pages/Resume/Resume'
import Projects from './components/pages/Projects/Projects'
import Blog from './components/pages/Blog/Blog'

function App() {
    return (
        <HashRouter basename={ROUTES.HOME}>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.RESUME} component={Resume} />
            <Route exact path={ROUTES.PROJECTS} component={Projects} />
            <Route exact path={ROUTES.BLOG} component={Blog} />
        </HashRouter>
    );
}

export default App;
