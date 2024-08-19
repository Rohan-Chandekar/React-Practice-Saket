function ProfileCard(propss){
  return (
    <div className="ProfileCard">
      <h2>{propss.name}</h2>
      <h2>Age: {propss.age}</h2>
      <h2>Bio: {propss.bio}</h2>
    </div>
  )
}

export default  ProfileCard;