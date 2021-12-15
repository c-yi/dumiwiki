import React from 'react';
import {Button,Space} from 'antd';

import {BaseButtonProps} from "./types";


const ButtonType: React.FC<BaseButtonProps> = (props) => <Space wrap>
  <Button type='primary'>primary</Button>
  <Button type='ghost'>ghost</Button>
  <Button type='dashed'>dashed</Button>
  <Button type='link'>link</Button>
  <Button type='text'>text</Button>
  <Button type='default'>default</Button>
</Space>;

export default  ButtonType



