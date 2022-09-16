import React, { Children } from 'react';
import  './index.less';
import classNames from 'classnames';

enum ButtonType  {
    DEFAULT='default',
    PRIMARY='primary',
    SUCCESS='success',
    WARNING='warning',
    INFO='info',
    DANGER='danger'

}

enum SizeType {
    SMALL='small',
    MIDDLE='middle',
    LARGE='large'
}

type ButtonProps = {
    children?:React.ReactNode,
    className?:string,
    type?:ButtonType,
    size?:SizeType,
    plain?:boolean,
    round?:boolean
}


const InternalButton:React.ForwardRefRenderFunction<any,ButtonProps> = (props,ref)=>{
    const {
        children,
        className,
        type = 'default',
        size= 'middle',
        plain,
        round
    } = props;
    const PREFIXCLS = 'btn';
    const classes = classNames(
        PREFIXCLS,
        {
            [`${PREFIXCLS}-${type}`]:type,
            [`${PREFIXCLS}-${type}-plain`]:type && plain,
            [`${PREFIXCLS}-${size}-round`]:round
        },
        className,
    )
    
    return (
        <button className={classes} ref={ref}>
            {children}
        </button>
    )
}




const Button = React.forwardRef<any,ButtonProps>(InternalButton)
export default Button;