import "./Premium.css";

export default function Premium() {
  return (
    <div className="premium-page">
      <h1>Get Premium free for 1 month</h1>
      <p>Only ₹119/month after. Cancel anytime.</p>

      <button className="get-premium">
        Get Premium
      </button>

      <div className="plans">
        <div className="plan-card">
          <h3>Individual</h3>
          <p>1 account</p>
          <p>Ad-free music</p>
          <p>Offline listening</p>
        </div>

        <div className="plan-card">
          <h3>Duo</h3>
          <p>2 accounts</p>
          <p>Ad-free music</p>
        </div>

        <div className="plan-card">
          <h3>Family</h3>
          <p>Up to 6 accounts</p>
          <p>Block explicit music</p>
        </div>
      </div>
    </div>
  );
}
