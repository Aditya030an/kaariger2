import React, { useState, useEffect } from "react";
import { IoArrowBack, IoClose } from "react-icons/io5";

const pricingPerInch = {
  // frame: 45,
  // print: 10,
  // canvas: 20,
  // paper: 15,
  handMade: 25,
  print: 7,
};

const categoryPrice = {
  aestheticspremi: 0,
  artifacts: 0,
  bestseller: 0,
  cinemapremi: 0,
  gaadi: 0,
  kaarigar: 0,
  madira: 0,
  original: 0,
  handmade: 25,
  pencilpremi: 0,
  poster: 5,
  thepokerparlour: 0,
};

const ProductCart = ({ product, onClose, onAddToCart, category }) => {
  console.log("product", product);
  console.log("category", category);
  const productName = product?.title;
  const [artType, setArtType] = useState("print");
  const [price, setPrice] = useState(0);
  const [selectedFrame, setSelectedFrame] = useState("Matte Black");
  const [customWidth, setCustomWidth] = useState(product?.height || "");
  const [customHeight, setCustomHeight] = useState(product?.width || "");
  const [mainImage, setMainImage] = useState(
    product?.image || product?.wallImage
  );

  const frames = [
    { name: "Matte Black", color: "bg-black", borderColor: "#000000" },
    { name: "White", color: "bg-white border", borderColor: "#ffffff" },
    { name: "Cream", color: "bg-[#f5f5f5] border", borderColor: "#f5f5f5" },
    { name: "Oak", color: "bg-yellow-700", borderColor: "#b45309" },
    { name: "Walnut", color: "bg-amber-950", borderColor: "#451a03" },
    {
      name: "No Frame",
      color: "bg-transparent border",
      borderColor: "transparent",
    },
  ];
  const clockColor = [
    { name: "Matte Black", color: "bg-black", borderColor: "#000000" },
    { name: "White", color: "bg-white border", borderColor: "#ffffff" },
    { name: "Walnut", color: "bg-amber-950", borderColor: "#451a03" },
  ];

  useEffect(() => {
    if (
      product?.handmadeOption !== undefined &&
      product.handmadeOption === true
    ) {
      setArtType("handMade");
    }

    if (customWidth && customHeight) {
      const width = parseFloat(customWidth);
      const height = parseFloat(customHeight);
      const area = width * height;

      // Base rate from art type + media
      let rate;
      if (category === "kaarigarluxe") {
        if (artType === "handMade") {
          rate = 40;
        } else {
          rate = 10;
        }
      } else {
        if (artType === "handMade") {
          rate = 25;
        } else {
          rate = 7;
        }
      }

      setPrice(area * rate);
    } else if (category === "artifacts" || product?.resizeOption === false) {
      setPrice(product?.basePrice || 24000);
    } else {
      setPrice(0);
    }

    if (
      product?.handmadeFixPrice !== undefined ||
      product?.paintFixPrice !== undefined
    ) {
      if (artType === "handMade") {
        setPrice(product?.handmadeFixPrice);
      } else {
        setPrice(product?.paintFixPrice);
      }
    }
  }, [artType, customWidth, customHeight, category]);

  const handleAdd = () => {
    if (category !== "artifacts" && product?.resizeOption === undefined) {
      if (!customWidth || !customHeight) return;
    }

    if (category === "artifacts") {
      setPrice(product?.basePrice || 24000);
    }

    if (product?.resizeOption === false) {
      setPrice(product?.basePrice);
    }

    const width = parseFloat(customWidth) || 0;
    const height = parseFloat(customHeight) || 0;

    const cartItem = {
      ...product,
      width,
      height,
      artType,
      selectedFrame,
      price,
      isCustomSize: true,
      category,
    };
    onAddToCart(cartItem);
    onClose();
  };

  // Frame styling
  const getFrameBorderColor = () => {
    if (selectedFrame === "No Frame") return "transparent";
    const frame = frames.find((f) => f.name === selectedFrame);
    return frame ? frame.borderColor : "#000000";
  };

  const getFrameWidth = () => {
    if (selectedFrame === "No Frame") return "0px";
    return "10px";
  };

  return (
    <div className="fixed inset-0 z-50 bg-white w-screen h-screen overflow-y-auto ">
      <div className="max-w-[1200px] w-full h-full mx-auto px-4 py-2 flex flex-col justify-center gap-2">
        <button
          onClick={onClose}
          className="text-[22px] font-medium text-black flex items-center gap-1"
        >
          <IoArrowBack size={18} /> Back
        </button>
        {category !== "poster" && category !== "cinemapremi" && (
          <h4 className="text-2xl font-serif font-bold text-center">
            {/* Art Paint Decor Object Mixed Media Art Gallery Walls Custom Framing */}
            {productName}
          </h4>
        )}
        {category === "poster" && (
          <h4 className="text-2xl font-serif font-bold text-center">
            {/* Art Paint Decor Object Mixed Media Art Gallery Walls Custom Framing */}
            The Posters
          </h4>
        )}

        <div className="flex  flex-col md:flex-row items-center gap-8 ">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center gap-6">
            {/* Preview Section */}
            <div className="flex flex-col-reverse md:flex-row w-full lg:gap-4">
              {/* Thumbnails List */}
              <div className="flex md:flex-col gap-3 w-40 md:w-20">
                {[product?.image, product?.wallImage , product?.moreImage]
                  .filter(Boolean)
                  .map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 object-contain rounded border cursor-pointer ${
                        img === mainImage ? "border-2 border-black" : "border"
                      }`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
              </div>

              {/* Main Preview */}
              <div className="flex-1 flex items-center justify-center  rounded-md p-4">
                <img
                  src={mainImage}
                  alt="Main Preview"
                  className="w-[250px] h-[250px] sm:w-full sm:h-[400px] object-contain border-2 border-solid border-red-800"
                  style={{
                    border:
                      mainImage === product?.wallImage ||
                      mainImage === product?.moreImage ||
                      selectedFrame === "No Frame" ||
                      category === "artifacts"
                        ? "0px solid transparent"
                        : `${getFrameWidth()} solid ${getFrameBorderColor()}`,
                    borderRadius:
                      mainImage === product?.wallImage || 
                      mainImage === product?.moreImage || 
                      selectedFrame === "No Frame" ||
                      category === "artifacts"
                        ? "0px"
                        : "4px",
                    boxShadow:
                      mainImage === product?.wallImage ||
                      mainImage === product?.moreImage ||
                      selectedFrame === "No Frame" ||
                      category === "artifacts"
                        ? "none"
                        : "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            </div>

            {
              product?.description && category !== "artifacts" && <div className="text-[12px]">{product?.description}</div>
            }

            {category !== "artifacts" &&
              (product?.resizeOption !== undefined
                ? product.resizeOption === true
                : true) && (
                <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 px-2">
                  <div className="w-full flex items-center justify-between gap-1 text-base">
                    <span className="font-medium text-lg">
                      Price After Size Selection:
                    </span>
                    <p className="text-xl  font-semibold text-center">
                      ₹{" "}
                      {product?.resizeOption === false
                        ? product?.basePrice?.toLocaleString()
                        : null}
                      {category === "artifacts"
                        ? product?.basePrice?.toLocaleString() || 24000
                        : price?.toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Frame or Print */}
            {/* Handmade Button */}
            {category !== "artifacts" &&
              category !== "poster" &&
              (product?.handmadeOption !== undefined
                ? product.handmadeOption === true
                : true) && (
                <button
                  onClick={() => setArtType("handMade")}
                  className={`border px-4 py-6 w-full rounded font-medium cursor-pointer ${
                    artType === "handMade"
                      ? "bg-zinc-700 text-white"
                      : "bg-white"
                  }`}
                >
                  Handmade
                </button>
              )}

            {/* Print Button */}
            {category !== "artifacts" &&
              (product?.paintingOption !== undefined
                ? product.paintingOption === true
                : true) && (
                <button
                  onClick={() => setArtType("print")}
                  className={`border px-4 py-6 w-full rounded font-medium cursor-pointer ${
                    artType === "print" ? "bg-zinc-700 text-white" : "bg-white"
                  }`}
                >
                  Print
                </button>
              )}

            {category === "artifacts" &&
              productName === "Glitch Clock (Clay)" && (
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    Selected Clock Color: {selectedFrame}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {clockColor.map((frame) => (
                      <button
                        key={frame?.name}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center
        ${frame?.color} 
        ${selectedFrame === frame?.name ? "ring-2 ring-black" : ""}`}
                        onClick={() => setSelectedFrame(frame?.name)}
                        title={frame?.name}
                      >
                        {frame?.name === "No Frame" && (
                          <IoClose size={20} className="text-gray-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            {category !== "artifacts" && mainImage !== product?.wallImage && mainImage !== product?.moreImage && (
              <div>
                <h3 className="text-xl font-serif font-bold">Frame Style</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Selected Frame: {selectedFrame}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {frames.map((frame) => (
                    <button
                      key={frame?.name}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center
        ${frame?.color} 
        ${selectedFrame === frame?.name ? "ring-2 ring-black" : ""}`}
                      onClick={() => setSelectedFrame(frame?.name)}
                      title={frame?.name}
                    >
                      {frame?.name === "No Frame" && (
                        <IoClose size={20} className="text-gray-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product?.resizeOption === false
              ? null
              : category !== "artifacts" && (
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">
                      Enter Custom Size (Inches)
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Width
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          step="0.01"
                          value={customWidth}
                          placeholder="12.00"
                          onChange={(e) => setCustomWidth(e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Height
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          step="0.01"
                          value={customHeight}
                          placeholder="15.00"
                          onChange={(e) => setCustomHeight(e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                    </div>

                    {customWidth && customHeight && (
                      <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                        <p>
                          <b>Custom Size:</b> {customWidth} × {customHeight}{" "}
                          inches
                        </p>
                        <p>
                          <b>Area:</b>{" "}
                          {(
                            parseFloat(customWidth) * parseFloat(customHeight)
                          ).toFixed(2)}{" "}
                          sq inches
                        </p>
                      </div>
                    )}
                  </div>
                )}

            {/* Add the description */}
            {
              product?.description && category === "artifacts"  && <div className="">{product?.description}</div>
            }

            {/* Add to Cart */}
            {category !== "artifacts" && product?.resizeOption !== false && (
              <button
                onClick={handleAdd}
                disabled={!customWidth || !customHeight}
                className="w-full bg-zinc-700 text-white py-3 rounded hover:bg-zinc-800 disabled:bg-gray-300"
              >
                {!customWidth || !customHeight
                  ? "Please enter custom dimensions"
                  : "Add to Cart"}
              </button>
            )}
            {(category === "artifacts" || product?.resizeOption === false) && (
              <div className="w-full">
                <div className="w-full flex items-center justify-between gap-1 text-base mb-5">
                  <span className="font-medium text-lg">
                    Price Of Artifact:
                  </span>
                  <p className="text-xl  font-semibold text-center">
                    ₹ {price}
                  </p>
                </div>
                <button
                  onClick={handleAdd}
                  className="w-full bg-zinc-700 text-white py-3 rounded hover:bg-zinc-800 disabled:bg-gray-300"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
