interface OverviewCardProps {
  title: string;
  count: number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, count }) => (
  <div className="bg-white p-4 shadow rounded-lg max-w-3xl">
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default OverviewCard;
