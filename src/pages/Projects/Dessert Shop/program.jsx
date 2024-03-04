import React, { Component, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, useTheme } from '@mui/material';
import { PrimaryButton } from '../../../components/customs';
import { useSwipeable } from 'react-swipeable';
import { PlusIcon, MinusIcon, ChevronDownIcon, CakeIcon, MacaroonIcon, PretzelIcon, IceCreamIcon, ShoppingIcon } from '../../../utils/icons';
import './slider.scss';

export const Slider = ({ img1, img2 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? 1 : 0));
    };

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? 1 : 0));
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
    });

    const handleMouseDown = (e) => {
        const startX = e.pageX;
        const handleMouseUp = (e) => {
            const endX = e.pageX;
            if (startX - endX > 5) {
                nextSlide();
            } else if (endX - startX > 5) {
                prevSlide();
            }
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <Box sx={{
            [theme.breakpoints.only('md')]: {
                width: '700px',
            }
        }}>
            <div
                className="slider-container"
                borderRadius="12px"
                color="primary.light"
                {...handlers}
                style={{
                    userSelect: 'none',
                }}
            >
                <div
                    className="slider"
                    style={{
                        color: 'primary.light',
                        transform: `translateX(-${currentIndex * 85}%)`,
                    }}
                    onMouseDown={handleMouseDown}
                >
                    <Box
                        className="slide"
                        color="primary.light"
                        objectFit="cover"
                    >
                        <img
                            style={{
                                borderRadius: '12px',
                                height: '100%',
                                width: currentIndex === 0 ? '97.412%' : '0px',
                                objectFit: 'cover',
                                transition: 'width 0.5s ease',
                                transitionDelay: currentIndex === 0 ? '0s' : '0.5s',
                                pointerEvents: 'none'
                            }}
                            src={img1}
                            alt=""
                        />
                    </Box>
                    <Box className="slide" color="primary.light" objectFit="cover">
                        <img
                            style={{
                                borderRadius: '12px',
                                width: currentIndex === 0 ? '17.712%' : '97.412%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'width 0.5s ease',
                                pointerEvents: 'none'
                            }}
                            src={img2}
                            alt=""
                        />
                    </Box>
                    <Box className="slide" color="primary.light" objectFit="cover">
                        <img
                            style={{
                                borderRadius: '12px',
                                width: '17.712%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'width 0.5s ease',
                                pointerEvents: 'none'
                            }}
                            src={img1}
                            alt=""
                        />
                    </Box>
                </div>
            </div>
        </Box>
    );
};
export class DessertShopProgram extends Component {
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
                // Уже существует, увеличиваем количество
                const updatedItems = [...this.state.items];
                updatedItems[existingItemIndex].count += count;
                this.setState({
                    items: updatedItems,
                    addToCartClicked: { ...this.state.addToCartClicked, [id]: true },
                    totalNumberOfItems: this.state.totalNumberOfItems + count - 1 // Увеличиваем количество товаров на добавленное количество
                }, () => {
                    this.addToCart(product.price * count);
                });
            } else {
                // Новый продукт
                const newItem = { ...product, count };
                const items = [...this.state.items, newItem];
                this.setState({
                    items,
                    itemsInCart: { ...this.state.itemsInCart, [id]: true },
                    addToCartClicked: { ...this.state.addToCartClicked, [id]: true },
                    totalNumberOfItems: this.state.totalNumberOfItems + count - 1// Увеличиваем количество товаров на добавленное количество
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
            addToCartClicked: {}, // Сбрасываем состояние кнопок "Add to cart" на пустой объект
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
    render() {
        const filteredProducts = this.products.filter(product => product.category === this.state.selectedCategory);

        return (
            <>
                <Box marginBottom={'20px'}>
                    <Typography
                        variant='headline'
                        color='primary.light'
                    >Dessert Shop</Typography>
                </Box>
                <Box display={'grid'} gap={'20px'}>
                    <Box color={'primary.light'}
                        borderRadius={'16px'}
                        boxShadow={'0px 0px 4px 0px #000000'}
                        padding={'24px 16px 16px'}
                        height={'fit-content'}
                    >
                        <Box
                            position={'relative'}
                            overflow={'hidden'}
                            display={'grid'} gap={'8px'}
                        >
                            <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                                zIndex={200}
                                backgroundColor={'primary.main'}>
                                <Typography variant="title">Your cart</Typography>
                                <button className='clear-cart' padding='0' onClick={this.clearCart} >Clear Cart</button>
                            </Box>
                            <Box className={`cart-items ${this.state.cartItemsActive ? 'active' : ''}`}>
                                {this.state.items.length > 0 && (
                                    <Box display={'grid'} gap={'8px'} paddingBottom={'16px'} marginBottom={'16px'} borderBottom={'1px solid #2C2C2B'}>
                                        {this.state.items.map(item => (
                                            <Box key={item.id}>
                                                <Typography variant="body" fontWeight={'Light'}>{`${item.count}x`} {item.name}: </Typography>
                                                <Typography variant="body" fontWeight={'Light'}>${item.price}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                                <Box display={'grid'} gap={'8px'} >
                                    <Typography variant="body" fontWeight={'Light'}>Total Number of items: {this.state.totalNumberOfItems}</Typography>
                                    <Typography variant="body" fontWeight={'Light'}>Subtotal: ${this.state.cartSubTotal}</Typography>
                                    <Typography variant="body" fontWeight={'Light'}>Taxes: ${this.state.cartTaxes}</Typography>
                                </Box>
                            </Box>
                            <Box className={`cart-total ${this.state.cartItemsActive ? 'active' : ''}`}
                                position={'relative'}
                                zIndex={200}
                                backgroundColor={'primary.main'}
                                paddingTop={'6px'}
                                style={{
                                    transitionBehavior: 'normal',
                                    transitionDuration: '0.4s',
                                    transitionDelay: '0s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'unset',
                                    marginTop: `${this.state.cartItemsHeight}px`

                                }}>
                                <Typography variant="body" fontWeight={'Medium'}>Total: ${this.state.cartTotal}</Typography>
                                <button className={`btn chevron-down ${this.state.cartItemsActive ? 'active' : ''}`} onClick={this.toggleCartItems}>
                                    <ChevronDownIcon />
                                </button>
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' flexWrap={'wrap'} justifyContent={'space-around'}>
                        <button className={this.state.selectedCategory === 'Cupcake' ? 'category-btn active' : 'category-btn'} onClick={() => this.handleCategoryClick('Cupcake')}>
                            <Box className='category-icon' display={'flex'} flexDirection={'column'} alignItems={'center'} >
                                <Box className='icon' width={'48px'}
                                    height={'48px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}>
                                    <CakeIcon />
                                </Box>
                                <Typography className='category-text' variant='body3' fontWeight={'Light'} >Cupcakes</Typography>
                            </Box>
                        </button>
                        <button className={this.state.selectedCategory === 'Macaroon' ? 'category-btn active' : 'category-btn'} onClick={() => this.handleCategoryClick('Macaroon')}>
                            <Box className='category-icon' display={'flex'} flexDirection={'column'} alignItems={'center'} >
                                <Box className='icon' width={'48px'}
                                    height={'48px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}>
                                    <MacaroonIcon />
                                </Box>
                                <Typography className='category-text' variant='body3' fontWeight={'Light'} >Macaroons</Typography>
                            </Box>
                        </button>
                        <button className={this.state.selectedCategory === 'Pretzel' ? 'category-btn active' : 'category-btn'} onClick={() => this.handleCategoryClick('Pretzel')}>
                            <Box className='category-icon'>
                                <Box className='icon'>
                                    <PretzelIcon />
                                </Box>
                                <Typography className='category-text' variant='body3' fontWeight={'Light'} >Pretzels</Typography>
                            </Box>
                        </button>
                        <button className={this.state.selectedCategory === 'Ice Cream' ? 'category-btn active' : 'category-btn'} onClick={() => this.handleCategoryClick('Ice Cream')}>
                            <Box className='category-icon' display={'flex'} flexDirection={'column'} alignItems={'center'} >
                                <Box className='icon' width={'48px'}
                                    height={'48px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}>
                                    <IceCreamIcon />
                                </Box>
                                <Typography className='category-text' variant='body3' fontWeight={'Light'}>Ice Cream</Typography>
                            </Box>
                        </button>
                    </Box>
                    <Box display={'flex'} flexWrap={'wrap'} gap={'20px'}>
                        {filteredProducts.map(({ id, img1, img2, name, price, descriprion }) => (
                            <Box key={id} display={'grid'} gap={'20px'}
                            >
                                <Slider img1={img1} img2={img2} />
                                <Box display={'grid'} gap={'8px'}>
                                    <Box color={'primary.light'} display={'flex'} justifyContent={'space-between'}>
                                        <Typography variant='title' fontWeight={'Medium'}>{name}</Typography>
                                        <Box display={'flex'} alignItems={'end'}>
                                            <Typography variant='title'
                                                color={'primary.primary'}
                                                fontWeight={'Medium'}
                                                fontSize={'13px'}
                                            >$</Typography>
                                            <Typography fontWeight={'Medium'} variant='title'>{price}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant='body2'
                                        color={'primary.light'}
                                        fontWeight={'Light'}>{descriprion}</Typography>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} gap={'24px'}>
                                    <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                                        <button className='btn'
                                            onClick={() => this.setState(prevState => ({ addToCartClicked: { ...this.state.addToCartClicked, [id]: false }, itemCounts: { ...prevState.itemCounts, [id]: (prevState.itemCounts[id] || 1) - 1 } }))} disabled={this.state.itemCounts[id] <= 1}
                                        >
                                            <MinusIcon />
                                        </button>
                                        <Typography variant='body1'
                                            color={'primary.light'}
                                            fontWeight={'Medium'}>{(this.state.itemCounts[id] || 1).toString().padStart(2, '0')}</Typography>
                                        <button className='btn'
                                            onClick={() => this.setState(prevState => ({ addToCartClicked: { ...this.state.addToCartClicked, [id]: false }, itemCounts: { ...prevState.itemCounts, [id]: (prevState.itemCounts[id] || 1) + 1 } }))}
                                        >
                                            <PlusIcon />
                                        </button>
                                    </Box>
                                    {!this.state.addToCartClicked[id] ? (
                                        <PrimaryButton
                                            id={`add-to-cart-${id}`}
                                            buttonText={'Add to cart'}
                                            width='196px'
                                            height='48px'
                                            onClick={() => this.addItem(id, this.state.itemCounts[id] || 1)} // Передаем выбранное количество
                                        />
                                    ) : (
                                        <button className={!this.state.removeClicked[id] ? 'remove-btn' : 'remove-btn clicked'}
                                            onClick={() => this.removeItem(id)}
                                        >
                                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'8px'}>
                                                <ShoppingIcon />
                                                <Typography variant='label1' color={'mintGreen'}>Added</Typography>
                                            </Box>
                                        </button>

                                    )}
                                </Box>
                                <Divider />
                            </Box>
                        ))}
                    </Box>
                </Box >
            </>
        );
    }
} 