type Props = {
  handleSystem: (str: string) => void;
};

export default function Systems({ handleSystem }: Props) {
  return (
    <div className="system">
      <button onClick={() => handleSystem("metric")}>Metric</button>
      <button onClick={() => handleSystem("imperial")}>Imperial</button>
    </div>
  );
}
