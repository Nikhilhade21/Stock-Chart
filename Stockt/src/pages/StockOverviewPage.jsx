import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"

export const StockOverviewPage = () => {
  return <div>
    <div className="text-center">
      <h1>Stock T</h1>
    </div>
    <AutoComplete />
    <StockList />
  </div>
}