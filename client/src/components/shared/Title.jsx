import React from 'react'
import { Helmet } from 'react-helmet-async'



const Title=({title="Chat",description="this is description"})=>{
  // return <div>Title</div>
  return <Helmet>


    {
    /* meta data=info about content of webpage that is not part of content,
    provide addtional context for browsers,search engines,etc 

        
        
    // helmet used for managing document head of react app,
    // allow to dynamically set meta tags,titlge,link tags,<head> section of HTML element
    

    {/* ye HTML  me head me jo title hota h */}

    <title>{title}</title>
    <meta name="description" content={description}/>
  </Helmet>
}
export default Title;
/*

// const Title = () => {
const Title = ({title="chat",description="this is the chat app"}) => {
  return (
    // <div>Title</div>
    
    /*
    {/* meta data=info about content of webpage that isnot part of content,
        provide addtional context for browsers,search engines,etc 

        
        
    // helmet used for managing document head of react app,
    // allow to dynamically set meta tags,titlge,link tags,<head> section of HTML element
    <>
     // <Helmet*
        <Title>{title}</Title>


        
        <meta name="description" content={description}></meta>
    {/* // </Helmet> *}
    </>
  )
}

export default Title
*/
