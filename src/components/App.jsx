import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'gray',
    width: '100%'
  }
})

export default function App({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object
}
