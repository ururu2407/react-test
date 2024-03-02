import React, { Component, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, useTheme } from '@mui/material';
import { OutlinedButton, PrimaryButton } from '../../../components/customs';
import { useSwipeable } from 'react-swipeable';
import { PlusIcon, MinusIcon } from '../../../utils/icons';
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
            totalNumberOfItems: 0,
            cartSubTotal: 0,
            cartTaxes: 0,
            cartTotal: 0,
            selectedCategory: "Cupcake",
            items: [],
            taxRate: 8.25,
            itemCounts: {}
        };
    }

    products = [
        {
            id: 1,
            name: "Vanilla Cupcakes (6 Pack)",
            price: 12.99,
            category: "Cupcake",
            descriprion: "Classic vanilla-flavored cupcakes perfect for any occasion.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 2,
            name: "French Macaroon",
            price: 3.99,
            category: "Macaroon",
            descriprion: "Delicate almond meringue cookies with a creamy filling, a French delicacy.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 3,
            name: "Pumpkin Cupcake",
            price: 3.99,
            category: "Cupcake",
            descriprion: " Moist and flavorful cupcakes with a hint of pumpkin spice, ideal for autumn.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 4,
            name: "Chocolate Cupcake",
            price: 5.99,
            category: "Cupcake",
            descriprion: "Rich and decadent chocolate cupcakes topped with creamy frosting.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 5,
            name: "Chocolate Pretzels (4 Pack)",
            price: 10.99,
            category: "Pretzel",
            descriprion: "Crunchy pretzels coated in smooth chocolate for a sweet and salty treat.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 6,
            name: "Strawberry Ice Cream",
            price: 2.99,
            category: "Ice Cream",
            descriprion: "Creamy strawberry-flavored ice cream loaded with real fruit chunks.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 7,
            name: "Chocolate Macaroons (4 Pack)",
            price: 9.99,
            category: "Macaroon",
            descriprion: "Chewy coconut macaroons dipped in luxurious chocolate.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 8,
            name: "Strawberry Pretzel",
            price: 4.99,
            category: "Pretzel",
            descriprion: "Sweet and salty pretzel rods coated in strawberry-flavored candy.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 9,
            name: "Butter Pecan Ice Cream",
            price: 2.99,
            category: "Ice Cream",
            descriprion: "Velvety butter pecan ice cream packed with crunchy pecan pieces.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 10,
            name: "Rocky Road Ice Cream",
            price: 2.99,
            category: "Ice Cream",
            descriprion: "Creamy chocolate ice cream loaded with marshmallows and nuts for a delightful texture.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 11,
            name: "Vanilla Macaroons (5 Pack)",
            price: 11.99,
            category: "Macaroon",
            descriprion: "Coconut macaroons infused with fragrant vanilla flavor.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
        },
        {
            id: 12,
            name: "Lemon Cupcakes (4 Pack)",
            price: 12.99,
            category: "Cupcake",
            descriprion: "Zesty lemon-flavored cupcakes topped with tangy lemon frosting.",
            img1: 'https://i.imgur.com/pQP3y1x.png',
            img2: 'https://i.imgur.com/pQP3y1x.png'
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
                this.setState({ items: updatedItems }, () => {
                    this.addToCart(product.price * count); // Учитываем количество в общей стоимости
                });
            } else {
                // Новый продукт
                const newItem = { ...product, count };
                const items = [...this.state.items, newItem];
                this.setState({ items }, () => {
                    this.addToCart(product.price * count); // Учитываем количество в общей стоимости
                });
            }
        }
    };

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category });
    };

    calculateTaxes = () => {
        const taxRate = 8.25; // Assuming tax rate is constant
        this.setState({
            cartTaxes: parseFloat(((taxRate / 100) * this.state.cartSubTotal).toFixed(2)),
        });
    };

    calculateTotal = () => {
        this.setState(prevState => ({
            cartTotal: parseFloat((prevState.cartSubTotal + prevState.cartTaxes).toFixed(2)),
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
        const isCartCleared = window.confirm(
            'Are you sure you want to clear all items from your shopping cart?'
        );

        if (isCartCleared) {
            // Очистить корзину
            this.setState({
                totalNumberOfItems: 0,
                cartSubTotal: 0,
                cartTaxes: 0,
                cartTotal: 0,
                items: [],
            });
        }
    }
    style = {
        ' .swiper-slide': {
            width: '100%',
        }
    };
    render() {
        const filteredProducts = this.products.filter(product => product.category === this.state.selectedCategory);

        return (
            <>
                <Box display={'grid'} gap={'20px'}>
                    <Box backgroundColor='primary.light'>
                        <Typography>Total Number of items: {this.state.totalNumberOfItems}</Typography>
                        <Typography>Subtotal: {this.state.cartSubTotal}</Typography>
                        <Typography>Taxes: {this.state.cartTaxes}</Typography>
                        <Typography>Total: {this.state.cartTotal}</Typography>
                        {this.state.items.length > 0 && (
                            <div>
                                <Typography variant="h6">Items in Cart:</Typography>
                                {this.state.items.map(item => (
                                    <div key={item.id}>
                                        <Typography>{item.name} {item.count > 1 && `${item.count}x`}</Typography>
                                        <Typography>{item.price}$</Typography>
                                    </div>
                                ))}
                            </div>
                        )}
                        <OutlinedButton buttonText={'Clear Cart'} onClick={this.clearCart} />
                    </Box>
                    <Box display='flex' flexWrap={'wrap'}>
                        <OutlinedButton buttonText={'Cupcake'} onClick={() => this.handleCategoryClick('Cupcake')} />
                        <OutlinedButton buttonText={'Ice Cream'} onClick={() => this.handleCategoryClick('Ice Cream')} />
                        <OutlinedButton buttonText={'Macaroon'} onClick={() => this.handleCategoryClick('Macaroon')} />
                        <OutlinedButton buttonText={'Pretzel'} onClick={() => this.handleCategoryClick('Pretzel')} />
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
                                <Box display={'flex'} justifyContent={'space-between'}>
                                    <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                                        <button className='btn' 
                                        onClick={() => this.setState(prevState => ({ itemCounts: { ...prevState.itemCounts, [id]: (prevState.itemCounts[id] || 1) - 1 } }))} disabled={this.state.itemCounts[id] <= 1}
                                        >
                                            <MinusIcon />
                                        </button>
                                        <Typography variant='body1' 
                                        color={'primary.light'}
                                        fontWeight={'Medium'}>{(this.state.itemCounts[id] || 1).toString().padStart(2, '0')}</Typography>
                                        <button className='btn' 
                                        onClick={() => this.setState(prevState => ({ itemCounts: { ...prevState.itemCounts, [id]: (prevState.itemCounts[id] || 1) + 1 } }))}
                                        >
                                            <PlusIcon />
                                        </button>
                                    </Box>
                                    <PrimaryButton
                                        id={`add-to-cart-${id}`}
                                        buttonText={'Add to cart'}
                                        onClick={() => this.addItem(id, this.state.itemCounts[id] || 1)} // Передаем выбранное количество
                                    />
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