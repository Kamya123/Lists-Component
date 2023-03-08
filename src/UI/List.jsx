import React from 'react'

const List = ({className, children}) => {
  return (
    <article className={`lists ${className}`}>
        {children}
    </article>
  )
}

export default List
