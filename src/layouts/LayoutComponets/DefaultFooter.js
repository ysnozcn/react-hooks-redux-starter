import React from 'react'
import { connect } from 'react-redux'

export const DefaultFooter = (props) => {
  return (
    <div>
        Footer
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultFooter)
