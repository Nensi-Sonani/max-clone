
import { useDispatch, useSelector } from 'react-redux';
import { funFetchData } from '../redux/productreducer/Action'
import { Accordion, Spinner } from 'react-bootstrap';
import '../style/product.css'
import { useEffect, useState } from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";


const Product = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  //const [minValue2, setMinValue2] = useState(0);
  // const [maxValue2, setMaxValue2] = useState(0);
  let { data, isLoading, isError } = useSelector((store) => store.ProductReducer)

  let dispatch = useDispatch();


  const loadProduct = () => {
    dispatch(funFetchData)

  }
  const handleChange = () => {

  }

  useEffect(() => {
    loadProduct();
    //console.log(data)
  }, [])
  return (
    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 mx-auto d-flex'>
      <div className='col-md-2 col-lg-2 col-sm-2 col-xs-2 sidebar'>
        <h4 className='fileter_header'>FILTERS</h4>
        <div>
          <MultiRangeSlider
            min={100}
            max={2000}
            maxValue={1500}
            minValue={400}
            onInput={(e: ChangeResultt) => {
              setMinValue(e.minValue);
              setMaxValue(e.maxValue);
            }}
            // onChange={(e: ChangeResult) => {
            //   setMinValue2(e.minValue);
            //   setMaxValue2(e.maxValue);
            // }}
            label={false}
            ruler={false}
            style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
            barInnerColor="#0d6efd"
            thumbLeftColor="#ffffff"
            thumbRightColor="#ffffff"
          />
          <div className='d-flex justify-content-evenly range_filter mb-3'><input type="number" value={minValue} disabled></input>
            <input type="number" value={maxValue} disabled></input>
          </div>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header> Catagory</Accordion.Header>
            <Accordion.Body>
              <div className="form-check">
                <input type="checkbox" className='form-check-input' value='mens'
                  name="catagory" />
                <label className='form-check-label'>Men</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className='form-check-input' value='womens'
                  name="catagory"
                />
                <label className='form-check-label'>Women</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className='form-check-input' value='kids'
                  name="catagory"
                />
                <label className='form-check-label'>Kids</label>
              </div>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> Size</Accordion.Header>
            <Accordion.Body>
            <div className="form-check">
            <input type="checkbox" className='form-check-input' value='mens'
              name="catagory" />
            <label className='form-check-label'>Men</label>
          </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" >
            <Accordion.Header> Style</Accordion.Header>
            <Accordion.Body>


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Type</Accordion.Header>
            <Accordion.Body>


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='col-md-10 col-lg-12 col-sm-10 col-xs-10  mx-auto'>
        {
          isError ? (<div className="alert alert-danger" role="alert">T
            Some thing went wrong !
          </div>
          )
            : null
        }
        {isLoading && !isError
          ? (<div className='mt-5'><Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" /></div>)
          : null
        }

        {

          data.length > 0 && (<div className='products'>
            {
              data.map((item) => {
                return (
                  <div className='product__single' key={item.id}>


                    <div className='image'>  <img src={item.image} alt={item.title}></img></div>
                    <div className='price'> &#8377; {item.price}</div>
                    <div className='title'>{item.title}</div>
                    <div className='d-flex wrap justify-content-around'>
                      <div className='wrap-img'>
                        <img src={item.image} alt="p" ></img>
                        <span>color</span>
                      </div>
                      <div>

                        <select required style={{ padding: "0.8rem", borderRadius: "0" }} className='form-control mb-2 size-select' value="soze"
                        >
                          <option value="">Select Size</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      </div>
                    </div>
                    <button className='btn btn-primary btn_cart' >ADD TO BAG</button>
                  </div>
                );
              })
            }
          </div>
          )

        }

      </div>

    </div>
  )
}

export default Product