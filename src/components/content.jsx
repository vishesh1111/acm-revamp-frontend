export function Content({image, alt, title, para}){
    return(
        <div className="group bg-blue-400 text-white rounded-2xl p-6 shadow-lg mb-6 mt-6 transition-colors duration-300 hover:bg-blue-200 hover:text-black">
           <div className="flex items-center justify-center mb-6 mt-6">
              <img
                src={image}
                alt={alt}
                className="h-24 filter invert brightness-0 transition-all duration-300 group-hover:invert-0"
              />
            </div>
              <h1 className="text-xl font-semibold mb-4 text-center">{title}</h1>
              <p className="">{para}</p>
        </div>
    )
  }