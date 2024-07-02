import "./MainTitle.css";

function MainTitle({
  children,
  FontSize = "18px",
  Color = "#002D53",
  Weight = 400,
}) {
  return (
    <h1
      style={{ color: Color, fontSize: FontSize, fontWeight: Weight }}
      className="MainTitle"
    >
      {children}
    </h1>
  );
}

export default MainTitle;
