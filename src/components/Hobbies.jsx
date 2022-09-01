export default function Hobbies({ list }) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5">{list.join("; ")}</div>
    </div>
  );
}
