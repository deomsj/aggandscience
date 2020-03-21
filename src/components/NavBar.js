import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PieChartIcon from '@material-ui/icons/PieChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import GridOnIcon from '@material-ui/icons/GridOn';

const NavBar = () => {
  let { pathname } = useLocation();
  const [value, setValue] = React.useState(pathname);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      className='nav-bar'>
      <BottomNavigationAction
        component={Link}
        to='/'
        label='Table'
        value='/'
        icon={<GridOnIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to='/pie'
        label='Pie'
        value='/pie'
        icon={<PieChartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to='/scatter'
        label='Scatter'
        value='/scatter'
        icon={<BubbleChartIcon />}
      />
    </BottomNavigation>
  );
};

export default NavBar;
