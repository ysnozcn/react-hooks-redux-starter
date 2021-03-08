import React from 'react'
import { connect } from 'react-redux'

export const DefaultHeader = (props) => {
  return (
    <div>
        Header
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader)
