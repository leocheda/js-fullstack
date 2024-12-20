function UserData({ style, h1Styles, userData }) {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <h1 style={h1Styles}>用户数据</h1>
      <h2>{userData.count} k</h2>
      <p>{userData.rate}，与上月相比</p>
    </div>
  );
}

export default UserData;
