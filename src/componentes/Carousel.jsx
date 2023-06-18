import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="white" style={{ marginTop: '50px' }}>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/ss_68f15d580bf91971f637be5e464bc803482d78f7.1920x1080.jpg?t=1686617933"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'inline' }}>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/ss_427677cf78195df94702f0a963cd9eaeb9d8935a.1920x1080.jpg?t=1673999865"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/ss_3654a5988db68f9b47740f9f6a9299682c365599.1920x1080.jpg?t=1683059745"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;