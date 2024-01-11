
import { useDispatch, useSelector } from 'react-redux';
import { funFetchData } from '../redux/productreducer/Action'
import { Accordion, Spinner } from 'react-bootstrap';
import '../style/product.css'
import { useEffect, useState } from 'react';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { Link, useParams, useSearchParams } from 'react-router-dom';


const Product = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [isPriceChange, setIsPriceChange] = useState(false)
  let [filter, setFilter] = useState({
    param: []
  });
  const arrayColor = [
    "blue", "pink", "green", "yellow", "grey", "purple", "brown", "orange", "beige", "red", "white", "maroon", "black"
  ]
  const arrayCategory = ["men", "women", "Girl", "boy"]
  const arraySize = ["s", "m", "l", "xl"]
  //const [minValue2, setMinValue2] = useState(0);
  // const [maxValue2, setMaxValue2] = useState(0);
  let { data, isLoading, isError } = useSelector((store) => store.ProductReducer)


  let category = "";
  let dispatch = useDispatch();
  //product by category
  let catParam = useParams();
  let filterQuery = "";
  let tmpFilter = "";
  if (Object.keys(catParam).length > 0)
    category = catParam.category;

  if (category !== null && category !== "") {
    // alert(cat)
    filterQuery = `?category=${category}`
  }


  if (filter.param.length > 0) {

    tmpFilter = filter.param;
    if (filterQuery == "")
      filterQuery = "?" + tmpFilter
    else
      filterQuery = filterQuery + tmpFilter
  }
 

  const loadProduct = () => {
    //if (isPriceChange) filterQuery = filterQuery + "&min=" + minValue + "&max=" + maxValue
    dispatch(funFetchData(filterQuery))
  }
  const handleResetFilter = () => {
    let query = ""
    if (category !== null && category !== "")
      query = `?category=${category}`
    console.log(query, category);
    dispatch(funFetchData(query))
  }

  const handleChange = (e) => {
    const { value, checked, name } = e.target;
    const { param } = filter;
    let query = "";
    if (name == "color")
      query = "&color=";
    else if (name == "size")
      query = "&size="
    else if (name == "category")
      query = "&category="

    if (checked) {
      setFilter({
        param: [...param, query + value],
      });
    }
    else {
      setFilter({
        param: param.filter((e) => e !== query + value),
      });
    }

  }
  let [sorting, setSorting] = useSearchParams();
  let sort = sorting.get("sort");
  const handleSorting = (e) => {
    const { value } = e.target;
    setSorting({ sort: value })
  }
  if (sort == "lth") {
    data.sort((a, b) => a.price - b.price);
  }
  else if (sort == "htl") {
    data.sort((a, b) => b.price - a.price);
  }
  useEffect(() => {
    loadProduct();
  }, [filter, category,isPriceChange])
  return (
    <div className='col-md-10 col-lg-10 col-sm-10 col-xs-10 mx-auto d-flex'>
      <div className='col-md-3 col-lg-3 col-sm-3 col-xs-3 sidebar'>
        <div className='  '><h6 className='fileter_header'>Sort BY</h6> <select style={{ borderRadius: "0" }}
          className='form-control mb-2 '
          onChange={handleSorting}
        >
          <option value="all" selected> select</option>
          <option value="lth"> Price - Low To High</option>
          <option value="htl"> Price - High To Low</option>
        </select></div>
        <h4 className='fileter_header'>FILTERS <span className='resetfil' onClick={handleResetFilter} >Clear All</span> </h4>
        <div>
          <MultiRangeSlider
            min={100}
            max={5000}
            maxValue={1500}
            minValue={400}
            onInput={(e: ChangeResult) => {
              setIsPriceChange(true)
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
              {
                arrayCategory.map((item) => {
                  return (
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' value={item}
                        name="category" onChange={handleChange} />
                      <label className='form-check-label capit' >{item}</label>
                    </div>
                  )
                })

              }

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> Size</Accordion.Header>
            <Accordion.Body>
              {
                arraySize.map((item) => {
                  return (
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' value={item}
                        name="size"
                        onChange={handleChange}
                      />
                      <label className='form-check-label capit'>{item}</label>
                    </div>
                  )
                })

              }
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" >
            <Accordion.Header> Color</Accordion.Header>DS
            <Accordion.Body>

              {
                arrayColor.map((item) => {
                  return (
                    <div className="form-check">
                      <input style={{ border: `3px solid ${item}` }} type="checkbox" className='form-check-input' value={item}
                        name="color"
                        onChange={handleChange} />
                      <label className='form-check-label capit'>{item}</label>
                    </div>
                  )
                })

              }
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Type</Accordion.Header>
            <Accordion.Body>


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='col-md-10 col-lg-10 col-sm-10 col-xs-10  mx-auto'>
        {
          isError ? (<div className="alert alert-danger" role="alert">
            Please wait for rendering products it will take some time. . . .
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

          data.length > 0 && (<div className=''>
            <div className='products'>
              {
                data.map((item) => {
                  return (

                    <div className='product__single' key={item._id}>

                      <Link className='plink' to={`/productdetail/${item._id}`} >
                        <div className='image'>  <img src={item.image[0]} alt={item.title}></img></div>
                        <div className='price'> &#8377; {item.price}</div>
                        <div className='title'>{item.title}</div>
                      </Link>
                      <div className='d-flex wrap justify-content-around'>
                        <div className='wrap-img'>
                          <img style={{ background: `${item.color}` }} src={item.image[0]} alt="p" ></img>
                          <span>color</span>
                        </div>
                        <div>

                          <select required style={{ padding: "0.8rem", borderRadius: "0" }} className='form-control mb-2 size-select' value={item.size}
                          >

                            <option value="s"> Size S</option>
                            <option value="m">Size M</option>
                            <option value="l">Size L</option>
                            <option value="xl">Size XL</option>
                          </select>

                        </div>
                      </div>
                      <Link className='plink' to={`/productdetail/${item._id}`} > <button className='btn btn-primary btn_cart' >More...</button>
                      </Link>
                    </div>
                  );
                })
              }
            </div></div>
          )

        }

      </div>

    </div>
  )
}

export default Product
