import React from 'react';

type Props = {
  name: string,
  value: number,
  index: number,
  children: JSX.Element
}

export default function TabPanel(props: Props) {
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
}
