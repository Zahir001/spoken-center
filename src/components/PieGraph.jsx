import React from 'react'
import '../progressbar.css'

const PieGraph = () => {
  return (
    <div className='pieGraphP'>
      <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
        <div className='percentCount'>
          65%
          <div className='newCustomersText'>
            Total New <br />Customers
          </div>
        </div>
      </div>
    </div>

  )
}

export default PieGraph
