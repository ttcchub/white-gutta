"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.06c83ce2.png","height":1815,"width":5009,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOElEQVR42gXAQQ2AIAAAwCvg2wIEsYcRLGECN1+M8YQHG3SAaIzgwukRJZ2qGaal+H102esWHLABC/EKTRHsBWQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 3233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useStateContext),
/* harmony export */   "s": () => (/* binding */ StateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// global changes 


// toaster for notifications

const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// 
const StateContext = ({ children  })=>{
    const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //   empty array in UseState to show correctly passed product and qnt through pop up box
    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    let foundProduct;
    let index;
    const onAdd = (product, quantity)=>{
        const checkProductInCart = cartItems.find((item)=>item._id === product._id);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + quantity);
        // the idea to put the same item on place of existing item not as a new one in card, so it would stack in quantity  amount of exact item
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct)=>{
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                };
            });
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity; // updating it 
            setCartItems([
                ...cartItems,
                {
                    ...product
                }
            ]);
        }
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(`${qty} ${product.name} added to the cart.`);
    };
    const onRemove = (product)=>{
        foundProduct = cartItems.find((item)=>item._id === product._id);
        const newCartItems = cartItems.filter((item)=>item._id !== product._id);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    };
    // we are not mutating final object here with quantity of items passed in card , we identifing it as a new object giving the quanity of items a new object constant which will prevent mutation process 
    // not catItems -> newCartItems which will register them separatly 
    const toggleCartItemQuanitity = (id, value)=>{
        foundProduct = cartItems.find((item)=>item._id === id);
        index = cartItems.findIndex((product)=>product._id === id);
        const newCartItems = cartItems.filter((item)=>item._id !== id);
        if (value === "inc") {
            setCartItems([
                ...newCartItems,
                {
                    ...foundProduct,
                    quantity: foundProduct.quantity + 1
                }
            ]);
            setTotalPrice((prevTotalPrice)=>prevTotalPrice + foundProduct.price);
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + 1);
        } else if (value === "dec") {
            if (foundProduct.quantity > 1) {
                setCartItems([
                    ...newCartItems,
                    {
                        ...foundProduct,
                        quantity: foundProduct.quantity - 1
                    }
                ]);
                setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price);
                setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities - 1);
            }
        }
    };
    const incQty = ()=>{
        setQty((prevQty)=>prevQty + 1);
    };
    const decQty = ()=>{
        setQty((prevQty)=>{
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    };
    return(// colour check of correctly written components or props 
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuanitity,
            onRemove,
            setCartItems,
            setTotalPrice,
            // handleCheckout,
            setTotalQuantities
        },
        children: children
    }));
};
const useStateContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;