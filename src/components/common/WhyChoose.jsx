const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Extensive Property Listings",
      descriptions: `We offer an extensive and constantly updated database of properties throughout the UK. Whether you're a landlord looking to list your property or a tenant searching for the perfect home, our platform provides a wide range of options to suit your needs.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Wide Renge Of Properties",
      descriptions: `We offer a vast and varied selection of properties throughout the UK. Whether you're searching for a cozy apartment, a spacious family home, or a stylish urban loft, you'll find a wide range of options to cater to your unique preferences and requirements.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "User-Friendly Interface",
      descriptions: `Our user-friendly platform makes it easy for both landlords and tenants to navigate and utilize our services. You can easily create property listings, schedule viewings, and communicate with potential tenants or landlords seamlessly, all in one place.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
