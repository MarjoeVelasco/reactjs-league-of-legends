import { Link } from "react-router-dom";

function CardRegion({name,uri,slug}) {

return (
  <div>
          <Link to={slug}>
<div className="border-double border-2 border-yellow-600 card card-compact w-auto bg-base-100 shadow-xl hover:scale-105 duration-500 ease-in-out">
  <figure>
    <img src={uri} alt={name} className="h-40 w-full object-cover" /> {/* Set a fixed height of 40px */}
  </figure>
  <div className="card-body gap-0">
    <p className="font-normal card-title text-center text-sm text-white">
      {name}
    </p>
  </div>
</div>
</Link>
</div>
);


}

export default CardRegion;