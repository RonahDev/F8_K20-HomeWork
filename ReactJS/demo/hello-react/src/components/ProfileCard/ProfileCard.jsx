import "./ProfileCard.css"

function ProfileCard (props) {
    return (
        <div className="profile-card">
            <h1> Xin chào bạn {props.name} </h1>

            <p>Bạn năm nay {props.age} tuổi</p>

            <p>Sở thích của bạn là {props.hobby}</p>

            <p>hihi gg</p>
        </div>
    )
}
export default ProfileCard