const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/people/Renthomeinukcouk/61550946855145/", icon: "fa-facebook" },
    { id: 2, liveLink: "https://www.twitter.com/#", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/renthomeinuk", icon: "fa-instagram" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
