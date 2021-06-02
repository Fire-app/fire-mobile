import React from 'react'
import PropTypes from 'prop-types'
import ReactTimeAgo from 'react-time-ago'

export default function LastSeen({ date }) {
  return (
    <div>
      Last seen: <ReactTimeAgo date={date} locale="en-US" component={Time}/>
    </div>
  )
}

function Time({ date, verboseDate, tooltip, children }) {
    return <Text>{children}</Text>
}

Time.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    verboseDate: PropTypes.string,
    tooltip: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired
  }