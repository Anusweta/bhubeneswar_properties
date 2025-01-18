import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const PropertyList = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sidebar form states
  const [locationQuery, setLocationQuery] = useState('');
  const [bedroomCount, setBedroomCount] = useState('');
  const [bathroomCount, setBathroomCount] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const bedrooms = queryParams.get('bedrooms');
    const bathrooms = queryParams.get('bathrooms');
    const minPriceParam = queryParams.get('minPrice');
    const maxPriceParam = queryParams.get('maxPrice');
    const minAreaParam = queryParams.get('minArea');
    const maxAreaParam = queryParams.get('maxArea');
    const locationParam = queryParams.get('location');

    if (allProperties.length > 0) {
      const filtered = allProperties.filter((property) => {
        const isBedroomMatch = bedrooms
          ? parseInt(property.bedrooms || 0) === parseInt(bedrooms)
          : true;

        const isBathroomMatch = bathrooms
          ? parseInt(property.bathrooms || 0) === parseInt(bathrooms)
          : true;

        const isMinPriceMatch = minPriceParam
          ? parseFloat(property.total_price || 0) >= parseFloat(minPriceParam)
          : true;

        const isMaxPriceMatch = maxPriceParam
          ? parseFloat(property.total_price || 0) <= parseFloat(maxPriceParam)
          : true;

        const isMinAreaMatch = minAreaParam
          ? parseFloat(property.covered_area || 0) >= parseFloat(minAreaParam)
          : true;

        const isMaxAreaMatch = maxAreaParam
          ? parseFloat(property.covered_area || 0) <= parseFloat(maxAreaParam)
          : true;

        const isLocationMatch = locationParam
          ? property.address.toLowerCase().includes(locationParam.toLowerCase())
          : true;

        return (
          isBedroomMatch &&
          isBathroomMatch &&
          isMinPriceMatch &&
          isMaxPriceMatch &&
          isMinAreaMatch &&
          isMaxAreaMatch &&
          isLocationMatch
        );
      });

      setFilteredProperties(filtered);
    }
  }, [location.search, allProperties]);

  const fetchProperties = () => {
    setLoading(true);
    const apiUrl =
      'https://bhubaneswarproperty.in/api/getProperties.php?limit=20&type=apartment-flat&mode=Sell&city=1&locality=5';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const properties = Array.isArray(data.data) ? data.data : [];
        setAllProperties(properties);
        setFilteredProperties(properties);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    if (locationQuery) queryParams.append('location', locationQuery);
    if (bedroomCount) queryParams.append('bedrooms', bedroomCount);
    if (bathroomCount) queryParams.append('bathrooms', bathroomCount);
    if (minArea) queryParams.append('minArea', minArea);
    if (maxArea) queryParams.append('maxArea', maxArea);
    if (minPrice) queryParams.append('minPrice', minPrice);
    if (maxPrice) queryParams.append('maxPrice', maxPrice);

    navigate(`/propertylist?${queryParams.toString()}`);
  };
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <div className="main-content">
            <div className="flat-title">
              <div className="cl-container full">
                <div className="row">
                  <div className="col-12">
                    <div className="content">
                      <h2>Real Estate &amp; Homes For Sale</h2>
                      <ul className="breadcrumbs">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>Property List</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="property-list-wrap v1">
              <div className="cl-container">
                <div className="row">
                  <div className="col-lg-4">
                  <form className="form-sidebar-left" onSubmit={handleSearch}>
                <fieldset className="name wow fadeInUp">
                  <input
                    type="text"
                    placeholder="Location"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </fieldset>

                <fieldset
  className="name wow fadeInUp"
  style={{
    marginBottom: '5px',
    width: '100%', // Full width
    backgroundColor: 'white', // White background
    border: '1px solid #ccc', // Optional: Add a light gray border for definition
    borderRadius: '9px', // Optional: Rounded corners
    padding: '7px', // Optional: Add padding
  }}
>
  <select
    style={{
      width: '100%', // Full width for the select element
      padding: '10px', // Add padding for better appearance
      fontSize: '1.4rem', // Adjust font size
      fontWeight: 'normal', // Set font weight to bold
      color: 'black', // Set text color to black
      borderRadius: '5px', // Optional: Add border-radius for rounded corners
      backgroundColor: 'white', // White background
      border: 'none', // Remove default border
    }}
    value={bedroomCount}
    onChange={(e) => setBedroomCount(e.target.value)}
  >
    <option value="">Select Bedrooms</option>
    <option value="1">1 Bedroom</option>
    <option value="2">2 Bedrooms</option>
    <option value="3">3 Bedrooms</option>
    <option value="4">4 Bedrooms</option>
  </select>
</fieldset>

<fieldset
  className="name wow fadeInUp"
  style={{
    marginBottom: '5px',
    width: '100%', // Full width
    backgroundColor: 'white', // White background
    border: '1px solid #ccc', // Optional: Add a light gray border for definition
    borderRadius: '9px', // Optional: Rounded corners
    padding: '7px', // Optional: Add padding
  }}
>
  <select
    style={{
      width: '100%', // Full width for the select element
      padding: '10px', // Add padding for better appearance
      fontSize: '1.4rem',
      fontWeight: 'normal', // Set font weight to bold
      color: 'black', // Set text color to black // Adjust font size
      borderRadius: '5px', // Optional: Add border-radius for rounded corners
      backgroundColor: 'white', // White background
      border: 'none', // Remove default border
    }}
    value={bathroomCount}
    onChange={(e) => setBathroomCount(e.target.value)}
  >
    <option value="">Select Bathrooms</option>
    <option value="1">1 Bathroom</option>
    <option value="2">2 Bathrooms</option>
    <option value="3">3 Bathrooms</option>
    <option value="4">4 Bathrooms</option>
  </select>
</fieldset>


                <fieldset className="name wow fadeInUp">
                  <input
                    type="number"
                    placeholder="Min. Area"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                  />
                </fieldset>
                <fieldset className="name wow fadeInUp">
                  <input
                    type="number"
                    placeholder="Max. Area"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                  />
                </fieldset>
                <fieldset className="name wow fadeInUp">
                  <input
                    type="number"
                    placeholder="Min. Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </fieldset>
                <fieldset className="name wow fadeInUp">
                  <input
                    type="number"
                    placeholder="Max. Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </fieldset>

                <button className="tf-button-primary w-full wow fadeInUp" type="submit">
                  Search Property
                  <i className="icon-arrow-right-add" />
                </button>
              </form>
                    </div>
                  <div className="col-lg-8">
                    {loading ? (
                      <p>Loading properties...</p>
                    ) : filteredProperties.length === 0 ? (
                      <p>No properties found.</p>
                    ) : (
                      <div className="row">
                        {filteredProperties.map((property, index) => (
                          <div className="col-xl-6" key={index}>
                            <div className="box-dream has-border wow fadeInUp">
                              <div className="image">
                              <img
                              className="w-full"
          src={`https://bhubaneswarproperty.in/images/property_image/thumbnail/${property.parent_id}/${property.image_name}`} // Dynamically construct the image URL
          alt="No Image" // Use the property title as alt text for accessibility
        />
   </div>
                              <div className="content">
                                <div className="head">
                                  <div className="title">
                                    <Link
                                      to={`/PropertySingle/${property.property_no}`}
                                    >
                                      {property.title}
                                    </Link>
                                  </div>
                                  <div className="price">
                                    ${property.total_price}
                                  </div>
                                </div>
                                <div className="location">
                                  <p>{property.address}</p>
                                </div>
                                <div className="icon-box">
                                  <div className="item"><i className="flaticon-hotel" />
                                    {property.bedrooms} Beds
                                  </div>
                                  <div className="item"><i className="flaticon-bath-tub" />
                                    {property.bathrooms} Baths
                                  </div>
                                  <div className="item"><i className="flaticon-minus-front" />
                                    {property.covered_area} Sqft
                                  </div>
                                  <div className="item"><i className="flaticon-minus-front" />
                                    {property.property_no} 
                                  </div>

                                </div>
                                <Link to={`/PropertySingle/${property.property_no}`} style={{
                marginTop: '4px',          
              display: 'inline-block',
              padding: '8px 13px',
              fontSize: '16px',
              color: '#fff',
              backgroundColor: '#007bff', // Blue color
              border: 'none',
              borderRadius: '5px',
              textDecoration: 'none', // Remove underline
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0056b3'; // Darker blue on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#007bff'; // Reset to original color
            }}>
            View Details
          </Link>
 
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyList;
