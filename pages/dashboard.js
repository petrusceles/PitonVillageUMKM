import Dashboard from "../components/Dashboard";

function dashboard() {
  return (
    <div className="bg-[url('/images/front.jpg')] h-screen  overflow-hidden w-screen bg-cover min-h-fit ">
      <div className="container mx-auto max-w-2xl py-7 px-5 h-full">
        <Dashboard />
      </div>
    </div>
  );
}

export default dashboard;
