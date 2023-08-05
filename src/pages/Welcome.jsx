import ChampionList from "../components/ChampionList";



function Welcome() {

  return (
    <div className="bg-[url('../src/images/ionia-01.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">

      <ChampionList></ChampionList>
    </div>
  );
}

export default Welcome;