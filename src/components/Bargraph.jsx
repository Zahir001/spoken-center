import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import '../progressbar.css'
const Bargraph = () => {
  const data = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 15 },
    { name: 'Mar', value: 27 },
    { name: 'Apr', value: 24 },
    { name: 'May', value: 25 },
    { name: 'Jun', value: 13 },
    { name: 'Jul', value: 25 },
    { name: 'Aug', value: 28, fill: '#5A32EA' },
    { name: 'Sep', value: 27 },
    { name: 'Oct', value: 25 },
    { name: 'Nov', value: 24 },
    { name: 'Dec', value: 26 },

  ]

  return (
    <>
      <div>
        <div className='overview-btn-style'>
          <h2 style={{fontWeight:'500', fontSize:'24px'}}>Overview</h2>
          <div class="dropdown">
            <button class="btn btn-class-style dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Quarterly
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        <span style={{marginBottom:'10px', color:'gray', fontWeight:'300',fontSize:'14px'}}>Monthy Earning</span>
        <BarChart className='barChartMobile' width={700} height={250} data={data}>
          <XAxis dataKey='name' axisLine={false} tick={{ dy: 10 }} tickLine={false}/>
          <YAxis hide />
          <Bar dataKey='value' fill='#F2EFFF' radius={10} />
        </BarChart>
      </div>



    </>
  )
}

export default Bargraph
