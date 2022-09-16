## Button

Demo:

```tsx
import React,{useRef} from 'react';
import { Button } from 'element-react';
import { Button  as Btn} from 'antd';
import "antd/dist/antd.css";
export default () => (
    <>
        
        <Button>默认按钮</Button>
        <Button type='primary'>默认按钮</Button>
        <Button type='success'>默认按钮</Button>
        <Button type='warning'>默认按钮</Button>
        <Button type='info'>默认按钮</Button>
        <Button type='danger'>默认按钮</Button>

        <br/>
        <Button plain>默认按钮</Button>
        <Button type='primary' plain>默认按钮</Button>
        <Button type='success'plain>默认按钮</Button>
        <Button type='warning'plain>默认按钮</Button>
        <Button type='info' plain>默认按钮</Button>
        <Button type='danger' plain>默认按钮</Button>

        <br/>
        <Button plain>默认按钮</Button>
        <Button type='primary' plain round>默认按钮</Button>
        <Button type='success'plain round>默认按钮</Button>
        <Button type='warning'plain round>默认按钮</Button>
        <Button type='info' plain round>默认按钮</Button>
        <Button type='danger' plain round>默认按钮</Button>
    </>
    );
```