function Error() {
  return (
    <div className="w-full h-screen flex items-center flex-col mt-16">
      <h1 className="font-extrabold lg:text-[30px]">Maaf Sedang Terjadi Kesalahan</h1>
      <img src="errElement.svg" alt="Error Image" className="lg:w-1/3"/>
    </div>
  )
}

export default Error;