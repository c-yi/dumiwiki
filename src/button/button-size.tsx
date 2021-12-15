// demos/demo-basic.tsx
import React from 'react';
import {Button, Space} from 'antd';
import {BaseButtonProps} from "./types";

const ButtonSize: React.FC<BaseButtonProps> = (props) => <Space wrap>
  <Button size='large'>large</Button>
  <Button size='middle'>middle</Button>
  <Button>default</Button>
  <Button size='small'>small</Button>
</Space>;

export default ButtonSize
