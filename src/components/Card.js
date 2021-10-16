import React from 'react'

const Card = ({info}) => {

    const { 
    ip,
    isp,
    city,
    country,
    postalCode,
    timezone, } = !!info && info

  return (

    <div className="card grid grid-cols-12 lg:grid-cols-4 p-4 lg:p-8 rounded-xl shadow-xl text-center lg:text-left">
    <div className="col-span-12 lg:col-auto lg:ml-8">
      <h3 className="text-xs font-medium">IP ADDRESS</h3>
      <p className="lg:border-r lg:h-20 lg:text-md xl:text-2xl font-medium mb-4 lg:mt-4 lg:mb-0 lg:pr-20">
        { ip }
      </p>
    </div>

    <div className="col-span-12 lg:col-auto lg:ml-8">
      <h3 className="text-xs font-medium">LOCATION</h3>
      <p className="lg:border-r lg:h-20 lg:text-md xl:text-2xl font-medium mb-4 lg:mt-4 lg:mb-0 lg:pr-20">
        {city} {country} {postalCode}
      </p>
    </div>

    <div className="col-span-12 lg:col-auto lg:ml-8">
      <h3 className="text-xs font-medium">TIMEZONE</h3>
      <p className="lg:border-r lg:h-20 lg:text-md xl:text-2xl font-medium mb-4 lg:mt-4 lg:mb-0 lg:pr-20">
        { timezone }
      </p>
    </div>

    <div className="col-span-12 lg:col-auto lg:ml-8">
      <h3 className="text-xs font-medium">ISP</h3>
      <p className=" lg:text-md xl:text-2xl font-medium mb-4 lg:mt-4 lg:mb-0 lg:pr-20">
        { isp }
      </p>
    </div>
  </div>
  )
}

export default Card
