// demos/index.tsx
import React from 'react';
import {Space} from 'antd'
import ButtonSize from './button-size';
import ButtonType from './button-type';
import ButtonBlock from './button-block';
import ButtonShape from './button-shape';
import 'antd/dist/antd.css';


export default () => {
  return (
    <Space wrap size={[20,10]}>
      按钮尺寸
      <ButtonSize/>
      按钮类型
      <ButtonType/>
      DemoBlock
      <ButtonBlock/>
      按钮形状
      <ButtonShape/>
    </Space>
  );
}
