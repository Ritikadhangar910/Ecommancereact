import Button from "react-bootstrap/Button";
const Home = () => {
  const arrtour = [
    {
      mounth: "JUL16",
      state: "DETROIT, MI",
      region: "DTE ENERGY MUSIC THEATRE",
    },
    {
      mounth: "JUL19",
      state: "TORONTO,ON",
      region: "BUDWEISER STAGE",
    },
    {
      mounth: "JUN22",
      state: "BRISTOW, VA",
      region: "JIGGY LUBE LIVE",
    },
    {
      mounth: "JUL29",
      state: "PHOENIX, AZ",
      region: "AK-CHIN PAVILION",
    },
    {
      mounth: "AUG2",
      state: "LAS VEGAS, NV",
      region: "T-MOBILE ARENA",
    },
    {
      mounth: "AUG7",
      state: "CONCORD, CA",
      region: "CONCORD PAVILION",
    },
  ];
  return (
    <>
      <section>
        <div className="home-album">
          <h1>The Generics</h1>
          <h2>Get our Latest Album</h2>
          <p>Try This</p>
        </div>
        <div className="home-tour">
          <h3>Tour</h3>
          {arrtour.map((item) => (
            <div className="arrtour" key={item.mounth}>
              <p>{item.mounth}</p>
              <p>{item.state}</p>
              <p>{item.region}</p>
              <Button variant="primary">BUY TICKETS</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
