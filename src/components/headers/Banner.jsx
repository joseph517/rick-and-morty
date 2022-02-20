import bannerImg from "../../assets/img/banner.png";

export function Banner() {
  return (
    <div className="card bg-dark text-white">
      <img
        style={{ height: "600px", objectFit: "cover" }}
        src={bannerImg}
        className="card-img"
        alt="Banner"
      />
    </div>
  );
}
