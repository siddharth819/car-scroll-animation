export default function StatCard({ stat }) {
  return (
    <div
      data-stat={stat.id}
      className={`absolute rounded-[18px] border-[3px] border-paper px-[1.8vw] py-[1.5vw] opacity-0 will-change-transform max-md:w-[44vw] max-md:p-3.5 ${stat.theme} ${stat.pos}`}
    >
      <div className="text-[clamp(2.2rem,4.8vw,4.6rem)] font-extrabold leading-none tracking-tight">{stat.value}</div>
      <p className="mt-2 text-[clamp(.75rem,1.3vw,1.15rem)] font-medium leading-tight">{stat.text}</p>
    </div>
  );
}
