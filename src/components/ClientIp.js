async function ClientIp( setIp ) {
    try {
      const response = await fetch('https://geolocation-db.com/json/');
      const data = await response.json();
      const {IPv4} = data
      setIp( IPv4 )

    } catch (e) {
      setIp('')
    }
}

export default ClientIp;