
import React from 'react'
import PropTypes from 'prop-types'

const newMessage = {
    message:'hola',
    title:'je',
}

const getUsers = () =>  1 + 2

export const HelloWorldApp = ( {title,subTitle} ) => {




  return (
      <>
        {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <h2>{}</h2>

      </>
  )
}


HelloWorldApp.propTypes = {

    title: PropTypes.string.isRequired

}