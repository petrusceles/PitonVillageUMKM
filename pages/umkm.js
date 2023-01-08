import List from "../components/List";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default function umkm() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Search />
      <List />
    </div>
  );
}
