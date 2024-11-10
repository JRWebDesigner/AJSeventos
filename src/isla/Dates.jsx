import './style.css'

export function Dates(){
    return(
      <div className="relative min-h-[50vh] mb-10">
        <h2 className="my-14 text-center text-2xl md:text-4xl font-bold">Touring Dates</h2>
        <div id="containerDates" className="flex justify-around items-center">
          <a className="Links w-[80%] m-auto" href="https://www.passline.com/eventos/magic-men-325883" target='_blank'>
            <img className="w-[350px] rounded-xl" src="https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/465968627_1029590829178516_175277891150909778_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IVjum2eYln0Q7kNvgEns_MV&_nc_zt=23&_nc_ht=scontent.flpb1-1.fna&_nc_gid=AEEnlgFYwOzDVZ7PS3XkRpD&oh=00_AYD0ryPOS_egjtXxRpgtBbjV5AslCX_4qpNhM0YGHZVsaQ&oe=67359059" alt="siguiente evento de ajs eventos" />
            <span className='text-lg'>8 de marzo - Argentina</span>
          </a>
        </div>
      </div>
    )
}