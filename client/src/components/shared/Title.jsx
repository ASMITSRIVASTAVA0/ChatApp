import React from 'react'
import { Helmet } from 'react-helmet-async'

// const Title = () => {
const Title = ({title="chat",description="this is the chat app"}) => {
  return (
    // <div>Title</div>

    // helmet used for managing document head of react app,
    // allow to dynamically set meta tags,titlge,link tags,<head> section of HTML element
    <Helmet>
        <Title>{title}</Title>
        <meta name="description" content={description}></meta>
    </Helmet>
  )
}

export default Title