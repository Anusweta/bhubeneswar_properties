import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital, faSchool, faTrain, faPlane, faCity, faLandmark } from "@fortawesome/free-solid-svg-icons";




const PropertySingle = () => {
  const { property_no } = useParams(); // Extract property_no from the URL
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      setLoading(true); // Set loading to true before fetching
      console.log('Fetching data for property_no:', property_no); // Log the property_no

      try {
        const response = await fetch(`https://bhubaneswarproperty.in/api/getProperties.php?limit=20&type=apartment-flat&mode=Sell&city=1&locality=5`);
        const result = await response.json();
        
        console.log('API Response:', result); // Log the entire API response

        if (result.status === "success" && result.data.length > 0) {
          // Find the property that matches the property_no
          const property = result.data.find(prop => prop.property_no.toString() === property_no);
          setPropertyData(property); // Set the property data if found
        } else {
          console.log('No property data found for this property_no');
          setPropertyData(null); // Clear data if no property is found
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [property_no]); // Fetch when property_no changes


  

  if (loading) {
    return <p>Loading...</p>;
  }






  return (
    <>
     <style>
      {`
      .video {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px; /* Limit the maximum width */
}

.video-wrap iframe {
  width: 100%; /* Make the iframe take the full width of the container */
  height: 500px; /* Set a height for the iframe */
  border: none; /* Remove borders for cleaner look */
}

@media (max-width: 768px) {
  .video-wrap iframe {
    height: 300px; /* Adjust height for smaller screens */
  }

.icon {
  margin-right: 10px;
  font-size: 1.2rem;
  color: #007bff;
}


      `}
     </style>
      <div id="wrapper">
        <div id="page" className="">
         
          <div className="main-content">
            <div className="property-single-wrap sticky-container" data-sticky-container="">
              <div className="cl-container">
                <div className="row">
                  <div className="col-12">
                    <div className="flex items-center justify-between gap30 flex-wrap pt-30 pb-30">
                      <ul className="breadcrumbs style-1 justify-start">
                        <li><Link to="index.html">Home</Link></li>
                        <li>/</li>
                        <li>Property List</li>
                        <li>/</li>
                        <li>Renovated Apartment</li>
                      </ul>
                      <div className="list-icons-page">
                        <div className="item"><div className="icon"><i className="flaticon-heart" /></div><p>Save</p></div>
                        <div className="item"><div className="icon"><i className="flaticon-before-after" /></div><p>Compare</p></div>
                        <div className="item"><div className="icon"><i className="flaticon-outbox" /></div><p>Share</p></div>
                        <div className="item"><div className="icon"><i className="flaticon-tools-and-utensils" /></div><p>Print</p></div>
                      </div>
                    </div>
                  </div>
                      <div className="col-12">
                      <div className="wrap-gallery-image">
                        <div className="list-tags type-1">
                          <Link to="#" className="tags-item for-sell">
                            FOR RENT
                          </Link>
                          <Link to="#" className="tags-item featured">
                            FEATURED
                          </Link>
                        </div>
                        Link
                  <Link to="/images/house/property-detail-1.jpg"
                  className="item-1"
                  data-fancybox="gallery"
                >
                  <img src="/images/house/property-detail-1.jpg" alt="Property image 1" />
                </Link>
                <Link
                  to="/images/house/property-detail-2.jpg"
                  className="item-2"
                  data-fancybox="gallery"
                >
                  <img src="/images/house/property-detail-2.jpg" alt="Property image 2" />
                </Link>
                <Link
                  to="/images/house/property-detail-3.jpg"
                  className="item-3"
                  data-fancybox="gallery"
                >
                  <img src="/images/house/property-detail-3.jpg" alt="Property image 3" />
                </Link>
                <Link
                  to="/images/house/property-detail-4.jpg"
                  className="item-4"
                  data-fancybox="gallery"
                >
                  <img src="/images/house/property-detail-4.jpg" alt="Property image 4" />
                </Link>
                <Link
                  to="/images/house/property-detail-5.jpg"
                  className="item-5"
                  data-fancybox="gallery"
                >
                  <img src="/images/house/property-detail-5.jpg" alt="Property image 5" />
                </Link>
                <Link
                  to="/images/house/property-detail-3.jpg"
                  className="more-photos"
                  data-fancybox="gallery"
                >
                  <i className="flaticon-gallery" />
                  <p>42 Photos</p>
                </Link>

              </div>
            </div>
                    {loading ? (
                    <p>Loading property data...</p>
                  ) : propertyData ? (
                    <div>
                  
                      <div className="col-xl-8">
                      <div className="content-wrap">
                        <div className="head-title wow fadeInUp">
                          <div>
                            <h3>{propertyData.property_name}</h3>
                            <div className="location">
                              <div className="icon">
                                <i className="flaticon-location" />
                              </div>
                              <div className="text-content">
                                 {propertyData.title}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="square">$ {propertyData.unit_price} /sq ft</div>
                            <div className="price">${propertyData.total_price}</div>
                          </div>
                        </div>
                        <div className="box-items">
                          <div className="item wow fadeInUp">
                            <div className="icon">
                              <i className="flaticon-city" />
                            </div>
                            <div className="text-content">{propertyData.type_of_ownership}</div>
                          </div>
                          <div className="item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="icon">
                              <i className="flaticon-hammer" />
                            </div>
                            <div className="text-content">Built in 1940</div>
                          </div>
                          <div className="item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon">
                              <i className="flaticon-minus-front" />
                            </div>
                            <div className="text-content">{propertyData.covered_area} Sq Ft</div>
                          </div>
                          <div className="item wow fadeInUp">
                            <div className="icon">
                              <i className="flaticon-hotel" />
                            </div>
                            <div className="text-content">{propertyData.bedrooms} Bedrooms</div>
                          </div>
                          <div className="item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="icon">
                              <i className="flaticon-bath-tub" />
                            </div>
                            <div className="text-content">{propertyData.bathrooms} Bathrooms</div>
                          </div>
                          <div className="item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon">
                              <i className="flaticon-garage" />
                            </div>
                            <div className="text-content">1 Garage</div>
                          </div>
                        </div>
                        <div className="desc">
                          <h4 className="wow fadeInUp">Description</h4>
                          <p className="wow fadeInUp">
                          <p style={{ marginBottom: '10px' }}>{propertyData.brief_description}</p>
  <p style={{ marginBottom: '10px' }}>Inhouse amenities - {propertyData.inhouse_amenities}</p>
  <p>External amenities - {propertyData.external_amenities}</p>
                          </p>
                        </div>
                        <div className="address">
                          <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                            <h4 className="mb-0">Address</h4>
                            <Link to="#" className="tf-button-green">
                              <i className="flaticon-location" />
                              Open On Google Maps
                            </Link>
                          </div>
                          <div className="list-item">
                            <div className="item wow fadeInUp">
                              <div className="text">Address</div>
                              <p>{propertyData.address}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Zip/Postal Code</div>
                              <p>{propertyData.zipcode}</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">City</div>
                              <p>{propertyData.city}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Area</div>
                              <p>{propertyData.locality}</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">State</div>
                              <p>{propertyData.state}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Country</div>
                              <p>{propertyData.country}</p>
                            </div>
                          </div>
                        </div>
                       {/* <div className="attachments">
                          <h4 className="wow fadeInUp">Property Attachments</h4>
                          <div className="wrap-file-item wow fadeInUp">
                            <Link to="#" className="file-item">
                              <div className="icon">
                                <img src="images/image-box/file-pdf.svg" alt="" />
                              </div>
                              <div>
                                <div className="name">Ultra-Demo-PDF File</div>
                                <div className="size">140.56 kb</div>
                              </div>
                            </Link>
                            <Link to="#" className="file-item">
                              <div className="icon">
                                <img src="images/image-box/file-pdf.svg" alt="" />
                              </div>
                              <div>
                                <div className="name">Ultra-Demo-PDF File</div>
                                <div className="size">140.56 kb</div>
                              </div>
                            </Link>
                          </div>
                        </div> */}
                        <div className="details">
                          <h4 className="wow fadeInUp">Details</h4>
                          <div className="list-item">
                            <div className="item wow fadeInUp">
                              <div className="text">Property ID:</div>
                              <p>{propertyData.property_no}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Garage:</div>
                              <p>1</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Price:</div>
                              <p>${propertyData.total_price}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Garage Size:</div>
                              <p>200 SqFt</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Property Size:</div>
                              <p>{propertyData.covered_area} Sq Ft</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Year Built:</div>
                              <p>2024</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Bedrooms:</div>
                              <p>{propertyData.bedrooms}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Property Type:</div>
                              <p>{propertyData.property_type}</p>
                            </div>
                            <div className="item wow fadeInUp">
                              <div className="text">Bathrooms:</div>
                              <p>{propertyData.bathroom}</p>
                            </div>
                            <div className="item wow fadeInUp" data-wow-delay="0.1s">
                              <div className="text">Property Status:</div>
                              <p>{propertyData.rent_sell}</p>
                            </div>
                          </div>
                        </div>


                     {/*  <div className="features">
                          <h4 className="wow fadeInUp">Facts &amp; Features</h4>
                          <p className="wow fadeInUp">
                            Lorem ipsum dolor sit amet, homero debitis temporibus in
                            mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu
                            per. Mediocrem torquatos deseruisse te eum commodo.
                          </p>
                          <ul>
                            <li>
                              <h5 className="wow fadeInUp">Interior Details</h5>
                              <div
                                className="wrap-check-ellipse wow fadeInUp"
                                data-wow-delay="0.1s"
                              >
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Equipped Kitchen</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Gym</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Laundry</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Media Room</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <h5 className="wow fadeInUp">Outdoor Details</h5>
                              <div
                                className="wrap-check-ellipse wow fadeInUp"
                                data-wow-delay="0.1s"
                              >
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Back yard</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Basketball court</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Front yard</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Garage Attached</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Hot Bath</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Pool</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <h5 className="wow fadeInUp">Utilities Central</h5>
                              <div
                                className="wrap-check-ellipse wow fadeInUp"
                                data-wow-delay="0.1s"
                              >
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Central Air</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Electricity</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Heating</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Natural Gas</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Ventilation</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Water</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <h5 className="wow fadeInUp">Other Features</h5>
                              <div
                                className="wrap-check-ellipse wow fadeInUp"
                                data-wow-delay="0.1s"
                              >
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Chair Accessible</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Elevator </p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Fireplace</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Smoke detectors</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>Washer and dryer</p>
                                </div>
                                <div className="check-ellipse-item">
                                  <div className="icon">
                                    <i className="flaticon-check" />
                                  </div>
                                  <p>WiFi</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div> */}
                        <div className="schedule">
                          <h4 className="wow fadeInUp">Schedule a tour</h4>
                          <form className="form-schedule">
                            <div className="cols">
                              <fieldset className="message">
                                <input
                                  type="date"
                                  name="date"
                                  defaultValue="2023-11-20"
                                />
                              </fieldset>
                              <div className="nice-select" tabIndex={0}>
                                <span className="current">Please Select Time</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    6 AM
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    12 AM
                                  </li>
                                  <li data-value="Sold" className="option">
                                    6 PM
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="widget-tabs style-4">
                              <ul className="widget-menu-tab">
                                <li className="item-title active">
                                  <span className="inner">In Person</span>
                                </li>
                                <li className="item-title">
                                  <span className="inner">Video Chat</span>
                                </li>
                              </ul>
                              <div className="widget-content-tab">
                                <div className="widget-content-inner active">
                                  <div className="cols">
                                    <fieldset className="name has-top-title">
                                      <input
                                        type="text"
                                        placeholder="Name"
                                        className=""
                                        name="text"
                                        tabIndex={2}
                                        defaultValue="Ali Tufan"
                                        aria-required="true"
                                        required=""
                                      />
                                      <label htmlFor="">Name</label>
                                    </fieldset>
                                    <fieldset className="phone has-top-title">
                                      <input
                                        type="number"
                                        placeholder="Phone"
                                        className=""
                                        name="number"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                      />
                                      <label htmlFor="">Phone</label>
                                    </fieldset>
                                    <fieldset className="email has-top-title">
                                      <input
                                        type="email"
                                        placeholder="Email"
                                        className=""
                                        name="email"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                      />
                                      <label htmlFor="">Email</label>
                                    </fieldset>
                                  </div>
                                  <fieldset className="message has-top-title">
                                    <textarea
                                      name="message"
                                      rows={4}
                                      placeholder="Your Comment"
                                      className=""
                                      tabIndex={2}
                                      aria-required="true"
                                      required=""
                                      defaultValue={"Lorem Ipsum Dolar Sit Amet"}
                                    />
                                    <label htmlFor="">Your Comment</label>
                                  </fieldset>
                                </div>
                                <div className="widget-content-inner">
                                  <div className="cols">
                                    <fieldset className="name has-top-title">
                                      <input
                                        type="text"
                                        placeholder="Name"
                                        className=""
                                        name="text"
                                        tabIndex={2}
                                        defaultValue="Ali Tufan"
                                        aria-required="true"
                                        required=""
                                      />
                                      <label htmlFor="">Name</label>
                                    </fieldset>
                                    <fieldset className="phone has-top-title">
                                      <input
                                        type="number"
                                        placeholder="Phone"
                                        className=""
                                        name="number"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                      />
                                      <label htmlFor="">Phone</label>
                                    </fieldset>
                                    <fieldset className="email has-top-title">
                                      <input
                                        type="email"
                                        placeholder="Email"
                                        className=""
                                        name="email"
                                        tabIndex={2}
                                        defaultValue=""
                                        aria-required="true"
                                        required=""
                                      />
                                      <label htmlFor="">Email</label>
                                    </fieldset>
                                  </div>
                                  <fieldset className="message has-top-title">
                                    <textarea
                                      name="message"
                                      rows={4}
                                      placeholder="Your Comment"
                                      className=""
                                      tabIndex={2}
                                      aria-required="true"
                                      required=""
                                      defaultValue={"Lorem Ipsum Dolar Sit Amet"}
                                    />
                                    <label htmlFor="">Your Comment</label>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                            <div className="button-submit">
                              <button
                                className="tf-button-primary w-full"
                                type="submit"
                              >
                                Submit a Tour Request
                                <i className="icon-arrow-right-add" />
                              </button>
                            </div>
                          </form>
                        </div>
                      {/*  <div className="plans">
                          <h4 className="wow fadeInUp">Floor Plans</h4>
                          <div className="widget-tabs style-3">
                            <ul className="widget-menu-tab wow fadeInUp">
                              <li className="item-title active">
                                <span className="inner">First Floor</span>
                              </li>
                              <li className="item-title">
                                <span className="inner">Second Floor</span>
                              </li>
                              <li className="item-title">
                                <span className="inner">Third Floor</span>
                              </li>
                            </ul>
                            <div className="widget-content-tab">
                              <div className="widget-content-inner active">
                                <div className="icons">
                                  <div className="item wow fadeInUp">
                                    <i className="flaticon-hotel" />
                                    <div className="text">Bedrooms</div>
                                    <p>4</p>
                                  </div>
                                  <div
                                    className="item wow fadeInUp"
                                    data-wow-delay="0.1s"
                                  >
                                    <i className="flaticon-bath-tub" />
                                    <div className="text">Bathrooms</div>
                                    <p>2</p>
                                  </div>
                                  <div
                                    className="item wow fadeInUp"
                                    data-wow-delay="0.2s"
                                  >
                                    <i className="flaticon-minus-front" />
                                    <div className="text">Size</div>
                                    <p>200 SqFt</p>
                                  </div>
                                  <div
                                    className="item wow fadeInUp"
                                    data-wow-delay="0.3s"
                                  >
                                    <i className="flaticon-tag" />
                                    <div className="text">Price</div>
                                    <p>$12.000</p>
                                  </div>
                                </div>
                                <p className="wow fadeInUp">
                                  Lorem ipsum dolor sit amet, homero debitis
                                  temporibus in mei, at sit voluptua antiopam
                                  hendrerit. Lorem epicuri eu per. Mediocrem torquatos
                                  deseruisse te eum commodo.
                                </p>
                                <img src="images/section/blueprint-1.png" alt="" />
                              </div>
                              <div className="widget-content-inner">
                                <div className="icons">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <div className="text">Bedrooms</div>
                                    <p>4</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <div className="text">Bathrooms</div>
                                    <p>2</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <div className="text">Size</div>
                                    <p>200 SqFt</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-tag" />
                                    <div className="text">Price</div>
                                    <p>$12.000</p>
                                  </div>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, homero debitis
                                  temporibus in mei, at sit voluptua antiopam
                                  hendrerit. Lorem epicuri eu per. Mediocrem torquatos
                                  deseruisse te eum commodo.
                                </p>
                                <img src="images/section/blueprint-1.png" alt="" />
                              </div>
                              <div className="widget-content-inner">
                                <div className="icons">
                                  <div className="item">
                                    <i className="flaticon-hotel" />
                                    <div className="text">Bedrooms</div>
                                    <p>4</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-bath-tub" />
                                    <div className="text">Bathrooms</div>
                                    <p>2</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-minus-front" />
                                    <div className="text">Size</div>
                                    <p>200 SqFt</p>
                                  </div>
                                  <div className="item">
                                    <i className="flaticon-tag" />
                                    <div className="text">Price</div>
                                    <p>$12.000</p>
                                  </div>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, homero debitis
                                  temporibus in mei, at sit voluptua antiopam
                                  hendrerit. Lorem epicuri eu per. Mediocrem torquatos
                                  deseruisse te eum commodo.
                                </p>
                                <img src="images/section/blueprint-1.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="calculator">
                          <h4 className="wow fadeInUp">Mortgage Calculator</h4>
                          <div className="pie-chart">
                            <div id="morris-donut-1" />
                            <div className="wrap-note">
                              <div className="item">
                                <div className="text">Principal and Interes</div>
                                <p>$37,800.00</p>
                              </div>
                              <div className="item">
                                <div className="text">Property Tax</div>
                                <p>$214,200.00</p>
                              </div>
                              <div className="item">
                                <div className="text">HOA fee</div>
                                <p>$252.00</p>
                              </div>
                            </div>
                          </div>
                          <form className="form-comment">
                            <fieldset className="text wow fadeInUp has-top-title">
                              <input
                                type="text"
                                placeholder="Total Amount"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Total Amount</label>
                            </fieldset>
                            <fieldset
                              className="text wow fadeInUp has-top-title"
                              data-wow-delay="0.1s"
                            >
                              <input
                                type="text"
                                placeholder="Down Payment"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue={15}
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Down Payment</label>
                            </fieldset>
                            <fieldset
                              className="text wow fadeInUp has-top-title"
                              data-wow-delay="0.2s"
                            >
                              <input
                                type="text"
                                placeholder="Interest Rate"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Interest Rate</label>
                            </fieldset>
                            <fieldset className="text wow fadeInUp has-top-title">
                              <input
                                type="text"
                                placeholder="Loan Terms (Years)"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Loan Terms (Years)</label>
                            </fieldset>
                            <fieldset
                              className="text wow fadeInUp has-top-title"
                              data-wow-delay="0.1s"
                            >
                              <input
                                type="text"
                                placeholder="Property Tax"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Property Tax</label>
                            </fieldset>
                            <fieldset
                              className="text wow fadeInUp has-top-title"
                              data-wow-delay="0.2s"
                            >
                              <input
                                type="text"
                                placeholder="Home Insurance"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Home Insurance</label>
                            </fieldset>
                            <fieldset className="text wow fadeInUp has-top-title">
                              <input
                                type="text"
                                placeholder="Monthly HOA Fees"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Monthly HOA Fees</label>
                            </fieldset>
                            <fieldset
                              className="text wow fadeInUp has-top-title"
                              data-wow-delay="0.1s"
                            >
                              <input
                                type="text"
                                placeholder="PMI"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">PMI</label>
                            </fieldset>
                          </form>
                        </div> */}
                        <div className="contact-info">
                          <div className="flex items-center justify-between gap30 flex-wrap wow fadeInUp">
                            <h4 className="mb-0">Contact Information</h4>
                            <Link to="#" className="tf-button-green">
                              View Listing
                            </Link>
                          </div>
                          <div className="person wow fadeInUp">
                            <div className="image">
                              <img src="images/sidebar/agent-1.png" alt="" />
                            </div>
                            <div className="content">
                              <div className="name">
                                <Link to="#">Jane Cooper</Link>
                              </div>
                              <p>sale@justhome.com</p>
                              <p>3-596 95 38 12</p>
                            </div>
                          </div>
                          <div className="title wow fadeInUp">
                            Enquire About This Property
                          </div>
                          <form className="form-comment">
                            <div className="cols">
                              <fieldset className="name wow fadeInUp has-top-title">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  className=""
                                  name="text"
                                  tabIndex={2}
                                  defaultValue="Ali Tufan"
                                  aria-required="true"
                                  required=""
                                />
                                <label htmlFor="">Name</label>
                              </fieldset>
                              <fieldset
                                className="phone wow fadeInUp has-top-title"
                                data-wow-delay="0.1s"
                              >
                                <input
                                  type="number"
                                  placeholder="Phone"
                                  className=""
                                  name="number"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                />
                                <label htmlFor="">Phone</label>
                              </fieldset>
                            </div>
                            <div className="cols">
                              <fieldset className="email wow fadeInUp has-top-title">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className=""
                                  name="email"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                />
                                <label htmlFor="">Email</label>
                              </fieldset>
                              <div
                                className="nice-select wow fadeInUp"
                                data-wow-delay="0.1s"
                                tabIndex={0}
                              >
                                <span className="current">Please Select Time</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    6 AM
                                  </li>
                                  <li data-value="For Ren" className="option">
                                    12 AM
                                  </li>
                                  <li data-value="Sold" className="option">
                                    6 PM
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <fieldset className="message wow fadeInUp has-top-title">
                              <textarea
                                name="message"
                                rows={4}
                                placeholder="Message"
                                className=""
                                tabIndex={2}
                                aria-required="true"
                                required=""
                                defaultValue={
                                  "Hello, I am interested in [Renovated apartment at last floor]"
                                }
                              />
                              <label htmlFor="">Message</label>
                            </fieldset>
                            <div className="checkbox-item wow fadeInUp">
                              <label>
                                <p>
                                  By submitting this form I agree to
                                  <span>Terms of Use</span>
                                </p>
                                <input type="checkbox" />
                                <span className="btn-checkbox" />
                              </label>
                            </div>
                            <div className="button-submit wow fadeInUp">
                              <button className="tf-button-primary" type="submit">
                                Request Information
                                <i className="icon-arrow-right-add" />
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="video" style={{ width: '100%',  margin: '0 auto 30px auto', maxWidth: '1200px' }}>
  <h4 className="wow fadeInUp">Video</h4>
  {propertyData?.video ? (
    <div
      className="video-wrap"
      style={{ width: '100%' }}
      dangerouslySetInnerHTML={{ __html: propertyData.video }}
    ></div>
  ) : (
    <p>No video available</p>
  )}
</div>

<div className="map">
                          <h4 className="wow fadeInUp">Map</h4>
                          <div className="wrap-map-v1">
                            <div
                              id="map-2"
                              className="row-height"
                              data-map-zoom={16}
                              data-map-scroll="true"
                            />
                          </div>
                        </div>
                        <div className="nearby">
      <h4 className="wow fadeInUp">What's Nearby?</h4>
      {propertyData ? (
        <div className="widget-tabs style-2 type-small">
          <ul className="widget-menu-tab wow fadeInUp">
            <li className="item-title active">
              <span className="inner"><FontAwesomeIcon icon={faHospital} /> Hospitals</span>
            </li>
            <li className="item-title">
              <span className="inner"><FontAwesomeIcon icon={faSchool} /> Schools</span>
            </li>
            <li className="item-title">
              <span className="inner"><FontAwesomeIcon icon={faTrain} /> Railway Stations</span>
            </li>
            <li className="item-title">
              <span className="inner"><FontAwesomeIcon icon={faPlane} /> Airports</span>
            </li>
            <li className="item-title">
              <span className="inner"><FontAwesomeIcon icon={faCity} /> City Center</span>
            </li>
            <li className="item-title">
              <span className="inner"><FontAwesomeIcon icon={faLandmark} /> Landmarks</span>
            </li>
          </ul>
          <div className="widget-content-tab">
            <div className="widget-content-inner active">
              <div className="wrap-nearby">
                <div className="nearby-item wow fadeInUp">
                  <FontAwesomeIcon icon={faHospital} className="icon" />
                  <div className="title">Nearby Hospital</div>
                  <p>Distance: <span>{propertyData.distance_hospital} km</span></p>
                </div>
                <div className="nearby-item wow fadeInUp">
                  <FontAwesomeIcon icon={faSchool} className="icon" />
                  <div className="title">Nearby School</div>
                  <p>Distance: <span>{propertyData.distance_school} km</span></p>
                </div>
                <div className="nearby-item wow fadeInUp">
                  <FontAwesomeIcon icon={faTrain} className="icon" />
                  <div className="title">Nearby Railway Station</div>
                  <p>Distance: <span>{propertyData.distance_railway_station} km</span></p>
                </div>
                <div className="nearby-item wow fadeInUp">
                  <FontAwesomeIcon icon={faPlane} className="icon" />
                  <div className="title">Nearby Airport</div>
                  <p>Distance: <span>{propertyData.distance_airport} km</span></p>
                </div>
                <div className="nearby-item wow fadeInUp">
                  <FontAwesomeIcon icon={faCity} className="icon" />
                  <div className="title">City Center</div>
                  <p>Distance: <span>{propertyData.distance_city_center} km</span></p>
                </div>
                <div className="nearby-item wow fadeInUp">
                  <FontAwesomeIcon icon={faLandmark} className="icon" />
                  <div className="title">Landmark</div>
                  <p>Neighbourhood: <span>{propertyData.landmark_neighbourhood}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading nearby information...</p>
      )}
    </div>
                        <div className="reviews-wrap">
                          <div className="flex justify-between items-center mb-40 wow fadeInUp">
                            <h4 className="mb-0">4 Reviews</h4>
                            <Link to="#" className="tf-button-green">
                              Leave a Review
                            </Link>
                          </div>
                          <ul>
                            <li className="wow fadeInUp">
                              <div className="image">
                                <img src="images/author/author-5.png" alt="" />
                              </div>
                              <div className="content">
                                <div className="ratings">
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                </div>
                                <div className="name">
                                  <Link to="#">Jane Cooper</Link>
                                </div>
                                <div className="time">April 06, 2024 at 7:55 pm</div>
                                <p>
                                  Beautiful home, very picturesque and close to
                                  everything in jtree! A little warm for a hot
                                  weekend, but would love to come back during the
                                  cooler seasons!
                                </p>
                              </div>
                            </li>
                            <li className="wow fadeInUp">
                              <div className="image">
                                <img src="images/author/author-6.png" alt="" />
                              </div>
                              <div className="content">
                                <div className="ratings">
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                  <i className="flaticon-star-1" />
                                </div>
                                <div className="name">
                                  <Link to="#">Jane Cooper</Link>
                                </div>
                                <div className="time">April 06, 2024 at 7:55 pm</div>
                                <p>
                                  Beautiful home, very picturesque and close to
                                  everything in jtree! A little warm for a hot
                                  weekend, but would love to come back during the
                                  cooler seasons!
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="leave-a-review">
                          <h4 className="wow fadeInUp">Leave A Review</h4>
                          <p className="wow fadeInUp">
                            Your email address will not be published. Required fields
                            are marked *
                          </p>
                          <div>
                            <p className="wow fadeInUp">Your Rating *</p>
                            <div className="ratings wow fadeInUp">
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                              <i className="flaticon-star-1" />
                            </div>
                          </div>
                          <form className="form-comment">
                            <fieldset className="message wow fadeInUp has-top-title">
                              <textarea
                                name="message"
                                rows={4}
                                placeholder="Your Comment"
                                className=""
                                tabIndex={2}
                                aria-required="true"
                                required=""
                                defaultValue={"Lorem Ipsum"}
                              />
                              <label htmlFor="">Your Comment</label>
                            </fieldset>
                            <div className="cols">
                              <fieldset className="name wow fadeInUp has-top-title">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  className=""
                                  name="text"
                                  tabIndex={2}
                                  defaultValue="Ali Tufan"
                                  aria-required="true"
                                  required=""
                                />
                                <label htmlFor="">Name</label>
                              </fieldset>
                              <fieldset className="email wow fadeInUp has-top-title">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className=""
                                  name="email"
                                  tabIndex={2}
                                  defaultValue="themesflat@gmail.com"
                                  aria-required="true"
                                  required=""
                                />
                                <label htmlFor="">Email</label>
                              </fieldset>
                            </div>
                            <fieldset className="website wow fadeInUp has-top-title">
                              <input
                                type="text"
                                placeholder="Website"
                                className=""
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                              <label htmlFor="">Website</label>
                            </fieldset>
                            <div className="checkbox-item wow fadeInUp">
                              <label>
                                <p>
                                  Save my name, email, and website in this browser for
                                  the next time I comment.
                                </p>
                                <input type="checkbox" />
                                <span className="btn-checkbox" />
                              </label>
                            </div>
                            <div className="button-submit wow fadeInUp">
                              <button className="tf-button-primary" type="submit">
                                Submit Review <i className="icon-arrow-right-add" />
                              </button>
                            </div>
                          </form>
                        </div>
                       {/* <div className="smilar-homes">
                          <h4 className="wow fadeInUp">Similar Homes</h4>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="box-dream has-border wow fadeInUp">
                                <div className="image">
                                  <div className="list-tags">
                                    <Link to="#" className="tags-item for-sell">
                                      FOR RENT
                                    </Link>
                                    <Link to="#" className="tags-item featured">
                                      FEATURED
                                    </Link>
                                  </div>
                                  <div className="button-heart">
                                    <i className="flaticon-heart-1" />
                                  </div>
                                  <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="/sasmita/buildimages/house/home-1.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="images/house/home-2.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="/images/house/home-3.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="sasmita/build/images/house/home-4.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-pagination box-dream-pagination" />
                                    <div className="box-dream-next swiper-button-next" />
                                    <div className="box-dream-prev swiper-button-prev" />
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="head">
                                    <div className="title">
                                      <Link to="property-single-v1.html">
                                        Home Pitt Street
                                      </Link>
                                    </div>
                                    <div className="price">$815,000</div>
                                  </div>
                                  <div className="location">
                                    <div className="icon">
                                      <i className="flaticon-location" />
                                    </div>
                                    <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                  </div>
                                  <div className="icon-box">
                                    <div className="item">
                                      <i className="flaticon-hotel" />
                                      <p>4 Beds</p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-bath-tub" />
                                      <p>3 Baths</p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-minus-front" />
                                      <p>2660 Sqft</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div
                                className="box-dream has-border wow fadeInUp"
                                data-wow-delay="0.1s"
                              >
                                <div className="image">
                                  <div className="list-tags">
                                    <Link to="#" className="tags-item for-sell">
                                      FOR SELL
                                    </Link>
                                  </div>
                                  <div className="button-heart">
                                    <i className="flaticon-heart-1" />
                                  </div>
                                  <div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="images/house/home-2.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="images/house/home-1.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="images/house/home-3.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="w-full">
                                          <img
                                            className="w-full"
                                            src="images/house/home-4.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-pagination box-dream-pagination" />
                                    <div className="box-dream-next swiper-button-next" />
                                    <div className="box-dream-prev swiper-button-prev" />
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="head">
                                    <div className="title">
                                      <Link to="property-single-v1.html">
                                        Luxury Mansion
                                      </Link>
                                    </div>
                                    <div className="price">$815,000</div>
                                  </div>
                                  <div className="location">
                                    <div className="icon">
                                      <i className="flaticon-location" />
                                    </div>
                                    <p>148-37 88th Ave, Jamaica, NY 11435</p>
                                  </div>
                                  <div className="icon-box">
                                    <div className="item">
                                      <i className="flaticon-hotel" />
                                      <p>4 Beds</p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-bath-tub" />
                                      <p>3 Baths</p>
                                    </div>
                                    <div className="item">
                                      <i className="flaticon-minus-front" />
                                      <p>2660 Sqft</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                   {/* <div className="col-xl-4">
                      <div className="property-single-sidebar po-sticky">
                        <div className="sidebar-item sidebar-request">
                          <div className="text">
                            Request a tour as early as <br />
                            <span>Today at 11:00AM</span>
                          </div>
                          <Link to="#" className="tf-button-primary w-full">
                            Schedule a Tour
                            <i className="icon-arrow-right-add" />
                          </Link>
                          <Link
                            to="#"
                            className="tf-button-primary w-full style-bg-white"
                          >
                            Contact an agent
                            <i className="icon-arrow-right-add" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  ) : (
                    <p>No property data found.</p>
                  )}
                </div>
              </div>
            </div>
            {/* End property-single-wrap */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySingle;
