import Link from "next/link";

const CallToAction = (props) => {
  let { title, description, buttonText, redirectTo, component } = props
  const staticTitleClass = "start_partner tac-smd";
  const dynamicTitleClass = component == 'Hero' ? 'main-title' : '';
  const combinedClasses = `${staticTitleClass} ${dynamicTitleClass}`;
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className={combinedClasses}>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link href={redirectTo} className="btn btn-thm2">
            {buttonText}
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
