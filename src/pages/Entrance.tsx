import * as React from 'react';
import { Button, Upload  } from 'antd';

interface IEntranceProps {
    text: string
}

const Entrance: React.FunctionComponent<IEntranceProps> = (props) => {
  return (
    <Upload>
    <Button>{props.text}</Button>

  </Upload>
  );
};

export default Entrance;