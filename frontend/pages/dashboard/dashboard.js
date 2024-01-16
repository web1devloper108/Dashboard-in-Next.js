import React from 'react'
import { useState } from 'react';
import Cards from '../cards/cards ';
import Form from '../form/form';
import styles from '../../styles/dashboard.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function dashboard() {

  const textItems = ['Most EASY PREMIUM WEB DESIGN PROCESS', 'RESEARCH & DEVELOPMENT BEFORE STARTING', 'MAKING A QUALITY DESIGN IDEAS', 'MAKING A QUALITY DESIGN IDEAS', 'MAKING A QUALITY DESIGN IDEAS'];
  const [consultationText, setConsultationText] = useState('Get a Free Consultation');
  const handleTextChange = (event) => {
    setConsultationText(event.target.value);
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a" }}>
      <div style={{ marginTop: '60px', color: 'white' }}>
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '60px' }}>
              <h1 className={styles.text1} style={{ marginTop: '60px', fontWeight: 'bold' }}>Transforming Ideas
                <br />
                Into
                <span style={{ color: '#f58505' }}> Powerful Solutions</span></h1>
              <p className={styles.text2} >FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC
                <br />
                DIGITAL MARKETING STRATEGIES.  PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</p>
              <Box sx={{ display: 'flex' }}>
                <PhoneIcon sx={{ backgroundColor: '#ff6f00', height: '40px', width: '40px', borderRadius: '5px', marginTop: '20px' }} />
                <Typography size="small" sx={{ border: '2px', backgroundColor: '#212121', borderRadius: '5px', borderColor: 'white', marginTop: '20px', height: '40px', width: '200px', paddingTop: '5px', paddingLeft: '5px' }}>
                  <input type="text" value={consultationText} onChange={handleTextChange} style={{ backgroundColor: '#343536', color: 'white' }} />
                </Typography>
              </Box>
            </div >
            <div >
              <img
                className={styles.carouselimage}
                src="/seo.png"
                alt=""
              />
            </div>
          </div>
          <hr className={styles.hr} />
          <div>
            <div style={{ display: 'flex', marginTop: '60px', marginLeft: '40px' }}>
              <div>
                <h1 >We provide the best web services</h1>
                <p style={{ marginTop: '30px' }} className={styles.text2}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT , CURAE POSUERE DONEC TELLUS EU
                  <br />
                  EGESTAS ALIQUET , LACINIA PARTURIENT FACILISI QUAM DICTUM SUSPENDISSE TINCIDUNT GRAVIDA VIVAMUS</p>
                <div>
                  <List>
                    {textItems.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckBoxIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </div>

              </div>
              <div style={{ marginLeft: '10px' }}>
                <img
                  className={styles.carouselimage}
                  src="/second.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '90px' }}>
            <h1 className={styles.text1} style={{ fontWeight: 'bold', textAlign: 'center', fontWeight: 'bold' }}>Services We're Offering</h1>
            <div ><Cards /></div>
          </div>
          <div >
            <h1 className={styles.text1} style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '130px' }}>Contact Us</h1>
            <div style={{ display: 'flex', marginTop: '100px' }}>
              <div style={{ marginLeft: '80px' }}>
                <img
                  className={styles.fimage}
                  src="/formimage.png"
                  alt=""
                />
              </div>
              <div>
                <Form />
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <h6 style={{ textAlign: 'center' }}>Copyright © 2021 Micro Technologies
                All Right Reserved</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard