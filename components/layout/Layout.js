import MainNavigation from './MainNavigation';
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className={classes.layout}><main>{props.children}</main></div>
    </div>
  );
}

export default Layout;