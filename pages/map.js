import Map from "../components/Map";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
export default function map() {
  // let selectedCompaniesList = useSelector(selectSelectedCompanies);
  // let categoriesList = useSelector(selectCategories);
  // const [companies, setCompanies] = useState([]);
  // useEffect(() => {
  //   let companiesTemp = [];
  //   // console.log(categoriesList.categories);
  //   const categories = categoriesList.categories;
  //   for (const e of categories) {
  //     const companies = e.companies;
  //     for (const company of companies) {
  //       console.log(company);
  //       companiesTemp.push(company);
  //     }
  //   }
  //   // console.log(selectedCompaniesList.selectedCompanies);
  //   const selectedCompanies = selectedCompaniesList.selectedCompanies;
  //   companiesTemp = companiesTemp.filter((e, i) => {
  //     return selectedCompanies.includes(e.id);
  //   });
  //   setCompanies(companiesTemp);
  // }, [selectedCompaniesList, categoriesList]);
  return (
    <div>
      <Map />
    </div>
  );
}
