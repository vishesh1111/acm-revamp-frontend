export function Office({ image, hoverimage, imageAlt, althovered }) {
    return (
        <div className="group relative flex items-center justify-center xl:w-[200px] xl:h-[200px] 
                lg:w-[180px] lg:h-[180px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[200px] h-[200px]"
        >
          <img
            src={image}
            alt={imageAlt} 
            className="transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={hoverimage}
            alt={althovered} 
            className="absolute left-0 opacity-0 transition-opacity duration-300 transform origin-left 
                    group-hover:opacity-100 xl:hover:scale-125 lg:hover:scale-110 md:hover:scale-125"
          />
        </div>
        
    )
  }

  