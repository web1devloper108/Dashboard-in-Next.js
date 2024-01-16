import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ecomlogo from '../../public/cardimage1.png'

import styles from '../../styles/card.module.css';

function cards() {
    return (
        <div>
            <div style={{ display: 'flex', marginTop: '110px' }}>
                <div style={{ marginLeft: '110px' }}>
                    <div>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }} className={styles.cardcolor} >
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px', marginLeft: '20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={`${styles['card-description']} ${styles['custom-text-size']}`}>
                                    FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div >
                    <div style={{ marginTop: '70px' }}>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }} className={styles.cardcolor} >
                            <Typography variant="h6" noWrap component="div">

                                <Image src='/cardimage2.png' alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px', marginLeft: '20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    SEO
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={`${styles['card-description']} ${styles['custom-text-size']}`}>
                                    FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop: '70px' }}>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }} className={styles.cardcolor2} >
                            <Typography variant="h6" noWrap component="div">

                                <Image src='/cardimage3.png' alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px', marginLeft: '20px' }} className={styles.cardcolor} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Dev Ops
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={`${styles['card-description']} ${styles['custom-text-size']}`}>
                                    FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div style={{ marginLeft: '145px' }}>
                    <div>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }} className={styles.cardcolor1} >
                            <Typography variant="h6" noWrap component="div">

                                <Image src='/cardimage4.png' alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px', marginLeft: '20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web/Mobile Application
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={`${styles['card-description']} ${styles['custom-text-size']}`}>
                                    FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop: '70px' }}>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }} className={styles.cardcolor1}>
                            <Typography variant="h6" noWrap component="div">

                                <Image src='/cardimage5.png' alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px', marginLeft: '20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Digital Marketing
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={`${styles['card-description']} ${styles['custom-text-size']}`}>
                                    FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop: '70px' }}>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }} className={styles.cardcolor1}>
                            <Typography variant="h6" noWrap component="div">

                                <Image src='/cardimage6.png' alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px', marginLeft: '20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Data Science
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={`${styles['card-description']} ${styles['custom-text-size']}`}>
                                    FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default cards 