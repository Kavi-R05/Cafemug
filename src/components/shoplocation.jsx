import "../styles/shoplocation.css";

function ShopLocation() {
  return (
    <section className="shop-location" id="location">
      <h2>Visit Our Stores</h2>

      <div className="location-grid">
        <div className="location-card">
          <h3>Main Branch</h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.348537648035!2d77.3475266!3d11.087380300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9077f11ff3fbf%3A0x768ab1bf09202193!2sCafemug!5e0!3m2!1sen!2sin!4v1780847063653!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CafeMug Main Branch"
          ></iframe>

          <p>
            No.9, Gopal complex, Palladam Main Rd, Thennampalayam, Tiruppur,
            Tamil Nadu 641604
          </p>
        </div>

        <div className="location-card">
          <h3>Branch 2</h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1506648993327!2d77.357941!3d11.1021468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9076b90fa953b%3A0xc07431be1cf7cb81!2sCafemug!5e0!3m2!1sen!2sin!4v1780887697357!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CafeMug Branch 2"
          ></iframe>

          <p>
            102, Chinnathottam Main Road, Kangayam Rd, K N P Colony, Bavani
            Nagar, Pudhukkadu, Tiruppur, Tamil Nadu 641604
          </p>
        </div>
      </div>
    </section>
  );
}

export default ShopLocation;
