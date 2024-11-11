export function UpcomingDates() {
    return(
        <div className="bg-gray-950 w-[90%] md:w-[40%] min-h-24 rounded-3xl m-auto mt-10 flex justify-center items-center">
<div className="overflow-x-auto">
  <table className="rounded-3xl min-w-full bg-gray-800">
    <thead className="font-bold">
      <tr>
        <th className="py-3 px-4 border-b-2 border-gray-300 text-sm font-semibold text-center">Fecha</th>
        <th className="py-3 px-4 border-b-2 border-gray-300 text-sm font-semibold text-center">Ciudad</th>
        <th className="py-3 px-4 border-b-2 border-gray-300 text-sm font-semibold text-center">Lugar</th>
        <th className="py-3 px-4 border-b-2 border-gray-300 text-sm font-semibold text-center">Tickets</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t font-bold">
        <td className="py-4 px-4 border-r text-center text-sm">8 de marzo</td>
        <td className="py-4 px-4 border-r text-center text-sm">Argentina</td>
        <td className="py-4 px-4 border-r text-center text-sm">C ART MEDIA</td>
        <td className="py-4 px-4 text-center bg-green-500 hover:bg-green-700 text-sm">
          <a className=" py-2 px-4 rounded-3xl text-white" href="https://www.passline.com/eventos/magic-men-325883" target="_blank" rel="noopener noreferrer">Comprar entrada</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    )
}