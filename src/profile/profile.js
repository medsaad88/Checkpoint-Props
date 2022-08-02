import Proptypes from 'prop-types'
const Profile = (props) => {
  const {
    fullName = "user name",
    bio = "bio of the user ",
    profession = "profession of the user",
    handleName,
    children = "photo of the user",
  } = props;

  return (
    <div className="center" >
      <div className="avatar">
      {children}
      </div>
      <div className="contente" style={{padding:"20px"}}>
      <h1 style={{color:"wheat"}}>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
      </div>
      <div className="social">
        <a className='fb' href="https://www.facebook.com/othman.medsaad">Facebook</a>
        <a className='fb' href="mailto:mohamedsaad.othman@gmail.com">Gmail</a>
        <a className='fb' href="https://www.linkedin.com/in/mohamed-saad-othman-47563511/">LInkedIn</a>
      </div>
      <button onClick={handleName ? () => handleName('Med saad othman Tel:26925114'):()=>alert("no function")}>Contact me</button>
    </div>
  );
};

Profile.propTypes={
  fullName:Proptypes.string.isRequired,
  bio:Proptypes.string.isRequired,
  profession:Proptypes.string.isRequired,
  handleName:Proptypes.func.isRequired,
  children:Proptypes.element.isRequired
}


export default Profile;