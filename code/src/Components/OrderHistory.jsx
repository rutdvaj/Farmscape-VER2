const OrderHistory = () => {
  return (
    <>
      <div className="OH OH-mobile">
        <div className="OH">
          <h2>Order History</h2>
        </div>
        <div className="OH-info">
          <ul className="info-1">
            <li className="info-1-i1">
              <p>Status : FOB cleared</p>
            </li>
            <li className="info-1-i2">
              <p>Date : 12/12/2012</p>
            </li>
            <li className="info-1-i3">
              <p>Order Details</p>
            </li>
            <li className="info-1-i4">
              <p>Invoice</p>
            </li>
          </ul>
          <div className="info-2">
            <ul className="info-2-1">
              <li className="info-2-i1">
                <p>2 tons fresh dry Ginger (Indian)</p>
              </li>
              <li className="info-2-i2">
                <p>Destination : </p>
                <p>Haifa port</p>
              </li>
            </ul>
            <ul className="info-2-2">
              <li className="info-3-i1">
                <p>Track order</p>
              </li>
              <li className="info-3-i2">
                <p>Order No. #-A404-7678</p>
              </li>
              <li className="info-3-i3">
                <p>Complainces/Docs</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="OH-info-2">
          <ul className="info-1">
            <li className="info-4-i1">
              <p>Status : In Transit</p>
            </li>
            <li className="info-4-i2">
              <p>Date : 9/12/2012</p>
            </li>
            <li className="info-4-i3">
              <p>Order Details</p>
            </li>
            <li className="info-4-i4">
              <p>Invoice</p>
            </li>
          </ul>
          <div className="info-2">
            <ul className="info-2-1">
              <li className="info-5-i1">
                <p>2 tons fresh beans (Indian)</p>
              </li>
              <li className="info-5-i2">
                <p>Destination : </p>
                <p>Volos port</p>
              </li>
            </ul>
            <ul className="info-2-2">
              <li className="info-6-i1">
                <p>Track order</p>
              </li>
              <li className="info-6-i2">
                <p>Order No. #-A404-7688</p>
              </li>
              <li className="info-6-i3">
                <p>Complainces/Docs</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
