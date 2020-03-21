import React from 'react';
import DrawerMui from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ColumnToggles from './ColumnToggles';

const Drawer = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <span>
      <Button onClick={toggleDrawer()}>Select Columns</Button>
      <DrawerMui anchor={'right'} open={isOpen} onClose={toggleDrawer()}>
        <ColumnToggles {...props} />
      </DrawerMui>
    </span>
  );
};

export default Drawer;
