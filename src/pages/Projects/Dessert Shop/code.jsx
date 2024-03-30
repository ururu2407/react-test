import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export const DessertShopCode = () => {
    const codeString = `
    constructor(props) {
        super(props);
        this.state = {
            cartItemsActive: false,
            totalNumberOfItems: 0,
            cartSubTotal: 0,
            cartTaxes: 0,
            cartTotal: 0,
            selectedCategory: "Cupcake",
            items: [],
            taxRate: 8.25,
            itemCounts: {},
            cartItemsHeight: 0,
            itemsInCart: {},
            addToCartClicked: {},
            removeClicked: {}, 

        };
    }

    products = [
        {
            id: 1,
            name: "Vanilla Cupcakes (6 Pack)",
            price: 12.99,
            category: "Cupcake",
            descriprion: "Classic vanilla-flavored cupcakes perfect for any occasion.",
            img1: 'https://i.imgur.com/FGC5GiU.jpg',
            img2: 'https://i.imgur.com/BHKN1gi.jpg'
        },
        {
            id: 2,
            name: "French Macaroon",
            price: 3.99,
            category: "Macaroon",
            descriprion: "Delicate almond meringue cookies with a creamy filling, a French delicacy.",
            img1: 'https://i.imgur.com/b1koFyh.jpg',
            img2: 'https://i.imgur.com/M4gLraG.jpg'
        },
        {
            id: 3,
            name: "Pumpkin Cupcake",
            price: 3.99,
            category: "Cupcake",
            descriprion: " Moist and flavorful cupcakes with a hint of pumpkin spice, ideal for autumn.",
            img1: 'https://i.imgur.com/mFhoSL9.jpg',
            img2: 'https://i.imgur.com/3ShOePl.jpg'
        },
        {
            id: 4,
            name: "Chocolate Cupcake",
            price: 5.99,
            category: "Cupcake",
            descriprion: "Rich and decadent chocolate cupcakes topped with creamy frosting.",
            img1: 'https://i.imgur.com/hB4j8Vn.jpeg',
            img2: 'https://i.imgur.com/OXHVJwx.jpeg'
        },
        {
            id: 5,
            name: "Chocolate Pretzels (4 Pack)",
            price: 10.99,
            category: "Pretzel",
            descriprion: "Crunchy pretzels coated in smooth chocolate for a sweet and salty treat.",
            img1: 'https://i.imgur.com/m1DOux1.jpg',
            img2: 'https://i.imgur.com/25JX1tY.jpg'
        },
        {
            id: 6,
            name: "Strawberry Ice Cream",
            price: 2.99,
            category: "Ice Cream",
            descriprion: "Creamy strawberry-flavored ice cream loaded with real fruit chunks.",
            img1: 'https://i.imgur.com/v8IRwVk.jpg',
            img2: 'https://i.imgur.com/ACCdbOz.jpg'
        },
        {
            id: 7,
            name: "Chocolate Macaroons (4 Pack)",
            price: 9.99,
            category: "Macaroon",
            descriprion: "Chewy coconut macaroons dipped in luxurious chocolate.",
            img1: 'https://i.imgur.com/QGXB8JG.jpg',
            img2: 'https://i.imgur.com/WyMvxzc.jpg'
        },
        {
            id: 8,
            name: "Strawberry Pretzel",
            price: 4.99,
            category: "Pretzel",
            descriprion: "Sweet and salty pretzel rods coated in strawberry-flavored candy.",
            img1: 'https://i.imgur.com/cGSOXPJ.jpg',
            img2: 'https://i.imgur.com/sIdlJMa.jpg'
        },
        {
            id: 9,
            name: "Butter Pecan Ice Cream",
            price: 2.99,
            category: "Ice Cream",
            descriprion: "Velvety butter pecan ice cream packed with crunchy pecan pieces.",
            img1: 'https://i.imgur.com/l7HKvq3.jpg',
            img2: 'https://i.imgur.com/8ps51QE.jpg'
        },
        {
            id: 10,
            name: "Rocky Road Ice Cream",
            price: 2.99,
            category: "Ice Cream",
            descriprion: "Creamy chocolate ice cream loaded with marshmallows and nuts for a delightful texture.",
            img1: 'https://i.imgur.com/SVqAo2X.jpg',
            img2: 'https://i.imgur.com/TTrF1Zy.jpg'
        },
        {
            id: 11,
            name: "Vanilla Macaroons (5 Pack)",
            price: 11.99,
            category: "Macaroon",
            descriprion: "Coconut macaroons infused with fragrant vanilla flavor.",
            img1: 'https://i.imgur.com/GQ9Q9q6.jpg',
            img2: 'https://i.imgur.com/xIib482.jpg'
        },
        {
            id: 12,
            name: "Lemon Cupcakes (4 Pack)",
            price: 12.99,
            category: "Cupcake",
            descriprion: "Zesty lemon-flavored cupcakes topped with tangy lemon frosting.",
            img1: 'https://i.imgur.com/MRAO0uq.jpg',
            img2: 'https://i.imgur.com/AfADCoR.jpg'
        },
    ];

    addItem = (id, count) => {
        const product = this.products.find(item => item.id === id);
    
        if (product) {
            const existingItemIndex = this.state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                const updatedItems = [...this.state.items];
                updatedItems[existingItemIndex].count += count;
                this.setState({
                    items: updatedItems,
                    addToCartClicked: { ...this.state.addToCartClicked, [id]: true },
                    totalNumberOfItems: this.state.totalNumberOfItems + count - 1 
                }, () => {
                    this.addToCart(product.price * count);
                });
            } else {
                const newItem = { ...product, count };
                const items = [...this.state.items, newItem];
                this.setState({
                    items,
                    itemsInCart: { ...this.state.itemsInCart, [id]: true },
                    addToCartClicked: { ...this.state.addToCartClicked, [id]: true },
                    totalNumberOfItems: this.state.totalNumberOfItems + count - 1
                },
                    () => {
                        this.addToCart(product.price * count);
                    });
            }
        }
    };

    removeItem = (id) => {
        const deletedItem = this.state.items.find(item => item.id === id);
        const price = deletedItem.price * deletedItem.count;
        this.setState(prevState => ({
            items: prevState.items.filter(item => item.id !== id),
            totalNumberOfItems: prevState.totalNumberOfItems - deletedItem.count,
            cartSubTotal: parseFloat((prevState.cartSubTotal - price).toFixed(2)),
            addToCartClicked: { ...this.state.addToCartClicked, [id]: false }
        }), () => {
            this.calculateTaxes();
            this.calculateTotal();
        });
    };


    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category });
    };

    calculateTaxes = () => {
        const taxRate = 8.25;
        this.setState({
            cartTaxes: parseFloat(((taxRate / 100) * this.state.cartSubTotal).toFixed(2)),
        });
    };

    calculateTotal = () => {
        this.setState(prevState => ({
            cartTotal: parseFloat((prevState.cartSubTotal + prevState.cartTaxes).toFixed(2)),
            cartItemsHeight: prevState.cartItemsActive ? this.calculateCartItemsHeight() : 0,
        }));
    };

    addToCart = (price) => {
        this.setState(prevState => ({
            totalNumberOfItems: prevState.totalNumberOfItems + 1,
            cartSubTotal: parseFloat((prevState.cartSubTotal + price).toFixed(2)),

        }), () => {
            this.calculateTaxes();
            this.calculateTotal();
        });
    };

    clearCart = () => {
        this.setState({
            totalNumberOfItems: 0,
            cartSubTotal: 0,
            cartTaxes: 0,
            cartTotal: 0,
            items: [],
            addToCartClicked: {},
        });
        this.setState(prevState => ({
        }), () => {
            this.calculateTotal();
        });
    }

    toggleCartItems = () => {
        this.setState(prevState => ({
            cartItemsActive: !prevState.cartItemsActive,
            cartItemsHeight: !prevState.cartItemsActive ? this.calculateCartItemsHeight() : 0,
        }));
    };
    calculateCartItemsHeight() {
        const cartItemsElement = document.querySelector('.cart-items');
        return cartItemsElement ? cartItemsElement.scrollHeight : 0;
    }
    `;
    const [copy, setCopy] = useState(false)
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Code</Typography>
                <Box overflow={'auto'} borderRadius={'12px'} paddingBottom={'10px'} bgcolor={'rgb(40, 44, 52)'}>
                    <Box
                        bgcolor={'#44475a'}
                        padding={'4px'}
                        paddingLeft={'10px'}
                        paddingRight={'10px'}
                        color={'primary.light'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Typography variant='body2'>Example Code</Typography>
                        {copy ? (
                            <Button variant="text"
                                sx={{
                                    color: 'primary.light',
                                    textTransform: 'none',
                                    gap: '5px'
                                }}
                            >
                                <CheckIcon sx={{ height: '16px', width: '16px' }} />
                                <Typography variant='body2'>Copied!</Typography>
                            </Button>
                        ) : (
                            <Button variant="text"
                                sx={{
                                    color: 'primary.light',
                                    textTransform: 'none',
                                    gap: '5px'
                                }} onClick={() => {
                                    navigator.clipboard.writeText(codeString)
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false)
                                    }, 3000)
                                }}
                            >
                                <ContentCopyIcon sx={{ height: '16px', width: '16px' }} />
                                <Typography variant='body2'>Copy Code</Typography>
                            </Button>
                        )}
                    </Box>
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        customStyle={{
                            fontSize: "16px",
                            maxHeight: "700px",
                            margin: '0'
                        }}
                        wrapLongLines={true}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </Box>
            </Box>
        </>
    )
}