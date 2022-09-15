import Client from '../../images/client.png'
import ClientSecond from '../../images/client2.png'
import ClientThird from '../../images/client3.png'
import CertificateImg from '../../images/image1.jpg'

export const Certificate = () => {
  return (
    <div className="certificate-section">
      <div className=" certificate-container container">
        <div className='client-info__section'>
        <h2 className="text certificate-title">
          Createx Certificate <br />
          <span className="title">Your expertise will be confirmed</span>
        </h2>
        <p className='certificate-text'>
          We are accredited by international professional organizations and
          institutes:
        </p>
        <ul className='client-list'>
            <li className='client-list__item'>
                <img src={Client} alt="Client logo" />
            </li>
            <li className='client-list__item'>
                <img src={ClientSecond} alt="Client logo" />
            </li>
            <li className='client-list__item'>
                <img src={ClientThird} alt="Client logo" />
            </li>
        </ul>
        </div>
        <div  className='sertificate-img'>
    <img src={CertificateImg}  width='650' alt="certificate" />
    </div>
      </div>
    </div>
  );
};
