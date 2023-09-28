import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Rent Home In UK - Where Your Search Ends, And Your Story Begins`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="rent your property, rent home in uk, landloard, tenants, agencies, UK rental properties, Property rentals, Apartment rentals, Single Room Rentals, Landlords in the UK, Tenants in the UK"
      />
      <meta
        name="description"
        content="Rent Home In UK - Where Your Search Ends, And Your Story Begins"
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
