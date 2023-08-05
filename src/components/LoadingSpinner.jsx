function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-24 h-24 rounded-full absolute border-8 border-solid border-gray-200"></div>
      <div className="w-24 h-24 rounded-full animate-spin absolute border-8 border-solid border-amber-400 border-t-transparent"></div>
    </div>
  );
}

export default LoadingSpinner;