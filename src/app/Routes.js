import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { Contact } from "../pages/Contact/Contact";
import { About } from "../pages/About/About";
import { Socialicons } from "../components/SocialIcons/SocialIcons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 2000,
        exit: 2000,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
