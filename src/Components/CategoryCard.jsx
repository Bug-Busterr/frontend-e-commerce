function CategoryCard({ Icon, title, extraClass }) {
  return (
    <div className={`card2 show ${extraClass || ''}`}>
      <Icon className={`icon ${extraClass || ''}`} title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default CategoryCard;
