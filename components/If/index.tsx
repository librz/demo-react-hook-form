import React, { FC } from 'react'

interface IProps {
    condition: unknown;
}

const If: FC<IProps> = ({ condition, children }) => {
    return condition ? <>{children}</> : null
}

export default If;