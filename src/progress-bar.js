import React from 'react'

function ProgressBar(props) {
    const amount = (props.amt * 100).toFixed(2)
 
    const ProgressBar = (props) => {
        return (
            <div className="progress-bar shadow">
              <Filler percentage={props.percentage} color={props.color} />
            </div>
          )
      }
      
      const Filler = (props) => {
        return <div className="filler" style={{ width: `${props.percentage}%`, background: `${props.color}` }} />
      }
  
    return (
      <div>
        <ProgressBar percentage={amount} color={props.color} />
      </div>
    )
  }  




export default ProgressBar;


// Other React Stuff

// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg

// https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4

// Follow me on Github!
// https://github.com/DZuz14