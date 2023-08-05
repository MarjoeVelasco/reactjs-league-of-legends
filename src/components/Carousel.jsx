function Carousel({ imageUrl, alt }) {
  return (
    <div className="carousel-item">
      <div className="relative">

        <img src={imageUrl} alt={alt} className="max-w-screen-sm" />
        <div className="overlay absolute inset-0 flex justify-center items-end">
          <h3 className="p-1 text-xs font-bold bg-black w-fit bg-opacity-75 rounded-lg mb-2">{alt}</h3>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
