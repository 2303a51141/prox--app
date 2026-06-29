export default function Profile() {
  return (
    <>
      <div className="header">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-card">
        <div className="profile-row">
          <div className="avatar-wrap">
            <img
              className="avatar"
              src="https://i.pravatar.cc/150?img=47"
              alt="Marry Doe"
            />
            <span className="camera">📷</span>
          </div>
          <div>
            <p className="profile-name">Marry Doe</p>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="profile-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </>
  );
}
