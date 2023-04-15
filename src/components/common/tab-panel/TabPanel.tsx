import React from 'react';

type TabPanelProps = {
  name: string,
  value: number,
  index: number,
  children: JSX.Element
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, name, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanel;