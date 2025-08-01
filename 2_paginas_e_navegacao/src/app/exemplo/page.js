"use client"
import { useSearchParams } from "next/navigation";

const exemploPage = () => {

const SearchParams = useSearchParams();

const valorParam = SearchParams.get("parametro")
const presencaParam = SearchParams.has("parametro");
  

console.log(SearchParams)

  return (
    <div>
       <h1>exibindo resultado para valor params {valorParam}</h1>
       {presencaParam ? "tem parametro": "não tem"}
    </div>
  )
}

export default exemploPage;
