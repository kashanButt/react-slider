import React from 'react'
import { GoLocation, GoCalendar } from 'react-icons/go'
import { IoSpeedometer } from 'react-icons/io5'
import { RiGasStationFill } from 'react-icons/ri'
import { TbManualGearbox } from 'react-icons/tb'
import ProductSlider from './ProductSlider'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const MainProductContent = () => {
  return (
    <div className='MainProductContent'>
      <div className='heading'>
        <h2>Nissan Clipper DX 2013</h2>
        <p className='location'><GoLocation className='locationIcon' />I-10,Islamabad</p>
      </div>
      <ProductSlider />
      <div className='vehicleInfo'>
        <div className='baseInfo'>
          <div className='info'>
            <GoCalendar className='icon' />
            <p>2013</p>
          </div>
          <div className='info'>
            <IoSpeedometer className='icon' />
            <p>126,809 Km</p>
          </div>
          <div className='info'>
            <RiGasStationFill className='icon' />
            <p>Petrol</p>
          </div>
          <div className='info'>
            <TbManualGearbox className='icon' />
            <p>Automatic</p>
          </div>
        </div>
        <div className='moreInfo'>
          <div className='info'>
            <span className='row-one'>Registered In</span><span className='row-two'>Islamabad</span>
          </div>
          <div className='info'>
            <span className='row-one'>Color</span><span className='row-two'>White</span>
          </div>
          <div className='info'>
            <span className='row-one'>Assembly</span><span className='row-two'>Imported</span>
          </div>
          <div className='info'>
            <span className='row-one'>Engine Capacity</span><span className='row-two'>660 cc</span>
          </div>
          <div className='info'>
            <span className='row-one'>Body Type</span><span className='row-two'>Micro Van</span>
          </div>
          <div className='info'>
            <span className='row-one'>Last Updated:</span><span className='row-two'>Jul 19,2023</span>
          </div>
          <div className='info'>
            <span className='row-one'>Add Ref#</span><span className='row-two'>7442862</span>
          </div>
          <div className='info'>
            <span className='row-one'>Auction Grade</span><span className='row-two'>5</span>
          </div>
          <div className='info'>
            <span className='row-one'>Chasis No.</span><span className='row-two'>DR64V-791245</span>
          </div>
        </div>
      </div>
      <div className='inspReport'>
        <h2>Inspection Report</h2>
        <p>Inspected Date: 05/13/23</p>
        <div className='inspStats'>
          <p>Overall Rating</p><span>7.0/10</span><br/>
          <hr />
          <div className='ratings'>
            <span className='row-one'>Exterior & Body</span><span className='row-two'>25%</span><br/>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={25} className='progress' />
            </Box>
          </div>
          <div className='ratings'>
            <span className='row-one'>Engine/Transmission/Clutch</span><span className='row-two'>98%</span><br/>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={98} className='progress' />
            </Box>
          </div>
          <div className='ratings'>
            <span className='row-one'>Suspension/Steering</span><span className='row-two'>95%</span><br/>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={95} className='progress' />
            </Box>
          </div>
          <div className='ratings'>
            <span className='row-one'>Interior</span><span className='row-two'>81%</span><br/>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={95} className='progress' />
            </Box>
          </div>
          <div className='ratings'>
            <span className='row-one'>AC/Heater</span><span className='row-two'>100%</span><br/>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={100} className='progress' />
            </Box>
          </div>
        </div>
        <button className='learnMore'>Learn More</button>
        <button className='viewInspReport'>View Inspection Report</button>
      </div>
    </div>
  )
}

export default MainProductContent