import React from 'react'

const Card = ({info}) => {

  console.log( info )
  const { 
    ip,
    isp,
    city,
    country,
    postalCode,
    timezone, } = !!info && info

  return (

    <div className="card grid grid-cols-4 p-8 rounded-xl shadow-xl">
    <div className="ml-8">
      <h3 className="font-medium">IP ADDRESS</h3>
      <p className="border-r h-20 text-2xl font-medium mt-2 pr-20">
        { ip }
      </p>
    </div>

    <div className="ml-8">
      <h3 className="font-medium">LOCATION</h3>
      <p className="border-r h-20 text-2xl font-medium mt-2 pr-20">
        {city} {country} {postalCode}
      </p>
    </div>

    <div className="ml-8">
      <h3 className="font-medium">TIMEZONE</h3>
      <p className="border-r h-20 text-2xl font-medium mt-2 pr-20">
        { timezone }
      </p>
    </div>

    <div className="ml-8">
      <h3 className="font-medium">ISP</h3>
      <p className=" text-2xl font-medium mt-2 pr-20">
        { isp }
      </p>
    </div>
  </div>
  )
}

export default Card
