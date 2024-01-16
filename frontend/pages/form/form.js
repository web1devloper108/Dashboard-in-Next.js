import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import styles from '../../styles/form.module.css';

export default function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:7000/register', values);
      if (res.data.Status === 'Success') {
        router.push('/dashboard');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <div style={{ marginLeft: '200px', width: '500px' }}>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email address">Email </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className={styles.input}
              autoComplete="current-password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="number"
              onChange={(e) => setValues({ ...values, Phone: e.target.value })}
              className={styles.input}
            />
          </div>
          <br />
          <button type="submit" className={styles.buttonstyle} style={{ color: 'black' }}>
            Connect
          </button>
        </Form>
      </div>
    </div>
  );
}
