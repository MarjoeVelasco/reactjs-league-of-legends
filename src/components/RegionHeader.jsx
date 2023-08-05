function RegionHeader({ uri, name, overview }) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <img src={uri} alt={name} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950 bg-opacity-50 p-4">
        <p className="text-center px-4 py-8">
          <span className="text-white text-4xl font-bold tracking-widest">
            {name}
          </span>
          <br />
          <p className="text-white text-sm tracking-widest max-w-screen-md pt-4">
            <div dangerouslySetInnerHTML={{ __html: overview }} />
          </p>
        </p>
      </div>
    </div>
  );
}

export default RegionHeader;
