function CategoryCard({ Icon, title}) {
  return (
    <div className="card2-show">
      <Icon className="icon" title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default CategoryCard;
