const DestinationCard = ({ title, image, text, slug }) => {
  return (
    <div className='card bg-base-100 shadow-md'>
      <figure>
        <img src={image} alt={title} className='h-48 w-full object-cover' />
      </figure>
      <div className='card-body'>
        <a href={`/destinations/${slug}`}>
          <h2 className='card-title text-lg font-semibold hover:text-primary'>{title}</h2>
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
