import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const ColumnToggles = ({ allColumns, getToggleHideAllColumnsProps }) => {
  const toggleAllProps = getToggleHideAllColumnsProps();
  const { checked } = toggleAllProps;
  return (
    <div className='drawer' role='presentation'>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AllColumnsToggle {...toggleAllProps} />
          </ListItemIcon>
          <ListItemText
            id='toggle-all'
            primary={`${checked ? 'Hide' : 'Show'} All`}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        {allColumns.map(column => (
          <ListItem key={`${column.id}-li`} dense button>
            <ListItemIcon>
              <Checkbox
                tabIndex={-1}
                disableRipple
                color='primary'
                inputProps={{ 'aria-labelledby': `${column.id}-lit` }}
                {...column.getToggleHiddenProps()}
              />
            </ListItemIcon>
            <ListItemText id={`${column.id}-lit`} primary={column.id} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ColumnToggles;

const AllColumnsToggle = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <Checkbox
      tabIndex={-1}
      disableRipple
      color='primary'
      inputProps={{ 'aria-labelledby': 'toggle-all' }}
      ref={resolvedRef}
      {...rest}
    />
  );
});
