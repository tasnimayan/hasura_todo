import OverviewCard from "./OverviewCard";

const Overview: React.FC = () => (
  <section className="mb-16">
    <h2 className="text-xl font-semibold mb-4">Overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <OverviewCard title="Tasks Today" count={5} />
      <OverviewCard title="Pending Tasks" count={12} />
      <OverviewCard title="Completed Tasks" count={30} />
    </div>
  </section>
);
export default Overview;
