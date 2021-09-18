export const fetchInfo = (addressIp, setInfo) => {

  const url = `https://geo.ipify.org/api/v1?apiKey=at_NQS8tO2zmoiY365wRfdBxcJeeLBAG&ipAddress=${addressIp}`;
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      const { ip, isp, location } = data;
      const { city, country, lat, lng, postalCode, timezone } = location;
      const info = {
        ip,
        isp,
        city,
        country,
        lat,
        lng,
        postalCode,
        timezone,
      };
      setInfo(info)

    });
};
