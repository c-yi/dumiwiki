import React from 'react';
import {Button} from 'antd';

import {BaseButtonProps} from "./types";

const ButtonBlock: React.FC<BaseButtonProps> = (props) =>
  <>
    <Button type="primary" block>Primary</Button>

    <Button block>Default</Button>

    <Button type="dashed" block>Dashed</Button>

    <Button type="link" block>Link</Button>
  </>

export default ButtonBlock



