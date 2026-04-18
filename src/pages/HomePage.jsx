import NavComponent from '../components/NavComponent'
import Banner from '../components/Banner'
import BestSales from '../components/BestSales'

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-white text-gray-900">
      <main>
        <Banner />
        <BestSales />
      </main>
    </div>
  )
}

export default HomePage