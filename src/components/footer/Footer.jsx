export function Footer(props) {
  return (
    <div
      className={`navbar navbar-expand-lg ${props.modoDark ? "Dark" : ""}  `}
    >
      <p className="text-center"> Proyecto Car IV by Alvaro Vergara </p>
    </div>
  );
}
