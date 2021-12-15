import React from 'react';
import {Button,Space} from 'antd';

import {DownloadOutlined} from '@ant-design/icons';
import {BaseButtonProps} from "./types";

const ButtonShape: React.FC<BaseButtonProps> = (props) =>
  <Space wrap>
    <Button type="primary" icon={<DownloadOutlined/>}/>
    <Button type="primary" shape="circle" icon={<DownloadOutlined/>}/>
    <Button type="primary" shape="round" icon={<DownloadOutlined/>}/>
    <Button type="primary" shape="round" icon={<DownloadOutlined/>}>Download</Button>
    <Button type="primary" icon={<DownloadOutlined />}>Download</Button>
  </Space>

export default ButtonShape



