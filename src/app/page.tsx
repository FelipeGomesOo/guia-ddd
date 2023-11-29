import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
         <h1 className='w-full'>Códigos DDDs dos estados e das cidades do Brasil</h1>
         <table className='w-full'>
          <thead>
            <tr>
              <th>Região</th>
              <th>Estado</th>
              <th>Código DDD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acre</td>
              <td>Acre</td>
              <td>68</td>
            </tr>
            <tr>
              <td>Alagoas</td>
              <td>Alagoas</td>
              <td>82</td>
            </tr>
          </tbody>          
         </table>
      </div>
    </main>
  )
}
