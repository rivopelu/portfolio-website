import React from 'react'

const PageTitle = ({ title, className }) => {
    return (
        <div className={`capitalize text-2xl lg:text-3xl text-blue-700 font-bold border-b-2 border-blue-100 pb-1 w-full pr-5 ${className} `}>{title}</div>
    )
}

export default PageTitle